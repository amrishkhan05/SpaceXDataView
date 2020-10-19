import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SapientViewService {

    constructor(private http: HttpClient) { }

    getSpaceXdata(launchYear?: string, launchSuccess?, landSuccess?) {
        let params = new HttpParams();
        if (launchYear) {
            params = params.set('launch_year', launchYear);
        }
        if (launchSuccess !== null && launchSuccess !== undefined) {
            params = params.set('launch_success', launchSuccess);
        }
        if (landSuccess !== null && landSuccess !== undefined) {
            params = params.set('land_success', landSuccess);
        }
        return this.http.get<any>
            (`https://api.spaceXdata.com/v3/launches?limit=100`, { params });
    }
}
