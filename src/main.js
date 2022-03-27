
const _ = require("lodash");  
const fs = require('fs');
const args = process.argv.slice(2)
const server =  require('./server.js')
const watcher = require('./watcher.js')
const ws = require('ws');
const wss = new ws.Server({ port: 5889 })
if (args.length == 0)
{
    console.log("Missing at least one directory argument")
    process.exit()
}

function reload()
{
    var contents =  watcher(args,reload)
    server.data = contents;
    wss.clients.forEach(function each(client) {
        client.send("reload");
      });
}


_.forEach( args, (dir) =>{

    if (!fs.existsSync(dir))
    {
        console.log("Directory not found: " + dir)
        process.exit()
    }
    fs.watch(dir,reload)
})

reload();

server.run();










