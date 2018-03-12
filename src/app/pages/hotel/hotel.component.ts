import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HotelService } from './service/hotel.service';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
    filters: Object;
    hotels: any;

    constructor(
        private hotelService: HotelService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.filters = {
            name: this.route.snapshot.params['name'] || '',
            stars: this.route.snapshot.params['stars'] || ''
        };
        this.hotels = [];
    }

    filter() {
        this.getHotels(this.filters);
        this.router.navigate([ '/hotels', this.filters ]);
    }

    getHotels(filters) {
        this.hotelService.get(filters)
        .subscribe(hotels => {
            this.hotels = hotels;
        });
    }

    ngOnInit() {
        this.getHotels(this.filters);
    }

    showHotel(name) {
        this.filters = {name: name};
        this.filter();
    }
}
