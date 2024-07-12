
const Shape = require("./shape")
class Triangle extends Shape{

    constructor (width,height){
        super(width,height)
    }
    async calculateArea(){return 0.5*this.width * this.height}

    
    toString(){
        return "Triangle"
    }
}

module.exports = Triangle