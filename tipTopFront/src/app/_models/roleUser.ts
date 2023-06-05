export class roleUser {
    success: boolean;
    email: string;
    roles: string;
    
    constructor(suc: boolean, mail: string, roles: string) {
        this.success = suc;
        this.email = mail;
        this.roles = roles;
    }
}