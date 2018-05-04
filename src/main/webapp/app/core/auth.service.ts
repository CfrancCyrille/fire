import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import { HttpService } from '.';
import { Observable } from 'rxjs/Observable';
import { LabelModel } from './models/label.model';

@Injectable()
export class AuthService extends HttpService {
    constructor(public http: Http) {
        super();
    }
}
