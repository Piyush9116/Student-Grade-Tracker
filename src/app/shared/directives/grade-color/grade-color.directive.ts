import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGradeColor]'
})
export class GradeColorDirective implements OnChanges{

  @Input() appGradeColor!: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnChanges(): void {
    let color = 'black';

    if (this.appGradeColor >= 90) color = 'green';
    else if (this.appGradeColor >= 80) color = '#0096FF';
    else if (this.appGradeColor >= 60) color = 'goldenrod';
    else if (this.appGradeColor >= 40) color = 'orange';
    else color = 'red';

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }

}
