function ShopProduct(title, price){
        this._title = title;
        this._price = price;
    }
ShopProduct.prototype.getTitle = function(){
    return this._title
}
ShopProduct.prototype.setTitle = function(newTitle){
    this._title = newTitle
}
ShopProduct.prototype.setPrice = function(newPrice){
    this._price = newPrice
}
ShopProduct.prototype.getPrice = function(){
    return this._price
}
ShopProduct.prototype.getInfo = function(newInfo){
    return this.info = newInfo
}


function CDProduct(playLength){
    this._playLength = playLength;
    ShopProduct.cal(this, title, price)
    }

CDProduct.prototype = Object.create(ShopProduct.prototype);
CDProduct.prototype.constructor = CDProduct;

CDProduct.prototype.getPlayLength = function () {
    return this._playLength
}

function BookProduct(numPages){
    this._numPages = numPages;
    ShopProduct.cal(this, title, price)
}

BookProduct.prototype = Object.create(ShopProduct.prototype);
BookProduct.prototype.constructor = BookProduct;

CDProduct.prototype.getNumPages = function () {
    return this.numPages
}
