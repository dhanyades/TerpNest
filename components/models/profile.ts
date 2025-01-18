class Profile {
    username: string;  
    fullName: string;
    gender: string;
    semester: string

    constructor(username: string, fullName: string, gender: string, semester: string) {
        this.username = username;
        this.fullName = fullName;
        this.gender = gender;
        this.semester = semester;
    }

};
export default Profile;