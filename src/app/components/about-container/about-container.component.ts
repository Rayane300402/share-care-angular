import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-container',
  standalone: false,
  templateUrl: './about-container.component.html',
  styleUrl: './about-container.component.css'
})
export class AboutContainerComponent {
  @Input() overlay: 'left' | 'right' = 'left';  
  @Input() title = '';
  @Input() body: string = '';
}
