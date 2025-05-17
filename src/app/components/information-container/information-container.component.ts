import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-information-container',
  standalone: false,
  templateUrl: './information-container.component.html',
  styleUrl: './information-container.component.css'
})
export class InformationContainerComponent {

  @Input() img!: string;
  @Input() title = '';
  @Input() body?: string;
  @Input() linkText?: string;
  @Input() linkUrl?: string;
  @Input() shape: 'wide' | 'square' | 'short' = 'wide';
  @Input() useNaturalRatio = false;

  aspectRatio = '16/9';

  @ViewChild('imgEl') imgEl!: ElementRef<HTMLImageElement>;


  ngAfterViewInit() {
    if (this.useNaturalRatio) {
      const img = this.imgEl.nativeElement;
      if (img.complete) {
        this.setNaturalRatio(img);
      } else {
        img.onload = () => this.setNaturalRatio(img);
      }
    } else {
      switch (this.shape) {
        case 'wide':
          this.aspectRatio = '16/9';
          break;
        case 'square':
          this.aspectRatio = '1/1';
          break;
        case 'short':
          this.aspectRatio = '4/3';
          break;
      }
    }
  }

  private setNaturalRatio(img: HTMLImageElement) {
    const ratio = img.naturalWidth / img.naturalHeight;
    this.aspectRatio = `${ratio}`;
  }

}
