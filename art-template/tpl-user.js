/**
 * Created by ChenChao on 2017/9/10.
 */
var template = require('art-template');

var html = template.compile(__dirname+'/tpl-user.art',{
    user:{
        name:"aui"
    }
});
console.log(html.toString())


function a($data) {
    'use strict'
    $data     = $data || {}
    var $$out = '', $$line = [0, 0]
    try {
        $$out += "E:\\privateDemo\\pug\\art-template/tpl-user.art"
    } catch (error) {
        throw {
            name  : 'RuntimeError', path: null, message: error.message, line: $$line[0] + 1, column: $$line[1] + 1,
            source: "E:\\privateDemo\\pug\\art-template/tpl-user.art",
            stack : error.stack
        }
    }
    return $$out
}
