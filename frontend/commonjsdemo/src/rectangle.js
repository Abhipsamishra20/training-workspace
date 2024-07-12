//if you are importing a non default module you have to import as a object {Shape}
const Shape = require('./shape')
class Rectangle extends Shape{

    constructor (width,height){
        super(width,height)
    }
    async calculateArea(){return this.width * this.height}

    
    toString(){
        return "Rectangle"
    }
}

module.exports = Rectangle