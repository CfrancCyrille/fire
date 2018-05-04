import { Observable } from 'rxjs/Observable';
import { Response, Headers, RequestOptions } from '@angular/http';

export class HttpService {
  protected baseUrl: string;
  protected getOptions: RequestOptions;
  protected postOptions: RequestOptions;
  constructor() {
    const getHeaders = new Headers({
      'Cache-control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    const postHeaders = new Headers({ 'Content-Type': 'application/json' });
    this.getOptions = new RequestOptions({ headers: getHeaders, withCredentials: true });
    this.postOptions = new RequestOptions({ headers: postHeaders, withCredentials: true });
  }

  protected extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  /**
   * Extract one object from the response
   * @param typeToInvoke {Type} - Type to use to convert the response content
   */
  protected extractSingleData<T>(res: Response, typeToInvoke: { new(obj: any): T }) {
    const data = res.json();
    return new typeToInvoke(data);
  }

  /**
   * Extract an array of object from the response
   * @param res {Response}
   * @param typeToInvoke {Type} - Type to use to convert the response content
   */
  protected extractArrayData<T>(res: Response, typeToInvoke: { new(obj: any): T }) {
    const data = res.json();
    const extracted: T[] = [];
    for (const a of data) {
      extracted.push(new typeToInvoke(a));
    }
    return extracted;
  }

  protected handleError(error: any) {
    console.log('request error - ', error);
    const toastMsg = error.status !== 0 ? `${error.status} - ${error.statusText}` +
      ' : Une erreur Server est survenue, veuillez contacter votre administrateur.' :
      'Une erreur Server est survenue, veuillez contacter votre administrateur.';

    // notify({
    //   'position': {
    //     at: 'bottom right',
    //     my: 'bottom right',
    //     offset: '-10 -10'
    //   },
    //   'maxWidth': 350,
    //   'message': toastMsg,
    //   'displayTime': 3000,
    //   'type': 'error'
    // });

    let errMsg = error.status !== 0 ? `${error.status} - ${error.statusText}` : 'Internal Server Error';

    if (error.json) {
      const exception = error.json();
      if (exception && exception.error) {
        errMsg += ' : ' + exception.error.exception + ', ' + exception.error.message;
      }
    }

    return Observable.throw(errMsg);
  }
}
