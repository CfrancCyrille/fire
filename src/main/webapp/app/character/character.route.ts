import { Route } from '@angular/router';

import { CharacterComponent } from './';

export const CHARACTER_ROUTE: Route = {
    path: 'character',
    component: CharacterComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
