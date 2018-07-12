export class ShoppingCart{


    private _productName : string;
    public get productName() : string {
      return this._productName;
    }
    public set productName(v : string) {
      this._productName = v;
    }




    private _quantity : number;
    public get quantity() : number {
      return this._quantity;
    }
    public set quantity(v : number) {
      this._quantity = v;
    }


    private _productPrice : number;
    public get productPrice() : number {
      return this._productPrice;
    }
    public set productPrice(v : number) {
      this._productPrice = v;
    }

    private _imageLink : string;
    public get imageLink() : string {
      return this._imageLink;
    }
    public set imageLink(v : string) {
      this._imageLink = v;
    }


    constructor(productName: string, quantity: number,productPrice:number,imageLink:string) {
      this.productName = productName;
      this.quantity=quantity;
      this.productPrice = productPrice;
      this.imageLink = imageLink;

  }
  }
