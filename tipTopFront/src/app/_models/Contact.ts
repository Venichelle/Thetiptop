export class Contact {
    email: string;
    mobile: string;
    message: string

    constructor(email: string, mobile: string, message: string) {
        this.email = email;
        this.mobile = mobile;
        this.message = message;
    }
}