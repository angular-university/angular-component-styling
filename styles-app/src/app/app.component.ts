import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        
        <p>Default Button:</p>
        <button class="btn btn-primary" type="submit" (click)="submit()">Button</button>

        <p>Equivalent example using Button:</p>
        <button class="btn" [class.btn-primary]="true" type="submit" (click)="submit()">Button</button>

        <p>Passing an Array of classes:</p>
        <button [ngClass]="['btn', 'btn-primary']" type="submit" (click)="submit()">Button</button>

        <p>Passing a string:</p>
        <button [ngClass]="'btn btn-primary'" type="submit" (click)="submit()">Button</button>

        <p>Passing a configuration object:</p>
        <button [ngClass]="{ btn:true, 'btn-primary':true }" type="submit" (click)="submit()">Button</button>

        <button (click)="toggleStyles()">Toggle State</button>
        
        <p>Obtaining the styles from the component method:</p>
        <button [ngClass]="calculateStyles(button)" #button (click)="submit()">Button</button>

    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {


    stateFlag = false;

    toggleStyles() {
        this.stateFlag = !this.stateFlag;
    }


    submit() {
        console.log('Button submitted');
    }

    calculateStyles(button) {
        return {
            btn: true,
            'btn-primary': true,
            'btn-extra-class': this.stateFlag
        };
    }


}
