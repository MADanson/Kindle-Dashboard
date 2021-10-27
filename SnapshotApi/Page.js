
class Page {

    constructor(page) {
        this.page = require("./pages/"+page+".json")
        var colImgCount = 0
        var colBtnCount = 0
        var rowNo = 0
    }
    generate() {
        this.getY()
        this.getX()
    }
    getY(){

        for row in this.page {
            
        }
    }

}

const page = new Page("main")

