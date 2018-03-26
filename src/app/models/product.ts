export class Product {
	Id: number;
	VendorId: number;
	VendorPartNumber: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;
	Active: boolean;
	DateCreated: Date;

	constructor(

	Id: number,
	VendorId: number,
	VendorPartNumber: string,
	Name: string,
	Price: number,
	Unit: string,
	PhotoPath: string,
	Active: boolean

	) {
	this.Id = Id;
	this.VendorId = VendorId;
	this.VendorPartNumber = VendorPartNumber;
	this.Name = Name;
	this.Price = Price;
	this.Unit = Unit;
	this.PhotoPath = PhotoPath;
	this.Active = Active;
	this.DateCreated = new Date();
	}
}