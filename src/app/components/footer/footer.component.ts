import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private toastr: ToastrService) { }

  showInfo() {
    this.toastr.info(
      'Coming Soon!',
       '',
       {toastClass: 'ngx-toastr ',  progressBar: true, timeOut: 3000}
      );
  }

}
