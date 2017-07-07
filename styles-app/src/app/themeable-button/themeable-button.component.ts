import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'themeable-button',
  template: `
  
        <button class="btn btn-theme">Themeable Button</button>
  
  `,
  styles: [`
  
      :host-context(.red-theme) .btn-theme {
        background: red;
      }

      :host-context(.blue-theme) .btn-theme {
          background: blue;
      }
      
  `]
})
export class ThemeableButtonComponent {

}
