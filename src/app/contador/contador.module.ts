import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],

    exports: [
        ContadorComponent
    ]

    /* contador.html no tiene ningun *ngif *ngfor
    imports: [
        CommonModule
    ]
    */

})


export class ContadorModule{}