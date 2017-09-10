const pug = require('pug');

const compilecb = pug.compileFile('template.pug',{pretty:true});

console.log(compilecb({
    arg:"chenchao",
    age:24
}))

console.dir(compilecb.toString())

const rendercb = pug.renderFile('template.pug',{
    arg:"xinyue",
    age:22
});

console.log(rendercb);
