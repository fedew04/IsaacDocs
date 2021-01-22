$(document).ready(function() {
    loadDarkModeState();
    $(".md-search").append("<img onclick=\"toggleDarkMode()\" src=\"https://raw.githubusercontent.com/wofsauge/IsaacDocs/master/images/darkMode.png\" title=\"Toggle Darkmode\" class=\"darkmodeButton\" width=\"25\" height=\"25\" alt=\"darkmode\" />");
    //$(".md-search").append("<img onclick=\"toggleCollapse()\" src=\"https://raw.githubusercontent.com/wofsauge/IsaacDocs/master/images/darkMode.png\" title=\"Collapse content\" class=\"darkmodeButton\" width=\"25\" height=\"25\" alt=\"Collapse Content\" />");
    $("div.md-search-result").prepend("<span class=\"clearSearchMarks\" onclick=\"unmarkStuff()\">Remove current highlights X</span>");
});

function loadDarkModeState() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("darkMode") == 1) {
            $("body").addClass("darkMode");
        }
    }
}
loadDarkModeState();

function unmarkStuff() {
    $content.unmark();
}

function toggleCollapse() {

}

function toggleDarkMode() {
    if (typeof(Storage) !== "undefined") {
        var darkModeState = localStorage.getItem("darkMode");
        if (darkModeState == null || darkModeState == 0) {
            darkModeState = 1;
            $("body").addClass("darkMode");
        } else {
            darkModeState = 0;
            $("body").removeClass("darkMode");
        }
        localStorage.setItem("darkMode", darkModeState);
    } else {
        $("body").toggleClass("darkMode");
    }
}


function reevaluateLastVisit() {
    if (typeof(Storage) !== "undefined") {
        $(".md-nav[aria-label=\"Last visited\"]").find("a").each(function(index) {
            var lastVisitEntry = getRecentList()[index];
            if (lastVisitEntry !== undefined) {
                $(this).attr("href", lastVisitEntry);
                var linkName = lastVisitEntry.substring(1, lastVisitEntry.length - 1);
                $(this).text(linkName);
            } else {
                $(this).parent().hide();
            }
        });

    } else {
        $(".md-nav[aria-label=\"Last visited\"]").parent().hide();
    }
}

function getRecentList() {
    var recentList = localStorage.getItem("recentlyVisited");
    if (recentList == null) {
        recentList = [];
    } else {
        recentList = recentList.split(',');
    }
    return recentList;
}

app.document$.subscribe(function() {
    loadDarkModeState();
    if (typeof(Storage) !== "undefined") {
        // handle recently visited
        var recentList = getRecentList();

        var pathname = window.location.pathname;
        if (pathname !== "/") {
            const index = recentList.indexOf(pathname);
            if (index > -1) {
                recentList.splice(index, 1);
            }
            recentList.unshift(pathname);
            recentList.splice(10, 1);
            localStorage.setItem("recentlyVisited", recentList.toString());
        }
    }
    // handle badge line object
    $(".badge").each(function(table) {
        if ($(this).parent().prop("tagName") == "P") {
            $(this).parent().addClass("badgeLine");
        }
    });

    // handle frequently used Entry
    $("nav[aria-label=\"Frequently used\"]").parent().addClass("frequentlyUsed");

    $(".md-nav[aria-label=\"Last visited\"]").siblings().click(function() {
        reevaluateLastVisit();
    });
    $("div.md-footer-nav").find("a[href*='PLACEHOLDER']").first().hide();

    // Make tables sortable
    document.querySelectorAll("article table").forEach(function(table) {
        new Tablesort(table)
    })

    // handle Copy Buttons
    $(".copyable").append('<button class="md-clipboard copyButton md-icon"><span>Copy to clipboard</span></button>');

    $(".copyButton").click(function() {
        var parent = $(this).parent();
        $(this).find("span").first().text("");

        var pathname = window.location.pathname;
        pathname = pathname.substring(1, pathname.length - 1);
        var splitted = pathname.split("/");
        pathname = splitted[splitted.length - 1];
        var funcNameLine = "";
        parent.each(function(index) {
            funcNameLine = $(this).text();
        });
        var functionString = funcNameLine;
        if (funcNameLine.includes("(")) {
            functionString = funcNameLine.replace(" ( ", "(").replace(" )", "").replace(")", "");
            var funcPart1 = functionString.split("(")[0].split(" ");
            var p1 = funcPart1[funcPart1.length - 1];
            var funcPart2 = "";
            $.each(functionString.split("(")[1].split(", "), function(index, value) {
                if (index > 0) {
                    funcPart2 += ", ";
                }
                if (value.split(" ").length > 1) {
                    funcPart2 += value.split(" ")[1];
                }
            });
            functionString = p1 + "(" + funcPart2 + ")";
        } else {
            functionString = functionString.split(" ")[functionString.split(" ").length - 1]
        }

        var connector = ".";
        if (funcNameLine.includes("(") && !pathname.includes("Isaac")) {
            connector = ":";
        }
        if (!window.location.pathname.includes("enums") && !pathname.includes("Isaac")) {
            pathname = "";
        }

        var copyText = pathname + connector + functionString;

        copyText = copyText.replace("Copy to clipboard", "");
        parent.append('<textarea>' + copyText + '</textarea>');
        parent.find("textarea").each(function(index) {
            $(this).select();
            document.execCommand("copy");
            $(this).remove();
        });
        $(this).find("span").first().text("Copied: \n" + copyText);
    });

    $(".copyButton").mouseleave(function() {
        $(this).find("span").first().text("Copy to clipboard");
    });
    $("input[aria-label=\"Search\"]").change(function() {
        var searchText = $(this).val();
        $("li.md-search-result__item").find('a').each(function(e) {
            var jumpTargetValue = $(this).attr('href').split("#");
            var jumpTarget = "";
            if (jumpTargetValue.length > 1) {
                jumpTarget = "#" + jumpTargetValue[1];
            }
            var link = $(this).attr('href').split("?")[0].split("#")[0];
            $(this).attr('href', link + "?q=" + searchText + jumpTarget);
        });
    });

    mark();
});


// mark.js functionality
var $results;
var $content = $("article");
var mark = function() {
    // Read the url
    var sPageURL = window.location.search;
    if (sPageURL.indexOf("?") !== -1) {

        // Generate an array with all referrer parameters
        var qs = sPageURL.substr(sPageURL.indexOf('?') + 1);
        var qsa = qs.split('&');

        // Get search keywords
        var keyword = "";
        for (var i = 0; i < qsa.length; i++) {
            var currentParam = qsa[i].split('=');
            if (currentParam.length !== 2) {
                continue;
            }
            if (currentParam[0] == "q") {
                keyword = decodeURIComponent(currentParam[1].replace(/\+/g, "%20"));
            }
        }

        if (keyword != "") {
            // Mark the keyword inside the context
            $content.unmark({
                done: function() {
                    $content.mark(keyword, {
                        separateWordSearch: true,
                        done: function() {
                            $results = $content.find("mark");
                            jumpToFirst();
                        }
                    });
                }
            });
        }
    }
};

function jumpToFirst() {
    if ($results.length) {
        var position,
            $current = $results.eq(0);
        if ($current.length) {
            position = $current.offset().top - 75;
            window.scrollTo(0, position);
        }
    }
}