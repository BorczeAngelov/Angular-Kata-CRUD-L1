import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService implements InMemoryDbService {

  createDb() {
    return {};
  }
}
