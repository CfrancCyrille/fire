import { Route } from '@angular/router';

import { IdeaComponent } from './';

export const IDEA_ROUTE: Route = {
    path: 'idea',
    component: IdeaComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
