import { Route } from '@angular/router';

import { ListIdeaComponent } from './';

export const LIST_IDEA_ROUTE: Route = {
    path: 'list-idea',
    component: ListIdeaComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
