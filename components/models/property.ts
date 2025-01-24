class Property {
    id: string;
    title: string;  
    address: string;
    price: string;
    beds: string
    image: string

    constructor(id: string, title: string, address: string, price: string, beds: string, image: string) {
        this.id = id;
        this.title = title;
        this.address = address;
        this.price = price;
        this.beds = beds;
        this.image = image;
        
    }

};
export default Property;