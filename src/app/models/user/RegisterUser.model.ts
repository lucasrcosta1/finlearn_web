export class RegisterUser {

    fullname     : string | null;
    phone        : string | null;
    username     : string | null;
    password     : string | null;
    usernameCheck: string | null;
    passwordCheck: string | null;

    constructor (registerUser?: RegisterUser) {

        this.fullname      = registerUser?.fullname || null; 
        this.phone         = registerUser?.phone || null; 
        this.username      = registerUser?.username || null; 
        this.password      = registerUser?.password || null;
        this.usernameCheck = registerUser?.usernameCheck || null; 
        this.passwordCheck = registerUser?.passwordCheck || null;

    }
    
}