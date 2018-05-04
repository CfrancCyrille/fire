import { RequestOptions, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Services
import { GoogleVisionService } from '.';

@NgModule({
    imports: [
        HttpModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        GoogleVisionService,
    ]
})
export class CoreModule { }
