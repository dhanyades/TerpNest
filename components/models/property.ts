class Property {
    title: string;  
    address: string;
    price: string;
    beds: string
    image: string

    constructor(title: string, address: string, price: string, beds: string, image: string) {
        this.title = title;
        this.address = address;
        this.price = price;
        this.beds = beds;
        this.image = image;
        
    }

};
export default Property;