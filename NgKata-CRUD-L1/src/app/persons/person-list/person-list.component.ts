import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Person } from '../person';
import { PersonEditComponent } from '../person-edit/person-edit.component';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons);
  }

  delete(person: Person) {
    this.persons = this.persons.filter(p => p.id !== person.id);
    this.personService.deletePerson(person.id);
  }

  add(firstName: string): void {
    firstName = firstName.trim();
    if (!firstName) { return; }

    let newPerson: Person =
      {
        firstName: firstName,
        lastName: "No Last Name",
        age: 50
      } as Person;

    this.personService.addPerson(newPerson)
      .subscribe(person => {
        this.persons.push(person);
      });
  }

}
