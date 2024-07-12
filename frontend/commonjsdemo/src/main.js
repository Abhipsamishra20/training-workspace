const Rectangle = require("./rectangle")

const Triangle = require("./triangle")

class Main{
    static async display(shape){//static members are class members ;called directly using class name
        const result = await shape.calculateArea()
        console.log(`Area of ${shape} is ${result}`)
    } 
}

Main.display(new Rectangle(23.4,34.5))
Main.display(new Triangle(23.4,34.5))
