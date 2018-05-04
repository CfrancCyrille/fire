import { RequestOptions, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Services
import { GoogleVisionService, HttpService } from '.';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
    imports: [
        HttpModule,
        AngularFireDatabaseModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        GoogleVisionService,
        HttpService
    ]
})
export class CoreModule { }
