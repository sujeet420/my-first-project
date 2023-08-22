import { Directive , ElementRef} from '@angular/core';
//import here elementRef
@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="green"
   // el.nativeElement.style.display='none'
   this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  
  
  
}
