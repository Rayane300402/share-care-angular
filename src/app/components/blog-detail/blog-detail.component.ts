import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../Utils/Models/blog.model';

@Component({
  selector: 'app-blog-detail',
  standalone: false,
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  @Input() post!: Blog;
  @Output() back = new EventEmitter<void>();
}
