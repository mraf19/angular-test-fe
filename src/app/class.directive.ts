import { Directive, Renderer2, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class ClassDirective implements OnInit {
  @Input() appStyle: string = '';
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#151618'
    );
    this.renderer.setStyle(this.element.nativeElement, 'text-align', 'center');
    this.renderer.setStyle(this.element.nativeElement, 'flexDirection', 'col');
  }
}
