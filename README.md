Project
================
This is example of using my ng data provider for Couchbase mobile.

Installation
================
1. cordova plugin add https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin.git
2. ionic platform add ios

Develop
================
If you want to develop your app in browser, you'll need local instance of Couchbase mobile (it's Couchdb).
I prepared virtual machine with the database. But you have to have Vagrant and Virtualbox. So install those things and run:

1. cd vagrant
2. vagrant up
3. run index.html - (if you're using Jetbrains product, click right and click open in browser)
4. develop util the end of your project 

Database admin panel
================
If you didn't modify a vagrant config file, you can access database on http://127.0.0.1:8081/ and you've got Couchdb Futon admin panel available on http://127.0.0.1:5985/_utils/ . But this is only for developing purposes in browser. If you're emulating your app using ios emulator, you won't be able to run Futon. There is one important thing. Database communicates through REST API. This is why it's easy to mock the database connection in dev mode. 
I had had a problem with CORS and Couchdb, so I decided to write simple database adapter in Phalcon PHP. It's available here https://github.com/hxtpoe/couchdb-rest-adapter
