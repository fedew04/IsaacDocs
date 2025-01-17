# Class "Isaac"
## Functions
### AddCallback () {: aria-label='Functions' }
#### void AddCallback ( table ref, int callbackId, table callbackFn, int entityId )  {: aria-label='Functions' }

___ 
### AddPillEffectToPool () {: aria-label='Functions' }
#### int AddPillEffectToPool ( int pillEffect)  {: aria-label='Functions' }
returns pill color 
___ 
### ConsoleOutput () {: aria-label='Functions' }
#### void ConsoleOutput ( string text)  {: aria-label='Functions' }

Prints a string into the Debug Console
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
You can use this example as an alternative.
```cpp 
Isaac.ConsoleOutput("This is a Test.")
-- Output: This is a Test.

-- Alternatively:
print("This is a Test.")
-- Output: This is a Test.

```

___ 
### CountBosses () {: aria-label='Functions' }
#### int CountBosses ( )  {: aria-label='Functions' }

Returns the number of bosses in the current room.
___ 
### CountEnemies () {: aria-label='Functions' }
#### int CountEnemies ( )  {: aria-label='Functions' }

Returns the number of enemies in the current room.
___ 
### CountEntities () {: aria-label='Functions' }
#### int CountEntities ( [Entity](../Entity) Spawner, int Type, int Variant, int Subtype )  {: aria-label='Functions' }

Returns the number of entities in the current room that fulfill the specified requirements.
Spawner refers to an entity object (can be `:::cpp nil`) 
Type refers to the found entity's type (Can be `:::cpp EntityType.ENTITY_NULL`) 
Variant and Subtype refer to the found entitys Variant and Subtype (Can be `:::cpp -1`) 
___ 
### DebugString () {: aria-label='Functions' }
#### void DebugString ( string str)  {: aria-label='Functions' }

Prints a string into the log file. You can find this file here `:::cpp C:\Users\Jan\Documents\My Games\Binding of Isaac Afterbirth+\log.txt` 
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code prints `:::cpp "This is a Test."` in the log.txt file.
```cpp 
Isaac.DebugString("This is a Test.")
-- Output: Lua Debug: This is a Test.

```

___ 
### ExecuteCommand () {: aria-label='Functions' }
#### string ExecuteCommand ( string command)  {: aria-label='Functions' }

This function executes a debug console command. see <a href="tutorial_debug_console.html">[Tutorial] Debug Console</a> for informations on how to use commands.
___ 
### Explode () {: aria-label='Functions' }
#### void Explode ( [Vector](../Vector) pos, [Entity](../Entity) source, float damage )  {: aria-label='Functions' }

Spawn an explosion on a specified location.
___ 
### FindByType () {: aria-label='Functions' }
#### table FindByType ( int Type, int Variant, int Subtype, boolean Cache, boolean IgnoreFriendly )  {: aria-label='Functions' }
Returns entities based on Type, Variant, Subtype. If Variant and/or Subtype is -1 then everything is includedUse Cache flag for multiple calls per frame. 
___ 
### FindInRadius () {: aria-label='Functions' }
#### table FindInRadius ( [Vector](../Vector) Position, float Radius, int Partitions )  {: aria-label='Functions' }
Returns entities in range of Radius from Position filtered by Partitions mask (see <a href="group__enums.html#gaea2d06861d0d38120ea425aa76d2f398">EntityPartition enum</a>) (include all = 0xffffffff) 

This function does not return the entities sorted by nearest first, but based on the order they were loaded.
___ 
### GetCardIdByName () {: aria-label='Functions' }
#### int GetCardIdByName ( string cardHudName)  {: aria-label='Functions' }

Returns the CardID based on its hud value. (File: pocketitems.xml)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
The name of this function is misleading, this function will only work with the hud value of a card and not the name of a card.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the CardID of XVI - The Tower. 
```cpp 
Isaac.GetCardIdByName("16_TheTower")
--Returns: 17

```

