import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { IntranetComponent } from './intranet.component';
import { IntranetRoutingModule } from './intranet-routing.module';


@NgModule({
    imports: [
        SharedModule,
        IntranetRoutingModule
    ],
    declarations: [
        IntranetComponent
    ],
    exports: [],
    providers: [],
})
export class IntranetModule {
    constructor() { }
}
