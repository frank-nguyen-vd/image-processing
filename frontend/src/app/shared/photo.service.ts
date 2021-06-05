import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    constructor(private http: HttpClient) {}

    getPhotoNames(): Observable<Photo[]> {
        return this.http.get<Photo[]>('http://localhost:3000/api/v1/images');
    }
}
