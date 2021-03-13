const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
                type: 'input',
                name: 'name',
                message: "你项目名字是？",
                default: this.appname
            }])
            .then(answers => {
                this.answers = answers
            })
    }
    writing() {
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )
        const tmpl = this.templatePath('bar.html')
        const output = this.destinationPath('bar.html')
            // const context = { title: 'Hello gwn ~', success: true }
        const context = this.answers
        this.fs.copyTpl(tmpl, output, context)
    }

}