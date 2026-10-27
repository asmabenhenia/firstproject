import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
  names: string[] = ['Amine', 'Sami', 'Fatma', 'Yasmine'];

  reset(): void {
    this.names = [];
  }
}
