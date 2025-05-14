import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-information-container',
  standalone: false,
  templateUrl: './information-container.component.html',
  styleUrl: './information-container.component.css'
})
export class InformationContainerComponent {

  /** image src */
  @Input() img!: string;
  /** main headline */
  @Input() title = '';
  /** optional body text (for hover or detail cards) */
  @Input() body?: string;
  /** button/link text */
  @Input() linkText?: string;
  /** link URL */
  @Input() linkUrl?: string;
  /** shape: 'wide' | 'square' | 'short' */
  @Input() shape: 'wide' | 'square' | 'short' = 'wide';
  /** if you want to use natural image ratio instead of preset aspect-ratios */
  @Input() useNaturalRatio = false;

    /** computed aspect-ratio for CSS */
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
      // presets
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
