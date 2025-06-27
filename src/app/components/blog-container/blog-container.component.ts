import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../Utils/Models/blog.model';

@Component({
  selector: 'app-blog-container',
  standalone: false,
  templateUrl: './blog-container.component.html',
  styleUrl: './blog-container.component.css'
})
export class BlogContainerComponent {
  @Input() post!: Blog;
  @Output() readMore = new EventEmitter<void>();
}
