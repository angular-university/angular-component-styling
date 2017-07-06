import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls:['./app.component.css'],
    template: `

        <h2>ngClass Examples</h2>
        
        <p>Default Button:</p>
        <button class="btn btn-primary" type="submit" (click)="submit()">Button</button>

        <p>Equivalent example:</p>
        <button class="btn" [class.btn-primary]="true" type="submit" (click)="submit()">Button</button> 

        <p>Passing an Array of classes:</p>
        <button [ngClass]="['btn', 'btn-primary']" type="submit" (click)="submit()">Button</button>

        <p>Passing a string:</p>
        <button [ngClass]="'btn btn-primary'" type="submit" (click)="submit()">Button</button>

        <p>Passing a configuration object:</p>
        <button [ngClass]="{ btn:true, 'btn-primary':true }" type="submit" (click)="submit()">Button</button>

        <button (click)="toggleStyles()">Toggle State</button>

        <p>Obtaining the CSS classes from the component method:</p>
        <button [ngClass]="calculateClasses()" (click)="submit()">Button</button>

        <hr>
        <h2>ngStyle Examples</h2>
        
        <p>Default Button:</p>
        <button style="background:red" type="submit" (click)="submit()">Button</button>

        <p>Equivalent example:</p>
        <button [style.background]="'red'" type="submit" (click)="submit()">Button</button>

        <p>Passing an object:</p>
        <button [ngStyle]="{background: 'red'}" type="submit" (click)="submit()">Button</button>

        <p>Obtaining the styles from a component method:</p>
        <button [ngStyle]="calculateStyles()" (click)="submit()">Button</button> 
        
        <hr>
        <h2>Component Style Isolation example</h2>
        
        <button class="red-button">Button</button>
        
        <blue-button></blue-button>

    `
})
export class AppComponent {

    stateFlag = false;

    toggleStyles() {
        this.stateFlag = !this.stateFlag;
    }


    submit() {
        console.log('Button submitted');
    }

    calculateClasses() {
        return {
            btn: true,
            'btn-primary': true,
            'btn-extra-class': this.stateFlag
        };
    }

    calculateStyles() {
        return {
            background: 'red',
            'border-width.px': 4
        }
    }


}
