import faker from 'faker';
import {Mappable} from './CustomMap';

export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor(){
        this.name = faker.name.findName();
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string{
        return `User Name: ${this.name}`;
    }
}

