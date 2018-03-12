import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../../environments/environment';

@Injectable()
export class HotelService {

    constructor(private http: HttpClient) { }

    get(filters) {
        return this.http.get(`${environment.apiUrl}/api/hotels`, { params: filters });
    }
}
