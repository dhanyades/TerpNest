class Card {
    title: string;  
    address: string;
    price: string;
    beds: string

    constructor(title: string, address: string, price: string, beds: string) {
        this.title = title;
        this.address = address;
        this.price = price;
        this.beds = beds;
    }

};
export default Card;