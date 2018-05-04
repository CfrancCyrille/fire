import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import { HttpService } from '.';
import { Observable } from 'rxjs/Observable';
import { LabelModel } from './models/label.model';

@Injectable()
export class GoogleVisionService extends HttpService {
    constructor(public http: Http) {
        super();
    }

    getLabels(base64Image): Observable<any> {
        const body = {
            "requests": [
                {
                    "image": {
                        "content": base64Image
                    },
                    "features": [
                        {
                            "type": "LABEL_DETECTION"
                        }
                    ]
                }
            ]
        }
        return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + environment.googleCloudVisionAPIKey, body)
            .map((res: Response) => this.extractData(res))
            .catch(this.handleError);
    }
}
