import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../models/photo';
import { PhotoService } from '../shared/photo.service';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
    @Input() photo: Photo;
    thumbnail: string = '';
    constructor(private photoService: PhotoService) {
        this.photo = {
            id: 0,
            name: ''
        };
    }

    ngOnInit(): void {
        this.thumbnail = this.photoService.getPhotoWithSize(
            this.photo.name,
            200,
            200
        );
    }
}
