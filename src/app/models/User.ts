import { IUser } from '../interfaces/IUser';

export class User implements IUser {
    private _id: string;
    private _name: string;
    private _age: number;
    private _email: string;
    private _phone: string;
    private _cpf: string;
    private _postalcode: string;
    private _street: string;
    private _number: number;
    private _complement: string;
    private _city: string;
    private _state: string;


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

    get cpf(): string {
        return this._cpf;
    }
    set cpf(newCpf: string) {
        this._cpf = newCpf;
    }

    get postalcode(): string {
        return this._postalcode;
    }
    set postalcode(newPostalCode: string) {
        this._postalcode = newPostalCode;
    }

    get street(): string {
        return this._street;
    }
    set street(newStreet: string) {
        this._street = newStreet;
    }

    get number(): number {
        return this._number;
    }
    set number(newNumber: number) {
        this._number = newNumber;
    }

    get complement() : string {
        return this._complement;
    }
    set complement(newComplement: string) {
        this._complement = newComplement;
    }

    get city() : string {
        return this._city;
    }
    set city(newCity: string) {
        this._city = newCity;
    }

    get state() : string {
        return this._state;
    }
    set state(newState: string) {
        this._state = newState;
    }
}