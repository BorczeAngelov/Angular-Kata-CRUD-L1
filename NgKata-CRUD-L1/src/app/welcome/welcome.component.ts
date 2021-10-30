import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/person.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private personsService: PersonService) { }

  ngOnInit(): void {
    console.log("Testing createDB method - START");
    
    this.personsService.getPersons().subscribe(
      persons => console.log(persons)      
    ); //Test check logger

    console.log("Testing createDB method - END");
  }

}