___ 
### GetChallenge () {: aria-label='Functions' }
#### int GetChallenge ( )  {: aria-label='Functions' }
Returns the ID of a challenge the player is currently in. Returns 0 if the player is not playing any challenge.
___ 
### GetChallengeIdByName () {: aria-label='Functions' }
#### int GetChallengeIdByName ( string challengeName)  {: aria-label='Functions' }

Returns the ChallengeID of a challenge based on its name. (File: challenges.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the ChallengeID of Aprils fool. 
```cpp 
Isaac.GetChallengeIdByName("Aprils fool")
--Returns: 32

```

___ 
### GetCostumeIdByPath () {: aria-label='Functions' }
#### int GetCostumeIdByPath ( string path)  {: aria-label='Functions' }

Returns the CostumeID of a costume based on its file path. (File: costumes2.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the CostumeID of the Poop transformation costume.
```cpp 
Isaac.GetCostumeIdByPath("gfx/characters/n027_Transformation_Poop.anm2")
--Returns: 27

```

___ 
### GetCurseIdByName () {: aria-label='Functions' }
#### int GetCurseIdByName ( string curseName)  {: aria-label='Functions' }

Returns the CurseID of a curse based on its name. (File: curses.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the CurseID of Curse of the Unknown.
```cpp 
Isaac.GetCurseIdByName("Curse of the Unknown")
--Returns: 4

```

___ 
### GetEntityTypeByName () {: aria-label='Functions' }
#### int GetEntityTypeByName ( string entityName)  {: aria-label='Functions' }

Returns the EntityType of an entity based on its name. (File: entities2.xml)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
There is no SubType version of this function.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the EntityType of Flaming Gaper. 
```cpp 
Isaac.GetEntityTypeByName("Flaming Gaper")
--Returns: 10

```

___ 
### GetEntityVariantByName () {: aria-label='Functions' }
#### int GetEntityVariantByName ( string entityName)  {: aria-label='Functions' }

Returns the variant of an entity based on its name. (File: entities2.xml)
##### :fontawesome-solid-comment: Notes {: .subHeader .notes }
There is no SubType version of this function.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the variant of Flaming Gaper. 
```cpp 
Isaac.GetEntityVariantByName("Flaming Gaper")
--Returns: 2

```

___ 
### GetFrameCount () {: aria-label='Functions' }
#### int GetFrameCount ( )  {: aria-label='Functions' }

Returns the amount of frames the game as a whole is running. The counter increases even when the game is paused or when you are in the main menu!
1 second equals roughtly 60 frames.
This function therefore works drastically different than <a href="class_game.html#aa73e5db19effb746a5e5da21e7d92207">`:::cpp Game():GetFrameCount()`</a>
___ 
### GetFreeNearPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetFreeNearPosition ( [Vector](../Vector) pos, float step )  {: aria-label='Functions' }

___ 
### GetItemConfig () {: aria-label='Functions' }
#### [Config](../ItemConfig_Config) GetItemConfig ( )  {: aria-label='Functions' }
Returns the <a class="el" href="class_item_config_1_1_config.html">ItemConfig::Config</a> object.
___ 
### GetItemIdByName () {: aria-label='Functions' }
#### int GetItemIdByName ( string itemName)  {: aria-label='Functions' }

Returns the ItemID of a Collectible. (File: items.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the ItemID of Brimstone.
```cpp 
Isaac.GetItemIdByName("Brimstone")
--Returns: 118

```

___ 
### GetMusicIdByName () {: aria-label='Functions' }
#### int GetMusicIdByName ( string musicName)  {: aria-label='Functions' }

Returns the MusicID of a music track. (File: music.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the MusicID of the Title Screen.
```cpp 
Isaac.GetMusicIdByName("Title Screen")
--Returns: 61

```

___ 
### GetPillEffectByName () {: aria-label='Functions' }
#### int GetPillEffectByName ( string pillEffect)  {: aria-label='Functions' }

Returns the PillEffectID based on its name. (File: pocketitems.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the PillEffectID of I can see forever!.
```cpp 
Isaac.GetPillEffectByName("I can see forever!")
--Returns: 23

```

___ 
### GetPlayer () {: aria-label='Functions' }
#### [EntityPlayer](../EntityPlayer) GetPlayer ( int playerId)  {: aria-label='Functions' }

Returns the EntityPlayer which the user is controlling. 0 = Main player. Higher numbers refer to coop babies.
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
```cpp 
Isaac.GetPlayer(0)

```

___ 
### GetPlayerTypeByName () {: aria-label='Functions' }
#### int GetPlayerTypeByName ( string playerName)  {: aria-label='Functions' }

Returns the PlayerType of a character based on its name. (File: players.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the PlayerType of Azazel. 
```cpp 
Isaac.GetPlayerTypeByName("Azazel")
--Returns: 7

```

___ 
### GetRandomPosition () {: aria-label='Functions' }
#### [Vector](../Vector) GetRandomPosition ( )  {: aria-label='Functions' }

Returns a random position inside the current room. The Return value is a Vector containing the position in world coordinates.
___ 
### GetRoomEntities () {: aria-label='Functions' }
#### table GetRoomEntities ( )  {: aria-label='Functions' }
Returns a table containing all entities in the room.
___ 
### GetSoundIdByName () {: aria-label='Functions' }
#### int GetSoundIdByName ( string soundName)  {: aria-label='Functions' }

Returns the SoundEffectID of a sound based on its name. (File: sounds.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the SoundEffectID of a sound named "Custom Sound Effect"
```cpp 
Isaac.GetSoundIdByName("Custom Sound Effect")

```

___ 
### GetTextWidth () {: aria-label='Functions' }
#### int GetTextWidth ( string str)  {: aria-label='Functions' }

Returns the width of the given string in pixels based on the "terminus8" font (same font as used in Isaac.RenderText())
___ 
### GetTime () {: aria-label='Functions' }
#### int GetTime ( )  {: aria-label='Functions' }

Returns the current game time in milliseconds. This includes pauses!
___ 
### GetTrinketIdByName () {: aria-label='Functions' }
#### int GetTrinketIdByName ( string trinketName)  {: aria-label='Functions' }

Returns the TrinketType of a trinket based on its name. (File: items.xml)
##### :fontawesome-solid-code: Example Code {: .subHeader .example_code }
This code gets the TrinketType of Lucky Toe. 
```cpp 
Isaac.GetTrinketIdByName("Lucky Toe")
--Returns: 42

```

___ 
### GridSpawn () {: aria-label='Functions' }
#### [GridEntity](../GridEntity) GridSpawn ( [GridEntity](../GridEntity) gridEntityType, int Variant, [Vector](../Vector) position, boolean forced )  {: aria-label='Functions' }

Spawn a <a class="el" href="class_grid_entity.html">GridEntity</a> at the given position (world coordinates).
##### :fontawesome-solid-bug: Bugs {: .subHeader .bugs }
forced has no effect and will NOT override the grid entity at the given location. Remove a grid entity at the given location if nessesary before spawning something again.
___ 
### HasModData () {: aria-label='Functions' }
#### boolean HasModData ( table ref)  {: aria-label='Functions' }

Returns "true" if your mod has Data stored using the "SaveModData()" function. Aka. if there is a "saveX.dat" file in your mod folder.There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
### LoadModData () {: aria-label='Functions' }
#### string LoadModData ( table ref)  {: aria-label='Functions' }

___ 
### RegisterMod () {: aria-label='Functions' }
#### void RegisterMod ( table ref, string modName, int apiVersion )  {: aria-label='Functions' }

Method to define a mod in the game. THIS NEEDS TO BE DEFINED IN EVERY MOD!
___ 
### RemoveCallback () {: aria-label='Functions' }
#### void RemoveCallback ( table ref, int callbackId, table callbackFn )  {: aria-label='Functions' }

___ 
### RemoveModData () {: aria-label='Functions' }
#### void RemoveModData ( table ref)  {: aria-label='Functions' }

Deletes the stored "saveX.dat" file if it exists. 
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
### RenderScaledText () {: aria-label='Functions' }
#### void RenderScaledText ( string str, float X, float Y, float ScaleX, float ScaleY, float R, float G, float B, float A )  {: aria-label='Functions' }

Renders a scaled text on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). ScaleX, ScaleY, R ,G ,B and A need to be between [0,1]. Some scale values can cause the font to display deformed and pixelated.
___ 
### RenderText () {: aria-label='Functions' }
#### void RenderText ( string str, float X, float Y, float R, float G, float B, float A )  {: aria-label='Functions' }

Renders a text with the default size on the Screen. X and Y coordinates need to be in screen coordinates ( x[0,~500) y [0,~350) ). R,G,B and A need to be between [0,1]. 
___ 
### SaveModData () {: aria-label='Functions' }
#### void SaveModData ( table ref, string data )  {: aria-label='Functions' }

Stores a JSON array/table in a "saveX.dat" file. The stored Data persists thruout resets and game restart, so its perfect to store persistent data.
There are 3 "saveX.dat" files, one per Savegame. They are stored in the mod's folder next to the "main.lua" file. The number indicates the savegame it corresponds to. The number will be determined automatically by the game.
___ 
### ScreenToWorld () {: aria-label='Functions' }
#### [Vector](../Vector) ScreenToWorld ( [Vector](../Vector) pos)  {: aria-label='Functions' }

Transfers Screen (aka. Window coordinates) into Worldcoordinates. This can be used to get a specific location in the room in World coordnates The World coordinate system is x[0,inf) y[0,inf).
___ 
### ScreenToWorldDistance () {: aria-label='Functions' }
#### [Vector](../Vector) ScreenToWorldDistance ( [Vector](../Vector) pos)  {: aria-label='Functions' }

___ 
### [Spawn](../RoomConfig_Spawn) () {: aria-label='Functions' }
#### [Entity](../Entity) [Spawn](../RoomConfig_Spawn) ( int entityType, int entityVariant, int entitySubtype, [Vector](../Vector) position, [Vector](../Vector) velocity, [Entity](../Entity) Spawner )  {: aria-label='Functions' }

Spawns the defined entity at the given location. If the position is not free, it spawns it in the nearest free position.
There are two spawn functions. <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a> and <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a>. If you need to spawn something with a specific seed, then you use <a class="el" href="#a3e89d68066acde06705fa43413d3c0fa">Game():Spawn()</a>. If you need to spawn something with a randomly generated seed, then use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>. Most of the time, you will probably want to use <a class="el" href="namespace_isaac.html#aa0ae6af78258bd135855fee38601ba3f">Isaac.Spawn()</a>.
___ 
### WorldToRenderPosition () {: aria-label='Functions' }
#### [Vector](../Vector) WorldToRenderPosition ( [Vector](../Vector) pos)  {: aria-label='Functions' }

Transfers world (aka. game coordinates) into Rendercoordinates. This can be used to render things at fixed positions in a room. The Render coordinate system is x[0,inf) y[0,inf). It defines the Position on the rendering-plane in the current room.
___ 
### WorldToScreen () {: aria-label='Functions' }
#### [Vector](../Vector) WorldToScreen ( [Vector](../Vector) pos)  {: aria-label='Functions' }

Transfers world (aka. game coordinates) into Screen (aka. Window) coordinates. This can be used to render things next to an entity. The Screen coordinate system is x[0,inf) y[0,inf). Normally, it goes till ~500x ~300y. The return vector contains integer values or numbers ending with .5
___ 
### WorldToScreenDistance () {: aria-label='Functions' }
#### [Vector](../Vector) WorldToScreenDistance ( [Vector](../Vector) pos)  {: aria-label='Functions' }

___ 
