export class User{
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phone: string;
    type: string;
    createdAt: Date;

    constructor(obj ?: any){
        this.id = obj && obj.id         || null;
        this.firstName = obj && obj.first_name  || null;
        this.lastName = obj && obj.last_name    || null;
        this.type = obj && obj.type     || null;
        this.email = obj && obj.email   || null;
        this.createdAt = obj && obj.created_at  || null;
        this.phone = obj && obj.phone  || null;
    }

    public getFullName():string{
        return this.firstName + " " + this.lastName;
    }
}

export class Address{
    id: number;
    street: string;
    houseNumber: string;
    floor: string;
    postCode: string;
    town: string;
    
    constructor(obj ?: any){
        this.id = obj && obj.id         || null;
        this.street = obj && obj.street  || null;
        this.houseNumber = obj && obj.house_number    || null;
        this.floor = obj && obj.floor     || null;
        this.postCode = obj && obj.post_code   || null;
        this.town = obj && obj.town  || null;
    }
}
