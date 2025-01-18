class Profile {
    username: string;  
    address: string;
    price: string;
    beds: string

    constructor(username: string, address: string, price: string, beds: string) {
        this.username = username;
        this.address = address;
        this.price = price;
        this.beds = beds;
    }

};
export default Profile;