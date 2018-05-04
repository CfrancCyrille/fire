import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FireSharedModule } from '../shared';

import { IDEA_ROUTE, IdeaComponent } from './';

@NgModule({
    imports: [
        FireSharedModule,
        RouterModule.forChild([IDEA_ROUTE])
    ],
    declarations: [
        IdeaComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FireIdeaModule { }
