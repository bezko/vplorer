# vplorer
a Vue file explorer


## Instructions

npm i 

npm run build

nodejs src/main.js *DIR1* *DIR2* *...*

Open browser to **http://localhost:5888/**

## Implementation

Using ExpressJS as a backend framework with EJS template (overkill)

Using VueJS on the front end with a recursive component.

Used WebSockets to trigger reloading.


## Limitations

App will break if trying to read directory with invalid permissions

Sibling folders will auto-collapse if a new folder is created

Reload is global, so for big folders performance is sub-obptimal.





