import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './persons/person';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const persons: Person[] = [
            { id: 1, firstName: "Karlie", lastName: "Hayden", age: 20 },
            { id: 2, firstName: "Emely", lastName: "Stevenson", age: 30 },
            { id: 3, firstName: "Vance", lastName: "Swanson", age: 42 },
        ]
        return { persons };
    }
}