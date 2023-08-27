import Page from '../pageobjects/page.js';
import * as fs from 'fs';
import * as path from 'path'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Helper extends Page {
    public  rmdir(dir) {
        var list = fs.readdirSync(dir);
        for(var i = 0; i < list.length; i++) {
          var filename = path.join(dir, list[i]);
          var stat = fs.statSync(filename);
      
          if(filename == "." || filename == "..") {
            // pass these files
          } else if(stat.isDirectory()) {
            // rmdir recursively
           this.rmdir(filename);
          } else {
            // rm fiilename
            fs.unlinkSync(filename);
          }
        }
        fs.rmdirSync(dir);
      }  

      public gettempDownloadDirFileCount(){
        return  fs.readdirSync(global.downloadDir).length
      }
}

export default new Helper();
