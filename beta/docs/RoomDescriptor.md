# Class "RoomDescriptor"
## Functions
## Variables
### AllowedDoors {: aria-label='Variables' }
#### DoorSet AllowedDoors  {: aria-label='Variables' }
Contains just on load swapped data (in cases like minibosses, or other such events) 
___ 
### AwardSeed {: aria-label='Variables' }
#### int AwardSeed  {: aria-label='Variables' }
used to spawn clear awards (normal, miniboss, boss rooms) and initialize shop items (shop, devil rooms) 
___ 
### ChallengeDone {: aria-label='Variables' }
#### boolean ChallengeDone  {: aria-label='Variables' }

___ 
### Clear {: aria-label='Variables' }
#### boolean Clear  {: aria-label='Variables' }

___ 
### ClearCount {: aria-label='Variables' }
#### int ClearCount  {: aria-label='Variables' }
room is clear, don't spawn enemies when visiting bool Clear; 
___ 
### Data {: aria-label='Variables' }
#### [RoomDescriptorData](../RoomDescriptorData) Data  {: aria-label='Variables' }

___ 
### DecorationSeed {: aria-label='Variables' }
#### int DecorationSeed  {: aria-label='Variables' }
bool AltBossMusic; used for cosmetic stuff like backdrops, room decorations, shopkeeper skins 
___ 
### DeliriumDistance {: aria-label='Variables' }
#### int DeliriumDistance  {: aria-label='Variables' }
Helper for The Void stage, holds the distance to the Delirium boss in room nr. 
___ 
### DisplayFlags {: aria-label='Variables' }
#### int DisplayFlags  {: aria-label='Variables' }

Indicates what is visible on the minimap.
**Display Flags (bitwise):**
<pre>`:::cpp 1 &lt;&lt; -1 -- Invisible
1 &lt;&lt; 0 -- Visible
1 &lt;&lt; 1 -- Room Shadow
1 &lt;&lt; 2 -- Show Icon`</pre>

The flags are hard to interpret, but here are some examples:<br/>

000 = invisible, this is how most rooms start<br/>

101 = standard room visibility, this includes rooms that are adjacent and you haven't actively visited. This will usually show icons.<br/>

011 = secret room, locked rooms, sac rooms pre-entry*<br/>

111 = 011 rooms after entry, but also the rooms directly adjacent to them* (applied after entry)<br/><br/>

* If you have spelunker's hat, bit 1 is completely unused. All special rooms will have the normal behavior of either 000 or 101. iirc this is unique to spelunker's hat, mapping items follow the normal rules.<br/>

    From this my best guess is that bits 1 and 2 are special rendering (display hehe) flags that may have more meaning down below. The important bit for using them is minding that they're used differently mostly for special rooms. As far as I've seen, 001 is completely unused. 010, 100, and 110 may be used for compass or blue map, I don't remember. I think they use 100
<!--end Custom comment -->
___ 
### GridIndex {: aria-label='Variables' }
#### int GridIndex  {: aria-label='Variables' }
index in the level grid (always top left) 
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
This will always return the top left coordinate of the room on the levelgrid. Therefore, it will return an index not part of the actual room, when checking this value for J-shaped rooms. (See graphic below)
___ 
### HasWater {: aria-label='Variables' }
#### boolean HasWater  {: aria-label='Variables' }

___ 
### ListIndex {: aria-label='Variables' }
#### int ListIndex  {: aria-label='Variables' }
index in the room list 
___ 
### NoReward {: aria-label='Variables' }
#### boolean NoReward  {: aria-label='Variables' }

___ 
### OverrideData {: aria-label='Variables' }
#### [RoomDescriptorData](../RoomDescriptorData) OverrideData  {: aria-label='Variables' }
Tim's reminder to himself: The room variant is in Data. Because Room::Init uses a mix of datas, one from level layout and one from replacement data like minibosses, we need to hold the new room data somewhere. 
___ 
### PitsCount {: aria-label='Variables' }
#### int PitsCount  {: aria-label='Variables' }

___ 
### PoopCount {: aria-label='Variables' }
#### int PoopCount  {: aria-label='Variables' }
bool HasWater; 
___ 
### PressurePlatesTriggered {: aria-label='Variables' }
#### boolean PressurePlatesTriggered  {: aria-label='Variables' }

___ 
### SacrificeDone {: aria-label='Variables' }
#### boolean SacrificeDone  {: aria-label='Variables' }

___ 
### SafeGridIndex {: aria-label='Variables' }
#### int SafeGridIndex  {: aria-label='Variables' }
index in the level grid (not always top left, but is guaranteed to point to the room. this is important for LTL shapes!) 
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
This will always return the top left coordinate of the room on the levelgrid, except for J-shaped rooms, where it returns the top right index. (see graphic below) 
___ 
### ShopItemDiscountIdx {: aria-label='Variables' }
#### int ShopItemDiscountIdx  {: aria-label='Variables' }

___ 
### ShopItemIdx {: aria-label='Variables' }
#### int ShopItemIdx  {: aria-label='Variables' }

___ 
### SpawnSeed {: aria-label='Variables' }
#### int SpawnSeed  {: aria-label='Variables' }
used to spawn entities at room load and initialize enemy drop seeds 
___ 
### SurpriseMiniboss {: aria-label='Variables' }
#### boolean SurpriseMiniboss  {: aria-label='Variables' }

___ 
### VisitedCount {: aria-label='Variables' }
#### int VisitedCount  {: aria-label='Variables' }
how often the room has been visited 
___ 
