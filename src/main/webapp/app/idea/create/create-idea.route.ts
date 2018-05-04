import { Route } from '@angular/router';

import { CreateIdeaComponent } from './';

export const CREATE_IDEA_ROUTE: Route = {
    path: 'create-idea',
    component: CreateIdeaComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
