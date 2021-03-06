const _ = require("lodash");  
const fs = require('fs');
module.exports =  function watcher(args,reload)
{
   function getContent(dir)
   {   
        var content = []
        files = fs.readdirSync(dir)

       _.forEach(files, (file)=>{
             var path = dir + '/' + file;
             if (fs.statSync(path).isDirectory()){
                fs.watch(path,reload)
                content.push({
                        name: file,
                        content: getContent(path)
                    })       
            } else {
                content.push(file);
            }
       })
        return content;
   }
   
   var contents = []
    _.forEach(args, (dir) => {

        var obj = {
            path: dir,
            content:  getContent(dir)
        }
        contents.push(obj)
    })


    return contents;
}

