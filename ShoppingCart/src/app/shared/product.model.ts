export class Product{


  private _productName : string;
  public get productName() : string {
    return this._productName;
  }
  public set productName(v : string) {
    this._productName = v;
  }



  private _productCategory : string;
  public get productCategory() : string {
    return this._productCategory;
  }
  public set productCategory(v : string) {
    this._productCategory = v;
  }


  private _productPrice : number;
  public get productPrice() : number {
    return this._productPrice;
  }
  public set productPrice(v : number) {
    this._productPrice = v;
  }


  private _description : string;
  public get description() : string {
    return this._description;
  }
  public set description(v : string) {
    this._description = v;
  }


  private _imageLink : string;
  public get imageLink() : string {
    return this._imageLink;
  }
  public set imageLink(v : string) {
    this._imageLink = v;
  }


  constructor(productName: string, productCategory: string,productPrice:number,description:string,imageLink:string) {
    this.productName = productName;
    this.productCategory = productCategory;
    this.productPrice = productPrice;
    this.description = description;
    this.imageLink = imageLink;

}
}
