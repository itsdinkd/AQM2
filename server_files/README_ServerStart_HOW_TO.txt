/////////////////////////////////////////////////////////////////////////////////////////
// Another Quality Modpack 2 -- Server Instructions                                    //
// Discord: aqm2.cc                                                                    //
// Shameless donate plug: https://www.paypal.com/donate?hosted_button_id=7R6UYF6EYT9KN //
/////////////////////////////////////////////////////////////////////////////////////////

NOTE: Back up your /world, always before updating.

Remember when updating; always delete the following folders from your actual server; /KubeJS, /mods, /configs
!You will then take the folders from this server pack and move to your server, this way you get rid of anything the update removed. 


Server Recommendations----------
Recommended Difficulty: HARD   -
Recommended Minimum Ram: 4gb   -
Recommended Maximum Ram: 6-8gb -
--------------------------------


Common Issues ----------------------------

Cannot start server locally (only if you want to host server on your computer) - if the start script doesn't download server.jar for you, download it and put it in the same folder as start scripts https://launcher.mojang.com/v1/objects/c8f83c5655308435b3dcf03c06d9fe8740a77469/server.jar
-------------------------------------------


Sections ------------------------------------------------------------
	i. Setting Up Server Locally                                    -
	ii. Setting Up Server for Server Host/Dedicated                 -
	iii. Setting up Ram                                             -
    iv. Java Args and which to use (For high ram or low ram)        -
    v. Discord: aqm2.cc                                             -
---------------------------------------------------------------------

Discord (AQM2 Support) ------------------------
https://discord.gg/TmqVme7Pb5                 -
-----------------------------------------------




/////////////////////////////////////////////
// i. How To Setup Server and Run locally //
/////////////////////////////////////////////

1. If you don't have it, INSTALL Java 17 (Need to install, not unzip)
WINDOWS: https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.1%2B12/OpenJDK17U-jdk_x64_windows_hotspot_17.0.1_12.msi
LINUX/MAC: https://adoptium.net/releases.html (Make sure 17 is toggled, and download and install it for your linux distro or mac that you use )

2a. Run startserver.bat (for windows)

2b. Run startserver.sh (for linux/mac)

3. Everything will download and initialize by itself. the EULA agreement will appear, you must type TRUE to continue once it does

4. Success. Server started. You will run Step 2 any time you want to launch your server


FOR MODPACK UPDATES: Make sure you continue deleting the mods folder, and kubejs folder before launching start to receive the latest updates. 



///////////////////////////////////////////////////////////////////
// ii. How to Setup and Launch Server from dedicated/vps server //
///////////////////////////////////////////////////////////////////

1. Follow steps 1-3 above

2. Move everything that was downloaded into your server like how you normally would

3. Thar jar file to launch your server is fabric-server-launch.jar, set your server to use this to launch it.

4. Success.


For future updates; Make sure you continue deleting the mods folder, and kubejs folder before migrating everything serverstart downloaded into your server root folder.




Need help? Visit our discord https://discord.gg/k88uKwNe6h


///////////////////////////////////////////////////////////////////
// iii. Allocating Ram to your Server                            //
///////////////////////////////////////////////////////////////////

1. Open server-starter-config.yaml

2. Scroll to the bottom until you see maxRam and minRam

3. change the # to how many gigabytes you want to allocate to your server. 

4. If you want 8 gb of ram it should look like this

			maxRam: 8G

			minRam: 8G

5. Save, Launch. 



///////////////////////////////////////////////////////////////////
// Java Args and which to use (For high ram and low ram)         //
///////////////////////////////////////////////////////////////////


By default in server start the java args are set up for you to use Akir's flags. This is a widely supported java arg setup for minecraft, which came out for Minecraft v1.12.2, which used Java 7.

Time has moved on, and now minecraft uses Java 17. Most of the flags in Akirs are no longer used in recent versions of java, meaning, these args are good but not as good as it was. 

You can still use these arguments but it should only be used up to a certain amount of ram as this garbage collector, G1C1 is not made for high ram usage. it has a low heap, and when you give high ram, you are increasing the heap size, making the collector not able to perform as much causing performance issues.

DO NOT use more than 8gb of ram with AKIR's flags, or GC1C garbage collector. Do not use less than 4gb as well as this modpack is not made for anything lower than 4.

If you have 4-8gb of ram to use, then do nothing else. 


If you have 14GB+ of ram, then you want to use the newest garbage collector, Shenandoah. 
Do note that you are unable to use anything less than 14gb, 13gb at the least. You will severely impact your server and performance will be terrible. 

When you use Shenendoah's garbage collector, you will have a 20% increase in performance than using gc1c, and you will also be able to support more players joining than normal. (If you have a good cpu of course)

---

i. For Server Hosts, here is the start up arguments to use. -Xms14000M -XX:+UnlockExperimentalVMOptions -XX:+UseShenandoahGC -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+UseStringDeduplication -XX:-OmitStackTraceInFastThrow -XX:+OptimizeStringConcat
   
   a. make sure to change -Xms14000M to the amount of ram you want to use. for 16gb, you would write -Xms16000M or -Xms16GB



ii. For Local hosting (ie; server start), the JavaArgs are already in the server-start-config file, but commented out. Please check config for steps on how to use. 