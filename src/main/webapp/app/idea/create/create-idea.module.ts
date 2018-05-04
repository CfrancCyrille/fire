import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FireSharedModule } from '../../shared';

import { CREATE_IDEA_ROUTE, CreateIdeaComponent } from './';

@NgModule({
    imports: [
        FireSharedModule,
        RouterModule.forChild([CREATE_IDEA_ROUTE])
    ],
    declarations: [
        CreateIdeaComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FireCreateIdeaModule { }
