import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Fabiano',
        lastName: 'Scorsatto',
        age: 32
      },
      {
        firstName: 'Segunda',
        lastName: 'Pessoa',
        age: 24
      },
      {
        firstName: 'Ultimo',
        lastName: 'Humano',
        age: 99
      }
    ]

    return of(peopleArray);
  }
}
