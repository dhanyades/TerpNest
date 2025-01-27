class Profile {
    email: string;  
    fullName: string;
    gender: string;
    semester: string;
    passwrd: string;

    constructor(email: string, fullName: string, gender: string, semester: string, passwrd: string) {
        this.email = email;
        this.fullName = fullName;
        this.gender = gender;
        this.semester = semester;
        this.passwrd = passwrd;
    }

};
export default Profile;