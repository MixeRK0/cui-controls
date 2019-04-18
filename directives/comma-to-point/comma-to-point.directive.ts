import {Directive, ElementRef, HostListener} from '@angular/core';
import * as ASCII from "../../services/cui/ascci.helper";

@Directive({
  selector: '[decimal]'
})
export class DecimalDirective {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;
  }

  transform(value: string): string {
    let result = '';
    let isPointInResult;
    for (const currentChar of value) {
      const currentCharCode = currentChar.charCodeAt(0);
      if (result.length === 0 && currentCharCode === ASCII.CHAR_MINUS) {
        result = '-';
      } else if (!ASCII.isDigit(currentCharCode)) {
        if (!isPointInResult && (currentCharCode === ASCII.CHAR_POINT || currentCharCode === ASCII.CHAR_COMA)) {
          result += '.';
          isPointInResult = true;
        }
      } else {
        result += currentChar;
      }
    }
    return result;
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value) {
    this.el.value = this.transform(value);
  }
}
