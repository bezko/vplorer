
const _ = require("lodash");  
const fs = require('fs');
const args = process.argv.slice(2)
const server =  require('./server.js')
const watcher = require('./watcher.js')


if (args.length == 0)
{
    console.log("Missing at least one directory argument")
    process.exit()
}

_.forEach( args, (dir) =>{

    if (!fs.existsSync(dir))
    {
        console.log("Directory not found: " + dir)
        process.exit()
    }
})

var contents =  watcher(args)

server(contents);










