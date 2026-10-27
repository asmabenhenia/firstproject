import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: { nom: string; age: number; email: string }[] = [
    { nom: 'Anis', age: 29, email: 'anis@fsb.ucar.tn' },
    { nom: 'Fatma', age: 24, email: 'fatma@fsb.ucar.tn' },
    { nom: 'Amine', age: 22, email: 'amine@fsb.ucar.tn' },
    { nom: 'Yasmine', age: 26, email: 'yasmine@fsb.ucar.tn' }
  ];

  reset(): void {
    this.users = [];
  }
}
