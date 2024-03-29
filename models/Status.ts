export class Status {
    id: string;
    alias: string;
    message: string;
    image: string;

    constructor(id:string, alias:string, message: string, image: string){
        this.id = id;
        this.alias = alias  
        this.message = message;
        this.image = image
    }
    
    getID(){
        return this.id;
    }
    setMessage(message:string){
        this.message = message;
    };
    getMessage(){
        return this.message;
    };
    getAlias(){
        return this.alias;
    };
}