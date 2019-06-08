export class User {
    private _id: string;
    private _name: string;
    private _age: number;
    private _email: string;
    private _phone: string;


    get id(): string {
        return this._id;
    }
    set id(newId: string) {
        this._id = newId;
    }

    get name(): string {
        return this._name;
    }
    set name(newName: string){
        this._name = newName;
    }

    get age(): number {
        return this._age;
    }
    set age(newAge: number) {
        this._age = newAge;
    }

    get email(): string {
        return this._email;
    }
    set email(newEmail: string) {
        this._email = newEmail;
    }

    get phone(): string {
        return this._phone;
    }
    set phone(newPhone: string) {
        this._phone = newPhone;
    }
}