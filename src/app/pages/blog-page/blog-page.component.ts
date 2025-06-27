import { Component } from '@angular/core';
import { BLOGS } from '../../Utils/blog.utils';
import { Blog } from '../../Utils/Models/blog.model';
@Component({
  selector: 'app-blog-page',
  standalone: false,
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {

  public blogs: Blog[] = [];
    selectedPost: Blog | null = null;

  ngOnInit() {
    this.blogs = BLOGS;
  }


    selectPost(post: Blog) {
    this.selectedPost = post;
  }

  clearSelection() {
    this.selectedPost = null;
  }

}
