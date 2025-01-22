class Card {
    title: string;  
    image: string;
    address: string;
    price: string;
    beds: string

    constructor(title: string, image: string, address: string, price: string, beds: string) {
        this.title = title;
        this.image = image;
        this.address = address;
        this.price = price;
        this.beds = beds;
    }

};
export default Card;