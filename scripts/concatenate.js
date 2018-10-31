const fs = require('fs-extra');
const concat = require('concat');

const projectName = 'web-comp5';
(async function build(){
    const files = [
        `./dist/${projectName}/runtime.js`,
        `./dist/${projectName}/polyfills.js`,
        `./dist/${projectName}/scripts.js`,
        `./dist/${projectName}/main.js`,
        ]
        await fs.ensureDir('elements')
        await concat(files, 'elements/api-comp.js');
        await fs.copyFile('./dist/web-comp5/styles.css', 'elements/styles.css')
        await fs.copy('./dist/web-comp5/assets/', 'elements/assets/' )
        
})()