export class RegisterReponse {
    succeeded: boolean;
    errors: [];

    constructor(suc: boolean, errors: []) {
        this.succeeded = suc;
        this.errors = errors;
    }
    
}