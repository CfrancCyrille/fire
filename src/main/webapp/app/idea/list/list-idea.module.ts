import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FireSharedModule } from '../../shared';

import { LIST_IDEA_ROUTE, ListIdeaComponent } from './';

@NgModule({
    imports: [
        FireSharedModule,
        RouterModule.forChild([LIST_IDEA_ROUTE])
    ],
    declarations: [
        ListIdeaComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FireListIdeaModule { }
