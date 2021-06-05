import { Component, Injectable, OnChanges, OnInit } from '@angular/core';
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
    photosPerRow: number = 0;
    photoWidth: number = 0;
    photoHeight: number = 0;

    constructor(private photoService: PhotoService) {}

    ngOnInit(): void {
        this.photoService.getPhotoNames().subscribe((res) => {
            this.photos = res;
        });
    }

    updateSetting(event: any) {
        this.photosPerRow = event.value;
        this.photoWidth = 100 * (10 - this.photosPerRow + 1);
        this.photoHeight = 100 * (10 - this.photosPerRow + 1);
    }
}
