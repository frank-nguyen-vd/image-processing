import { Component, Injectable, OnInit } from '@angular/core';
import { PhotoService } from '../shared/photo.service';
import { Photo } from '../models/photo';

@Injectable()
@Component({
    selector: 'app-photo-collection',
    templateUrl: './photo-collection.component.html',
    styleUrls: ['./photo-collection.component.css']
})
export class PhotoCollectionComponent implements OnInit {
    photos: Photo[] = [];

    constructor(private photoService: PhotoService) {}

    ngOnInit(): void {
        this.photoService.getPhotoNames().subscribe((res) => {
            this.photos = res;
        });
    }
}
