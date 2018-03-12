import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { environment } from './../../../../environments/environment';

@Component({
    selector: 'app-hotel-card',
    templateUrl: './hotel-card.component.html',
    styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
    ArrayType: any;
    hotelImagesPath: String;
    @Input() data;
    @Output() hotelSelected;

    constructor() {
        this.ArrayType = Array;
        this.hotelImagesPath = environment.hotelImagesPath;
        this.hotelSelected = new EventEmitter();
    }

    getImageUrl(image) {
        return `${this.hotelImagesPath}/${image}`;
    }

    ngOnInit() {
    }

    showHotel(name) {
        this.hotelSelected.emit(name);
    }
}
