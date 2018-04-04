// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"false","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.24 Needed for the majority of Yanfly Engine Scripts. Also\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.18 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"true","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_IconBalloons","status":true,"description":"v1.00 Allows you to use icons for your on-map balloons\nover your characters and events!","parameters":{"Empty Filename":"EmptyBalloon"}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.01 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}},
{"name":"YEP_RegionEvents","status":false,"description":"v1.03 Make it so that whenever players step on certain\nRegion ID's, the game will play certain common events.","parameters":{"Region 1":"0","Region 2":"0","Region 3":"0","Region 4":"0","Region 5":"0","Region 6":"0","Region 7":"0","Region 8":"0","Region 9":"0","Region 10":"0","Region 11":"0","Region 12":"0","Region 13":"0","Region 14":"0","Region 15":"0","Region 16":"0","Region 17":"0","Region 18":"0","Region 19":"0","Region 20":"0","Region 21":"0","Region 22":"0","Region 23":"0","Region 24":"0","Region 25":"0","Region 26":"0","Region 27":"0","Region 28":"0","Region 29":"0","Region 30":"0","Region 31":"0","Region 32":"0","Region 33":"0","Region 34":"0","Region 35":"0","Region 36":"0","Region 37":"0","Region 38":"0","Region 39":"0","Region 40":"0","Region 41":"0","Region 42":"0","Region 43":"0","Region 44":"0","Region 45":"0","Region 46":"0","Region 47":"0","Region 48":"0","Region 49":"0","Region 50":"0","Region 51":"0","Region 52":"0","Region 53":"0","Region 54":"0","Region 55":"0","Region 56":"0","Region 57":"0","Region 58":"0","Region 59":"0","Region 60":"0","Region 61":"0","Region 62":"0","Region 63":"0","Region 64":"0","Region 65":"0","Region 66":"0","Region 67":"0","Region 68":"0","Region 69":"0","Region 70":"0","Region 71":"0","Region 72":"0","Region 73":"0","Region 74":"0","Region 75":"0","Region 76":"0","Region 77":"0","Region 78":"0","Region 79":"0","Region 80":"0","Region 81":"0","Region 82":"0","Region 83":"0","Region 84":"0","Region 85":"0","Region 86":"0","Region 87":"0","Region 88":"0","Region 89":"0","Region 90":"0","Region 91":"0","Region 92":"0","Region 93":"0","Region 94":"0","Region 95":"0","Region 96":"0","Region 97":"0","Region 98":"0","Region 99":"0","Region 100":"0","Region 101":"0","Region 102":"0","Region 103":"0","Region 104":"0","Region 105":"0","Region 106":"0","Region 107":"0","Region 108":"0","Region 109":"0","Region 110":"0","Region 111":"0","Region 112":"0","Region 113":"0","Region 114":"0","Region 115":"0","Region 116":"0","Region 117":"0","Region 118":"0","Region 119":"0","Region 120":"0","Region 121":"0","Region 122":"0","Region 123":"0","Region 124":"0","Region 125":"0","Region 126":"0","Region 127":"0","Region 128":"0","Region 129":"0","Region 130":"0","Region 131":"0","Region 132":"0","Region 133":"0","Region 134":"0","Region 135":"0","Region 136":"0","Region 137":"0","Region 138":"0","Region 139":"0","Region 140":"0","Region 141":"0","Region 142":"0","Region 143":"0","Region 144":"0","Region 145":"0","Region 146":"0","Region 147":"0","Region 148":"0","Region 149":"0","Region 150":"0","Region 151":"0","Region 152":"0","Region 153":"0","Region 154":"0","Region 155":"0","Region 156":"0","Region 157":"0","Region 158":"0","Region 159":"0","Region 160":"0","Region 161":"0","Region 162":"0","Region 163":"0","Region 164":"0","Region 165":"0","Region 166":"0","Region 167":"0","Region 168":"0","Region 169":"0","Region 170":"0","Region 171":"0","Region 172":"0","Region 173":"0","Region 174":"0","Region 175":"0","Region 176":"0","Region 177":"0","Region 178":"0","Region 179":"0","Region 180":"0","Region 181":"0","Region 182":"0","Region 183":"0","Region 184":"0","Region 185":"0","Region 186":"0","Region 187":"0","Region 188":"0","Region 189":"0","Region 190":"0","Region 191":"0","Region 192":"0","Region 193":"0","Region 194":"0","Region 195":"0","Region 196":"0","Region 197":"0","Region 198":"0","Region 199":"0","Region 200":"0","Region 201":"0","Region 202":"0","Region 203":"0","Region 204":"0","Region 205":"0","Region 206":"0","Region 207":"0","Region 208":"0","Region 209":"0","Region 210":"0","Region 211":"0","Region 212":"0","Region 213":"0","Region 214":"0","Region 215":"0","Region 216":"0","Region 217":"0","Region 218":"0","Region 219":"0","Region 220":"0","Region 221":"0","Region 222":"0","Region 223":"0","Region 224":"0","Region 225":"0","Region 226":"0","Region 227":"0","Region 228":"0","Region 229":"0","Region 230":"0","Region 231":"0","Region 232":"0","Region 233":"0","Region 234":"0","Region 235":"0","Region 236":"0","Region 237":"0","Region 238":"0","Region 239":"0","Region 240":"0","Region 241":"0","Region 242":"0","Region 243":"0","Region 244":"0","Region 245":"0","Region 246":"0","Region 247":"0","Region 248":"0","Region 249":"0","Region 250":"0","Region 251":"0","Region 252":"0","Region 253":"0","Region 254":"0","Region 255":"0"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.03 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"1","Event Restrict":"2","All Restrict":"3","Player Allow":"4","Event Allow":"5","All Allow":"6"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.44 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.06 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"true","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"true","Show Max":"true"}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.08 A simple battle status window that shows the\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"16","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"7","Param Current Max":"false","Adjust Columns":"false","State Icons Row":"1","---Actor Switching---":"","Left / Right":"true","PageUp / PageDown":"true","Allow Turn Skip":"true","---Front View---":"","Show Animations":"true","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"-16"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.06 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Battle Results","Battle Drops Text":"Battle Spoils","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Show Skills Learned":"false","Gained EXP Text":"Gained EXP","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_X_AftermathLevelUp","status":true,"description":"v1.00 (Requires YEP_VictoryAftermath.js) Adds a level up\nportion to the Victory Aftermath sequences.","parameters":{"---General---":"","Level Up Title":"%1 has reached Level %2!","Enable Aftermath":"true","Font Size":"28","---Skill Learn---":"","Skill Text Singular":"Acquired Skill","Skill Text Plural":"Acquired Skills","Skill List Width":"200"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.17 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.02","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---Motions---":"","Attack Motion":"thrust","Weapon Image Index":"0","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"GameusQuestSystem","status":false,"description":"v1.0 - A simplistic quest system with various customization options.","parameters":{"Auto Rewards":"true","---------------":"","Words":"","Hidden Reward Text":"??????","No Quests Text":"No Quests","All Word":"All","Completed Word":"Completed","Failed Word":"Failed","In-Progress Word":"In-Progress","Steps Word":"Steps","Rewards Word":"Rewards","Display Options":"","Reverse Layout":"false","Filter Position":"Top","Use Categories":"true","Show Empty Categories":"0","Show Quest Count":"true","Bullet Character":"-","Max Steps":"3","Image Options":"","Use Icons":"true","Completed Image":"","Completed Image Opacity":"128","Failed Image":"","Failed Image Opacity":"128"}},
{"name":"GALV_MessageBusts","status":false,"description":"(v.2.6) Displays a bust image instead of selected face image","parameters":{"Bust Priority":"0","Bust Position":"0","Text X Offset":"390","Filename Append":""}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Ban List":"Window_BattleLog, Window_MapName"}},
{"name":"SRD_CharacterCreator","status":false,"description":"Allows players to create their own custom characters.","parameters":{"Wait for Loading":"true","Layers":"Tail Part2, Wing Part2, Body, Eyes, Eyebrows, Nose, Mouth, Rear Hair Part1, Front Hair Part2, Rear Hair Part2, Clothing, Accessory A, Front Hair Part1, Beast Ears, Glasses, Accessory B, Tail Part1, Wing Part1","Order":"Body, Eyes, Eyebrows, Nose, Mouth, Clothing, Front Hair, Rear Hair, Accessory A, Accessory B, Glasses, Beast Ears, Wing, Tail","Mandatory":"Body, Eyes, Eyebrows, Nose, Mouth","Mandatory Color":"#FFFF00","Print to Console":"false","== Color Picker ==":"","Number of Colors":"13","Color Chooser Text":"Color: %1","Color Change SE":"Cursor1","Color Confirm SE":"Save","== Visual Options ==":"","Active Color Load":"true","Use Fade Transition":"true","Use Background":"true","Small Piece Cols":"3","Big Piece Cols":"1","== Dialogues ==":"","Leave Dialogue":"Are you sure you want\\n to save this character?","Mandatory Dialogue":"You need to have all the mandatory sections \\nfilled out before exiting.","== Size Options ==":"","Character Width":"48","Character Height":"48","SV Char Width":"64","SV Char Height":"64","Face Width":"144","Face Height":"144","== Defaults ==":"","Default Source":"Char","Default Dir":"0","Default Color":"true","Default Condition":"true","== Section 1 ==":"","Section 1 Name":"Body","Section 1 Label Name":"","Section 1 Source":"Face","Section 1 Dir":"","Section 1 Color":"false","Section 1 Condition":"true","== Section 2 ==":"","Section 2 Name":"Clothing","Section 2 Label Name":"","Section 2 Source":"Char","Section 2 Dir":"","Section 2 Color":"false","Section 2 Condition":"true","== Section 3 ==":"","Section 3 Name":"Rear Hair","Section 3 Label Name":"","Section 3 Source":"Char","Section 3 Dir":"3","Section 3 Color":"true","Section 3 Condition":"true","== Section 4 ==":"","Section 4 Name":"Tail","Section 4 Label Name":"","Section 4 Source":"Char","Section 4 Dir":"3","Section 4 Color":"true","Section 4 Condition":"true","== Section 5 ==":"","Section 5 Name":"Wing","Section 5 Label Name":"","Section 5 Source":"Char","Section 5 Dir":"3","Section 5 Color":"true","Section 5 Condition":"true","== Section 6 ==":"","Section 6 Name":"Eyebrows","Section 6 Label Name":"","Section 6 Source":"Face","Section 6 Dir":"","Section 6 Color":"true","Section 6 Condition":"true","== Section 7 ==":"","Section 7 Name":"Nose","Section 7 Label Name":"","Section 7 Source":"Face","Section 7 Dir":"","Section 7 Color":"false","Section 7 Condition":"true","== Section 8 ==":"","Section 8 Name":"Mouth","Section 8 Label Name":"","Section 8 Source":"Face","Section 8 Dir":"","Section 8 Color":"false","Section 8 Condition":"true","== Section 9 ==":"","Section 9 Name":"Eyes","Section 9 Label Name":"","Section 9 Source":"Face","Section 9 Dir":"","Section 9 Color":"true","Section 9 Condition":"true","== Section 10 ==":"","Section 10 Name":"","Section 10 Label Name":"","Section 10 Source":"","Section 10 Dir":"","Section 10 Color":"","Section 10 Condition":"true","== Section 11 ==":"","Section 11 Name":"","Section 11 Label Name":"","Section 11 Source":"","Section 11 Dir":"","Section 11 Color":"","Section 11 Condition":"true","== Section 12 ==":"","Section 12 Name":"","Section 12 Label Name":"","Section 12 Source":"","Section 12 Dir":"","Section 12 Color":"","Section 12 Condition":"true","== Section 13 ==":"","Section 13 Name":"","Section 13 Label Name":"","Section 13 Source":"","Section 13 Dir":"","Section 13 Color":"","Section 13 Condition":"true","== Section 14 ==":"","Section 14 Name":"","Section 14 Label Name":"","Section 14 Source":"","Section 14 Dir":"","Section 14 Color":"","Section 14 Condition":"true","== Section 15 ==":"","Section 15 Name":"","Section 15 Label Name":"","Section 15 Source":"","Section 15 Dir":"","Section 15 Color":"","Section 15 Condition":"true","== Section 16 ==":"","Section 16 Name":"","Section 16 Label Name":"","Section 16 Source":"","Section 16 Dir":"","Section 16 Color":"","Section 16 Condition":"true","== Section 17 ==":"","Section 17 Name":"","Section 17 Label Name":"","Section 17 Source":"","Section 17 Dir":"","Section 17 Color":"","Section 17 Condition":"true","== Section 18 ==":"","Section 18 Name":"","Section 18 Label Name":"","Section 18 Source":"","Section 18 Dir":"","Section 18 Color":"","Section 18 Condition":"true","== Section 19 ==":"","Section 19 Name":"","Section 19 Label Name":"","Section 19 Source":"","Section 19 Dir":"","Section 19 Color":"","Section 19 Condition":"true","== Section 20 ==":"","Section 20 Name":"","Section 20 Label Name":"","Section 20 Source":"","Section 20 Dir":"","Section 20 Color":"","Section 20 Condition":"true","== Section 21 ==":"","Section 21 Name":"","Section 21 Label Name":"","Section 21 Source":"","Section 21 Dir":"","Section 21 Color":"","Section 21 Condition":"true","== Section 22 ==":"","Section 22 Name":"","Section 22 Label Name":"","Section 22 Source":"","Section 22 Dir":"","Section 22 Color":"","Section 22 Condition":"true","== Section 23 ==":"","Section 23 Name":"","Section 23 Label Name":"","Section 23 Source":"","Section 23 Dir":"","Section 23 Color":"","Section 23 Condition":"true","== Section 24 ==":"","Section 24 Name":"","Section 24 Label Name":"","Section 24 Source":"","Section 24 Dir":"","Section 24 Color":"","Section 24 Condition":"true","== Section 25 ==":"","Section 25 Name":"","Section 25 Label Name":"","Section 25 Source":"","Section 25 Dir":"","Section 25 Color":"","Section 25 Condition":"true","== Section 26 ==":"","Section 26 Name":"","Section 26 Label Name":"","Section 26 Source":"","Section 26 Dir":"","Section 26 Color":"","Section 26 Condition":"true","== Section 27 ==":"","Section 27 Name":"","Section 27 Label Name":"","Section 27 Source":"","Section 27 Dir":"","Section 27 Color":"","Section 27 Condition":"true","== Section 28 ==":"","Section 28 Name":"","Section 28 Label Name":"","Section 28 Source":"","Section 28 Dir":"","Section 28 Color":"","Section 28 Condition":"true","== Section 29 ==":"","Section 29 Name":"","Section 29 Label Name":"","Section 29 Source":"","Section 29 Dir":"","Section 29 Color":"","Section 29 Condition":"true","== Section 30 ==":"","Section 30 Name":"","Section 30 Label Name":"","Section 30 Source":"","Section 30 Dir":"","Section 30 Color":"","Section 30 Condition":"true","== Section 31 ==":"","Section 31 Name":"","Section 31 Label Name":"","Section 31 Source":"","Section 31 Dir":"","Section 31 Color":"","Section 31 Condition":"true","== Section 32 ==":"","Section 32 Name":"","Section 32 Label Name":"","Section 32 Source":"","Section 32 Dir":"","Section 32 Color":"","Section 32 Condition":"true","== Section 33 ==":"","Section 33 Name":"","Section 33 Label Name":"","Section 33 Source":"","Section 33 Dir":"","Section 33 Color":"","Section 33 Condition":"true","== Section 34 ==":"","Section 34 Name":"","Section 34 Label Name":"","Section 34 Source":"","Section 34 Dir":"","Section 34 Color":"","Section 34 Condition":"true","== Section 35 ==":"","Section 35 Name":"","Section 35 Label Name":"","Section 35 Source":"","Section 35 Dir":"","Section 35 Color":"","Section 35 Condition":"true","== Section 36 ==":"","Section 36 Name":"","Section 36 Label Name":"","Section 36 Source":"","Section 36 Dir":"","Section 36 Color":"","Section 36 Condition":"true","== Section 37 ==":"","Section 37 Name":"","Section 37 Label Name":"","Section 37 Source":"","Section 37 Dir":"","Section 37 Color":"","Section 37 Condition":"true","== Section 38 ==":"","Section 38 Name":"","Section 38 Label Name":"","Section 38 Source":"","Section 38 Dir":"","Section 38 Color":"","Section 38 Condition":"true","== Section 39 ==":"","Section 39 Name":"","Section 39 Label Name":"","Section 39 Source":"","Section 39 Dir":"","Section 39 Color":"","Section 39 Condition":"true","== Section 40 ==":"","Section 40 Name":"","Section 40 Label Name":"","Section 40 Source":"","Section 40 Dir":"","Section 40 Color":"","Section 40 Condition":"true","== Section 41 ==":"","Section 41 Name":"","Section 41 Label Name":"","Section 41 Source":"","Section 41 Dir":"","Section 41 Color":"","Section 41 Condition":"true","== Section 42 ==":"","Section 42 Name":"","Section 42 Label Name":"","Section 42 Source":"","Section 42 Dir":"","Section 42 Color":"","Section 42 Condition":"true","== Section 43 ==":"","Section 43 Name":"","Section 43 Label Name":"","Section 43 Source":"","Section 43 Dir":"","Section 43 Color":"","Section 43 Condition":"true","== Section 44 ==":"","Section 44 Name":"","Section 44 Label Name":"","Section 44 Source":"","Section 44 Dir":"","Section 44 Color":"","Section 44 Condition":"true","== Section 45 ==":"","Section 45 Name":"","Section 45 Label Name":"","Section 45 Source":"","Section 45 Dir":"","Section 45 Color":"","Section 45 Condition":"true","== Section 46 ==":"","Section 46 Name":"","Section 46 Label Name":"","Section 46 Source":"","Section 46 Dir":"","Section 46 Color":"","Section 46 Condition":"true","== Section 47 ==":"","Section 47 Name":"","Section 47 Label Name":"","Section 47 Source":"","Section 47 Dir":"","Section 47 Color":"","Section 47 Condition":"true","== Section 48 ==":"","Section 48 Name":"","Section 48 Label Name":"","Section 48 Source":"","Section 48 Dir":"","Section 48 Color":"","Section 48 Condition":"true","== Section 49 ==":"","Section 49 Name":"","Section 49 Label Name":"","Section 49 Source":"","Section 49 Dir":"","Section 49 Color":"","Section 49 Condition":"true","== Section 50 ==":"","Section 50 Name":"","Section 50 Label Name":"","Section 50 Source":"","Section 50 Dir":"","Section 50 Color":"","Section 50 Condition":"true"}},
{"name":"SRD_CharacterCreatorEX","status":true,"description":"Allows players to create their own custom characters.","parameters":{"Layers":"Tail Part2, Wing Part2, Body, Eyes, Eyebrows, Nose, Mouth, Rear Hair Part1, Front Hair Part2, Rear Hair Part2, Clothing, Accessory A, Glasses, Front Hair Part1, Beast Ears, Accessory B, Tail Part1, Wing Part1","Order":"Body, Eyes, Eyebrows, Nose, Mouth, Clothing, Front Hair, Rear Hair, Accessory A, Accessory B, Glasses, Beast Ears, Wing, Tail","Mandatory":"Body, Eyes, Eyebrows, Nose, Mouth, Clothing","Mandatory Color":"#FFFF44","Print to Console":"false","== Visual Options ==":"","Use Fade Transition":"true","Use Piece Background":"true","Use Scene Background":"true","Background X Scroll":"1","Background Y Scroll":"0","Small Piece Cols":"3","Big Piece Cols":"1","== Dialogues ==":"","Leave Dialogue":"Are you sure you want\\n to save this character?","Mandatory Dialogue":"You need to have all the mandatory sections \\nfilled out before exiting.","== Size Options ==":"","Character Width":"48","Character Height":"48","SV Char Width":"64","SV Char Height":"64","Face Width":"144","Face Height":"144"}},
{"name":"Online_Chat","status":true,"description":"Online Chat for Neldersons Online Core\n<Online_Chat>","parameters":{"Chat Key Code":"112","Input Character limit":"80","Room Name by Map":"false","Chat Username Color":"#c92cac","Chat Text Color":"#000000","===Chat Text Window===":"","Chat Text Window Width":"800","Chat Text Window Height":"500","Chat Text Window Offset X":"0","Chat Text Window Offset Y":"0","Chat Text Font":"","Chat Text Font Size":"15","Chat Text Background Color":"rgba(255,255,255,0.7)","Chat Text Background Picture":"","===Chat Input Window===":"","Chat Input Window Width":"600","Chat Input Window Height":"40","Chat Input Window Offset X":"0","Chat Input Window Offset Y":"564","Input Text Font":"","Input Text Font Size":"15","Input Text Background Color":"rgba(255,255,255,0.7)","Input Text Background Picture":""}},
{"name":"Online_CloudSave","status":false,"description":"","parameters":{}},
{"name":"Online_GlobalVars","status":false,"description":"Send switch and variable data to others.\r\n<Online_GlobalVars>","parameters":{"Global Switch Threshold":"100","Global Variable Threshold":"100"}},
{"name":"Online_Login_Core","status":true,"description":"Login window for Neldersons Online Core\r\n<Online_Login_Core>","parameters":{"Force Login on Startup":"true","socket.io connection":"true","Switch on First Shutdown":"1","Switch on Second Shutdown":"2"}},
{"name":"Online_Main_Core","status":true,"description":"Connect to a server with Socket.io!\r\n<Online_Main_Core>","parameters":{"Server URL":"http://localhost:8000","First Hash":"aeha8j4h20adn92k10nkav0sjf90sleicazvyi54j39jfqasfjk9"}},
{"name":"Online_Metrics","status":true,"description":"Very simple netwokred metrics for your game.\n<Online_Metrics>\n\nRequires Oniline Main Core and Server side setup to use.","parameters":{"Anonymous":"true"}},
{"name":"Online_Network_Players","status":true,"description":"Network Players for Neldersons Online Core\n<Online_Network_Players>","parameters":{"Net Player Map ID":"1","Net Player Event ID":"1"}}
];
