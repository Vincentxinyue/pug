var pug = require('pug')
var fs = require('fs')

var data = {
    title : "my title",
    author: {
        twitter: "@Lee",
        name: "Azat"
    },
    tags: ['express', 'node', 'javascript']
}

data.body = process.argv[2]

// jade.compile
fs.readFile('index.pug', 'utf-8', function (error, source) {
    var template = pug.compile(source);
    var html = template(data)
    console.log(html);
})

// jade.renderFile
pug.renderFile('index.pug', data, function (error, html) {
    console.log(html)
})