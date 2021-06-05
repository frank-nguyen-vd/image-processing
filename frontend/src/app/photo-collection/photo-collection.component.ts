import { Component, Injectable, OnInit } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable()
@Component({
    selector: 'app-photo-collection',
    templateUrl: './photo-collection.component.html',
    styleUrls: ['./photo-collection.component.css']
})
export class PhotoCollectionComponent implements OnInit {
    photos: Photo[] = [];

    constructor() {}

    ngOnInit(): void {
        this.photos = [
            { id: 1, name: 'spring' },
            { id: 2, name: 'summer' },
            { id: 3, name: 'autumn' },
            { id: 4, name: 'winter' }
        ];
    }
}
