
var games = [
    {label: 'Grand Theft Auto V', value: 1},
    {label: 'The Witcher 3: Wild Hunt', value: 2},
    {label: 'Portal 2', value: 3},
    {label: 'Tomb Raider (2013)', value: 4},
    {label: 'Counter-Strike: Global Offensive', value: 5},
    {label: 'The Elder Scrolls V: Skyrim', value: 6},
    {label: 'Left 4 Dead 2', value: 7},
    {label: 'Portal', value: 8},
    {label: 'BioShock Infinite', value: 9},
    {label: 'Life is Strange', value: 10},
    {label: 'Borderlands 2', value: 11},
    {label: 'Red Dead Redemption 2', value: 12},
    {label: 'Half-Life 2', value: 13},
    {label: 'BioShock', value: 14},
    {label: 'Limbo', value: 15},
    {label: 'DOOM (2016)', value: 16},
    {label: 'Fallout 4', value: 17},
    {label: 'Destiny 2', value: 18},
    {label: 'God of War', value: 19},
    {label: 'Team Fortress 2', value: 20},
    {label: 'PAYDAY 2', value: 21},
    {label: 'Horizon Zero Dawn', value: 22},
    {label: 'Grand Theft Auto IV', value: 23},
    {label: 'Rocket League', value: 24},
    {label: 'Dota 2', value: 25},
    {label: 'Metro 2033', value: 26},
    {label: 'Terraria', value: 27},
    {label: 'Warframe', value: 28},
    {label: 'Metal Gear Solid V: The Phantom Pain', value: 29},
    {label: 'Rise of the Tomb Raider' , value: 30},
    {label: 'Cyberpunk 2077' , value: 31},
    {label: 'The Walking Dead: Season 1' , value: 32},
    {label: 'Batman: Arkham Knight' , value: 33},
    {label: 'The Witcher 2: Assassins of Kings Enhanced Edition' , value: 34},
    {label: 'Middle-earth: Shadow of Mordor' , value: 35},
    {label: 'Half-Life 2: Lost Coast' , value: 36},
    {label: 'Grand Theft Auto: San Andreas' , value: 37},
    {label: "The Witcher: Enhanced Edition Director's Cut" , value: 38},
    {label: 'BioShock 2' , value: 39},
    {label: 'Hitman' , value: 40},
    {label: 'Half-Life 2: Episode One' , value: 41},
    {label: 'Half-Life 2: Episode Two' , value: 42},
    {label: "Mirror's Edge" , value: 43},
    {label: 'Hotline Miami' , value: 44},
    {label: 'Dark Souls III' , value: 45},
    {label: 'Deus Ex: Mankind Divided' , value: 46},
    {label: 'Hollow Knight' , value: 47},
    {label: 'Apex Legends' , value: 48},
    {label: 'Outlast' , value: 49},
    {label: 'Spec Ops: The Line' , value: 50},
    {label: 'Little Nightmares' , value: 51},
    {label: "Marvel's Spider-Man" , value: 52},
    {label: 'Far Cry 3' , value: 53},
    {label: 'Amnesia: The Dark Descent' , value: 54},
    {label: 'BioShock Remastered' , value: 55},
    {label: 'Alan Wake' , value: 56},
    {label: 'Saints Row: The Third' , value: 57},
    {label: "Uncharted 4: A Thief's End" , value: 58},
    {label: 'Half-Life 2: Deathmatch' , value: 59},
    {label: 'Wolfenstein: The New Order' , value: 60},
    {label: 'Borderlands' , value: 61},
    {label: 'L.A. Noire' , value: 62},
    {label: 'Half-Life' , value: 63},
    {label: 'Detroit: Become Human' , value: 64},
    {label: 'Super Meat Boy' , value: 65},
    {label: 'Prey' , value: 66},
    {label: 'Injustice: Gods Among Us Ultimate Edition' , value: 67},
    {label: 'Path of Exile' , value: 68},
    {label: 'Dead Space' , value: 69},
    {label: "Sid Meier's Civilization V" , value: 70},
    {label: 'The Last Of Us Remastered' , value: 71},
    {label: 'Mass Effect 2' , value: 72},
    {label: 'For Honor' , value: 73},
    {label: "Garry's Mod" , value: 74},
    {label: "Assassin's Creed IV: Black Flag" , value: 75},
    {label: 'Hitman: Absolution' , value: 76},
    {label: 'Stardew Valley' , value: 77},
    {label: 'Fallout: New Vegas' , value: 78},
    {label: 'Dishonored' , value: 79},
    {label: "PlayerUnknown's Battlegrounds" , value: 80},
    {label: "Hellblade: Senua's Sacrifice" , value: 81},
    {label: 'Grand Theft Auto: Vice City' , value: 82},
    {label: 'Company of Heroes 2' , value: 83},
    {label: 'The Elder Scrolls V: Skyrim Special Edition' , value: 84},
    {label: 'Bloodborne' , value: 85},
    {label: 'Half-Life Deathmatch: Source' , value: 86},
    {label: 'Metal Gear Solid V: Ground Zeroes' , value: 87},
    {label: 'Control' , value: 88},
    {label: 'Borderlands: The Pre-Sequel' , value: 89},
    {label: 'Just Cause 3' , value: 90},
    {label: 'Mortal Kombat X' , value: 91},
    {label: 'Dishonored 2' , value: 92},
    {label: "Don't Starve Together" , value: 93},
    {label: 'Bastion' , value: 94},
    {label: 'Journey' , value: 95},
    {label: 'Counter-Strike: Source' , value: 96},
    {label: 'Just Cause 2' , value: 97},
    {label: 'Mad Max' , value: 98},
    {label: 'Star Wars Jedi: Fallen Order', value: 99},
    {label: 'Metro: Last Light Redux', value: 100},
    {label: 'XCOM: Enemy Unknown', value: 101},
    {label: 'Monster Hunter: World', value: 102},
    {label: 'NieR:Automata', value: 103},
    {label: 'Brutal Legend', value: 104},
    {label: 'Counter-Strike', value: 105},
    {label: 'Metro 2033 Redux', value: 106},
    {label: 'Brothers: A Tale of Two Sons', value: 107},
    {label: 'BioShock 2 Remastered', value: 108},
    {label: 'Left 4 Dead', value: 109},
    {label: 'Heavy Rain', value: 110},
    {label: 'Fall Guys: Ultimate Knockout', value: 111},
    {label: 'Mafia II', value: 112},
    {label: 'Psychonauts', value: 113},
    {label: 'Titanfall 2', value: 114},
    {label: 'Resident Evil 7: Biohazard', value: 115},
    {label: 'Max Payne 3', value: 116},
    {label: 'SEGA Mega Drive and Genesis Classics', value: 117},
    {label: 'Batman: Arkham City - Game of the Year Edition', value: 118},
    {label: 'Cities: Skylines', value: 119},
    {label: 'Watch Dogs', value: 120},
    {label: 'Batman: Arkham Asylum Game of the Year Edition', value: 121},
    {label: 'The Darkness II', value: 122},
    {label: 'Fallout', value: 123},
    {label: 'Darksiders', value: 124},
    {label: 'Transistor', value: 125},
    {label: 'Firewatch', value: 126},
    {label: 'Far Cry 5', value: 127},
    {label: "Assassin's Creed II", value: 128},
    {label: 'Minecraft', value: 129},
    {label: 'Paladins', value: 130},
    {label: 'Shadow of the Tomb Raider', value: 131},
    {label: 'Saints Row IV', value: 132},
    {label: 'INSIDE', value: 133},
    { label: 'INSIDE', value: 133 },
    { label: 'Alien: Isolation', value: 134 },
    { label: 'Middle-earth: Shadow of War', value: 135 },
    { label: "Assassin's Creed Odyssey", value: 136 },
    { label: 'Undertale', value: 137 },
    { label: 'Layers of Fear', value: 138 },
    { label: 'Batman: Arkham Origins', value: 139 },
    { label: 'Hitman 2', value: 140 },
    { label: 'GRID 2', value: 141 },
    { label: 'The Wolf Among Us', value: 142 },
    { label: 'Sekiro: Shadows Die Twice', value: 143 },
    { label: "Assassin's Creed Origins", value: 144 },
    { label: 'The Stanley Parable', value: 145 },
    { label: "Tom Clancy's Rainbow Six Siege", value: 146 },
    { label: 'Titan Quest Anniversary Edition', value: 147 },
    { label: 'ARK: Survival Of The Fittest', value: 148 },
    { label: 'Trine 2: Complete Story', value: 149 },
    { label: 'Battlefield 1', value: 150 },
    { label: 'Cuphead', value: 151 },
    { label: "Assassin's Creed III", value: 152 },
    { label: 'Red Dead Redemption', value: 153 },
    { label: 'Crusader Kings II', value: 154 },
    { label: 'Unturned', value: 155 },
    { label: "Deus Ex: Human Revolution - Director's Cut", value: 156 },
    { label: 'Call of Duty: Modern Warfare 2', value: 157 },
    { label: 'Far Cry 4', value: 158 },
    { label: 'Saints Row 2', value: 159 },
    { label: 'Resident Evil 5', value: 160 },
    { label: 'Metro Exodus', value: 161 },
    { label: 'Insurgency', value: 162 },
    { label: "No Man's Sky", value: 163 },
    { label: 'Viscera Cleanup Detail: Shadow Warrior', value: 164 },
    { label: 'XCOM 2', value: 165 },
    { label: 'War Thunder', value: 166 },
    { label: 'FEZ', value: 167 },
    { label: 'Hades', value: 168 },
    { label: "Uncharted 3: Drake's Deception", value: 169 },
    { label: 'Shadowrun Returns', value: 170 },
    { label: 'Dead Island', value: 171 },
    { label: 'Amnesia: A Machine for Pigs', value: 172 },
    { label: 'ARK: Survival Evolved', value: 173 },
    { label: 'Thief', value: 174 },
    { label: 'SOMA', value: 175 },
    { label: 'Call of Duty: Black Ops III', value: 176 },
    { label: 'Total War: SHOGUN 2', value: 177 },
    { label: 'The Last Of Us', value: 178 },
    { label: 'Ori and the Blind Forest: Definitive Edition', value: 179 },
    { label: 'Grand Theft Auto III', value: 180 },
    { label: 'The Last of Us Part II', value: 181 },
    { label: 'Watch Dogs 2', value: 182 },
    { label: 'Wolfenstein II: The New Colossus', value: 183 },
    { label: 'Brawlhalla', value: 184 },
    { label: 'Magicka', value: 185 },
    { label: 'Darksiders Warmastered Edition', value: 186 },
    { label: 'Killing Floor', value: 187 },
    { label: 'Lara Croft and the Temple of Osiris', value: 188 },
    { label: 'Counter-Strike: Condition Zero', value: 189 },
    { label: 'Dragon Age: Origins', value: 190 },
    { label: 'Call of Duty: Black Ops', value: 191 },
    { label: 'Halo Infinite', value: 192 },
    { label: 'Ori and the Blind Forest', value: 193 },
    { label: 'Rayman Legends', value: 194 },
    { label: 'This War of Mine', value: 195 },
    { label: 'South Park: The Stick of Truth', value: 196 },
    { label: 'DiRT Rally', value: 197 },
    { label: 'DOOM Eternal', value: 198 },
    { label: 'Chivalry: Medieval Warfare', value: 199 },
    { label: 'The Bureau: XCOM Declassified', value: 200 },
    { label: 'Batman: Arkham City', value: 201 },
    { label: 'Papers, Please', value: 202 },
    { label: 'DmC: Devil May Cry', value: 203 },
    { label: 'Kingdom Come: Deliverance', value: 204 },
    { label: 'Star Wars: Knights of the Old Republic', value: 205 },
    { label: 'Quake Champions', value: 206 },
    { label: 'The Binding of Isaac', value: 207 },
    { label: 'Fallout 3', value: 208 },
    { label: 'Castle Crashers', value: 209 },
    { label: 'Dead Space 2', value: 210 },
    { label: "Assassin's Creed Unity", value: 211 },
    { label: 'Resident Evil 4 (2005)', value: 212 },
    { label: "Don't Starve", value: 213 },
    { label: 'Call of Juarez: Gunslinger', value: 214 },
    { label: 'Halo: The Master Chief Collection', value: 215 },
    { label: 'Among Us', value: 216 },
    { label: 'Quantum Break', value: 217 },
    { label: 'Grim Fandango Remastered', value: 218 },
    { label: 'Darkest Dungeon', value: 219 },
    { label: 'Disco Elysium', value: 220 },
    { label: "Sid Meier's Civilization VI", value: 221 },
    { label: 'Mafia III', value: 222 },
    { label: 'Homefront', value: 223 },
    { label: 'Syberia', value: 224 },
    { label: 'Beyond: Two Souls', value: 225 },
    { label: 'What Remains of Edith Finch', value: 226 },
    { label: 'Dead Cells', value: 227 },
    { label: 'Torchlight II', value: 228 },
    { label: 'Subnautica', value: 229 },
    { label: 'Call of Duty: WWII', value: 230 },
    { label: 'Ratchet & Clank (2016)', value: 231 },
    { label: 'Fallout Shelter', value: 232 },
    { label: 'Guacamelee! Super Turbo Championship Edition', value: 233 },
    { label: 'Half-Life: Blue Shift', value: 234 },
    { label: 'Half-Life: Opposing Force', value: 235 },
    { label: 'The Witness', value: 236 },
    { label: 'Battlefield 4', value: 237 },
    { label: 'Goat Simulator', value: 238 },
    { label: 'Sniper Elite V2', value: 239 },
    { label: 'inFAMOUS Second Son', value: 240 },
    { label: 'Divinity: Original Sin 2', value: 241 },
    { label: 'Broforce', value: 242 },
    { label: 'Deus Ex: Human Revolution', value: 243 },
    { label: 'Sleeping Dogs', value: 244 },
    { label: 'A Plague Tale: Innocence', value: 245 },
    { label: 'FTL: Faster Than Light', value: 246 },
    { label: 'Call of Duty: Modern Warfare 3', value: 247 },
    { label: 'Sleeping Dogs: Definitive Edition', value: 248 },
    { label: "Tom Clancy's The Division", value: 249 },
    { label: 'Devil May Cry 5', value: 250 },
    { label: 'The Walking Dead: Season 2', value: 251 },
    { label: 'Dragon Age: Inquisition', value: 252 },
    { label: 'SUPERHOT', value: 253 },
    { label: 'Yakuza 0', value: 254 },
    { label: 'Black Desert Online', value: 255 },
    { label: 'Until Dawn', value: 256 },
    { label: 'Resident Evil 6', value: 257 },
    { label: 'Hotline Miami 2: Wrong Number', value: 258 },
    { label: 'The Outer Worlds', value: 259 },
    { label: 'FINAL FANTASY XV', value: 260 },
    { label: "Alan Wake's American Nightmare", value: 261 },
    { label: 'Dying Light: The Following - Enhanced Edition', value: 262 },
    { label: 'A Story About My Uncle', value: 263 },
    { label: 'Kingdom: Classic', value: 264 },
    { label: 'PAYDAY The Heist', value: 265 },
    { label: 'Bayonetta', value: 266 },
    { label: 'Batman: Arkham Asylum', value: 267 },
    { label: 'Overcooked', value: 268 },
    { label: 'To the Moon', value: 269 },
    { label: 'Call of Duty: Black Ops II', value: 270 },
    { label: 'Forza Horizon 4', value: 271 },
    { label: 'Warhammer 40,000: Space Marine', value: 272 },
    { label: 'Resident Evil 2 (1998)', value: 273 },
    { label: 'The Legend of Zelda: Breath of the Wild', value: 274 },
    { label: 'Dark Souls: Prepare To Die Edition', value: 275 },
    { label: 'Days Gone', value: 276 },
    { label: 'Syberia 2', value: 277 },
    { label: 'Age of Wonders III', value: 278 },
    { label: 'Star Wars: Battlefront II (2017)', value: 279 },
    { label: 'Company of Heroes', value: 280 },
    { label: "Assassin's Creed Syndicate", value: 281 },
    { label: 'Surviving Mars', value: 282 },
    { label: "Oddworld: Abe's Oddysee", value: 283 },
    { label: 'POSTAL 2', value: 284 },
    { label: 'Borderlands Game of the Year Enhanced', value: 285 },
    { label: 'Dark Souls II: Scholar of the First Sin', value: 286 },
    { label: 'Ori and the Will of the Wisps', value: 287 },
    { label: 'Metal Gear Rising: Revengeance', value: 288 },
    { label: 'Deus Ex: Game of the Year Edition', value: 289 },
    { label: 'Hitman: Blood Money', value: 290 },
    { label: 'SMITE', value: 291 },
    { label: 'Race Driver: Grid', value: 292 },
    { label: 'Euro Truck Simulator 2', value: 293 },
    { label: 'Darksiders II', value: 294 },
    { label: 'Tropico 4', value: 295 },
    { label: 'A Way Out', value: 296 },
    { label: 'Braid', value: 297 },
    { label: 'Guns of Icarus Online', value: 298 },
    { label: 'Team Fortress Classic', value: 299 },
    { label: 'The Playroom', value: 300 },
    { label: 'Lords of the Fallen', value: 301 },
    { label: 'LEGO The Lord of the Rings', value: 302 },
    { label: "Sid Meier's Civilization III Complete", value: 303 },
    { label: 'Game of Thrones - A Telltale Games Series', value: 304 },
    { label: 'Jotun: Valhalla Edition', value: 305 },
    { label: 'Titan Souls', value: 306 },
    { label: 'Destiny', value: 307 },
    { label: 'Wolfenstein: The Old Blood', value: 308 },
    { label: 'Elden Ring', value: 309 },
    { label: 'Ghost of Tsushima', value: 310 },
    { label: 'Mark of the Ninja', value: 311 },
    { label: 'Murdered: Soul Suspect', value: 312 },
    { label: 'Red Orchestra 2: Heroes of Stalingrad with Rising Storm', value: 313 },
    { label: 'Divinity: Original Sin - Enhanced Edition', value: 314 },
    { label: 'Sanctum 2', value: 315 },
    { label: 'Rust', value: 316 },
    { label: 'Darksiders II Deathinitive Edition', value: 317 },
    { label: 'Ryse: Son of Rome', value: 318 },
    { label: 'The Long Dark', value: 319 },
    { label: 'Borderlands 3', value: 320 },
    { label: 'Star Wars: Knights of the Old Republic II - The Sith Lords', value: 321 },
    { label: 'S.T.A.L.K.E.R.: Shadow of Chernobyl', value: 322 },
    { label: 'Half-Life: Source', value: 323 },
    { label: 'Human: Fall Flat', value: 324 },
    { label: 'Child of Light', value: 325 },
    { label: 'Dear Esther: Landmark Edition', value: 326 },
    { label: 'Celeste', value: 327 },
    { label: 'Black Mesa', value: 328 },
    { label: 'The Binding of Isaac: Rebirth', value: 329 },
    { label: 'Trine Enchanted Edition', value: 330 },
    { label: 'Hacknet', value: 331 },
    { label: 'Max Payne', value: 332 },
    { label: 'The Evil Within', value: 333 },
    { label: 'Jet Set Radio', value: 334 },
    { label: 'Serious Sam Fusion 2017 (beta)', value: 335 },
    { label: 'Mafia: The City of Lost Heaven', value: 336 },
    { label: 'Far Cry 3: Blood Dragon', value: 337 },
    { label: 'Prison Architect', value: 338 },
    { label: 'Dead by Daylight', value: 339 },
    { label: 'Frostpunk', value: 340 },
    { label: "Assassin's Creed", value: 341 },
    { label: 'Resident Evil', value: 342 },
    { label: 'Serious Sam 3: BFE', value: 343 },
    { label: 'Resident Evil 2', value: 344 },
    { label: 'Broken Age', value: 345 },
    { label: 'Final Fantasy VII', value: 346 },
    { label: 'Remember Me', value: 347 },
    { label: 'Endless Space - Collection', value: 348 },
    { label: 'Tales from the Borderlands', value: 349 },
    { label: 'Doki Doki Literature Club!', value: 350 },
    { label: 'Sea of Thieves', value: 351 },
    { label: 'Dark Souls: Remastered', value: 352 },
    { label: 'Neverwinter', value: 353 },
    { label: 'STAR WARS Battlefront', value: 354 },
    { label: 'Fallout 2', value: 355 },
    { label: 'ABZU', value: 356 },
    { label: 'BattleBlock Theater', value: 357 },
    { label: 'F.E.A.R.', value: 358 },
    { label: 'Killing Floor 2', value: 359 },
    { label: 'Resident Evil Revelations 2 / Biohazard Revelations 2', value: 360 },
    { label: 'Oxenfree', value: 361 },
    { label: 'Orwell: Keeping an Eye On You', value: 362 },
    { label: 'The Sims 4', value: 363 },
    { label: 'Beholder', value: 364 },
    { label: 'Minion Masters', value: 365 },
    { label: 'Mortal Kombat 11', value: 366 },
    { label: 'LEGO The Hobbit', value: 367 },
    { label: 'The Elder Scrolls Online: Tamriel Unlimited', value: 368 },
    { label: 'Starbound', value: 369 },
    { label: 'Enter the Gungeon', value: 370 },
    { label: 'Far Cry 2', value: 371 },
    { label: "Monaco: What's Yours Is Mine", value: 372 },
    { label: "Assassin's Creed Brotherhood", value: 373 },
    { label: 'Sonic Mania', value: 374 },
    { label: 'The Forest', value: 375 },
    { label: 'Dust: An Elysian Tail', value: 376 },
    { label: 'The Flame in the Flood', value: 377 },
    { label: 'Fallout 3: Game of the Year Edition', value: 378 },
    { label: 'Battlefield 3', value: 379 },
    { label: 'Killer is Dead - Nightmare Edition', value: 380 },
    { label: 'Lara Croft and the Guardian of Light', value: 381 },
    { label: 'Rogue Legacy', value: 382 },
    { label: 'Fortnite Battle Royale', value: 383 },
    { label: 'Persona 5', value: 384 },
    { label: 'Valiant Hearts: The Great War', value: 385 },
    { label: 'Shadow of the Colossus (2011)', value: 386 },
    { label: 'DiRT Showdown', value: 387 },
    { label: 'F.E.A.R. 3', value: 388 },
    { label: 'Burnout Paradise: The Ultimate Box', value: 389 },
    { label: 'Spelunky', value: 390 },
    { label: 'Counter-Strike: Condition Zero Deleted Scenes', value: 391 },
    { label: 'Dying Light', value: 392 },
    { label: 'Crysis 2 - Maximum Edition', value: 393 },
    { label: 'F.E.A.R. 2: Project Origin', value: 394 },
    { label: 'The Swapper', value: 395 },
    { label: 'Overlord', value: 396 },
    { label: 'Wallpaper Engine', value: 397 },
    { label: 'Deponia', value: 398 },


];

var inputOne = document.getElementById("input-one");
var inputTwo = document.getElementById("input-two");
var inputThree = document.getElementById("input-three");
var inputFour = document.getElementById("input-four");
var inputFive = document.getElementById("input-five");

let listArr = []

autocomplete({
    input: inputOne,
    fetch: function (text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = games.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function (item) {
        input.value = item.label;
        const resultOne = item.value;
        listArr.push(resultOne)
    }
});

autocomplete({
    input: inputTwo,
    fetch: function (text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = games.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function (item) {
        input.value = item.label;
        const resultTwo = item.value;
        listArr.push(resultTwo)

    }
});

autocomplete({
    input: inputThree,
    fetch: function (text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = games.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function (item) {
        input.value = item.label;
        const resultThree = item.value;
        listArr.push(resultThree)

    }
});

autocomplete({
    input: inputFour,
    fetch: function (text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = games.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function (item) {
        input.value = item.label;
        const resultFour = item.value;
        listArr.push(resultFour)

    }
});

autocomplete({
    input: inputFive,
    fetch: function (text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = games.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function (item) {
        input.value = item.label;
        const resultFive = item.value;
        listArr.push(resultFive)
        console.log(listArr)
    }
});

