import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  @Input() person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.personService.getPerson(id)
      .subscribe(person => this.person = person);
  }

  save(): void {
    if (this.person) {
      this.personService.updatePerson(this.person)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
