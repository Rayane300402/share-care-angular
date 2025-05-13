import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flags',
  standalone: false,
  templateUrl: './flags.component.html',
  styleUrl: './flags.component.css'
})
export class FlagsComponent {
  @Input() title: String = '';

}
