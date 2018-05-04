import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FireSharedModule } from '../shared';

import { CHARACTER_ROUTE, CharacterComponent } from './';

@NgModule({
    imports: [
        FireSharedModule,
        RouterModule.forChild([CHARACTER_ROUTE])
    ],
    declarations: [
        CharacterComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FireCharacterModule { }
