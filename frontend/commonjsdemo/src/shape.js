class Shape extends Object{
    constructor(width,height){
        super()
        this.width = width;
        this.height = height;
    }

    async calculateArea(){return 0.0}
}

module.exports = Shape