import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-hotel-filters',
    templateUrl: './hotel-filters.component.html',
    styleUrls: ['./hotel-filters.component.scss']
})
export class HotelFiltersComponent implements OnInit {
    private starsSelected;
    ArrayType: any;
    maxStars: number;
    showFilterName: boolean;
    showFilterStar: boolean;
    @Input() filters;
    @Output() filtersChange;

    constructor() {
        this.ArrayType = Array;
        this.maxStars = 5;
        this.filtersChange = new EventEmitter();
        this.showFilterName = true;
        this.showFilterStar = true;
        this.starsSelected = [];
    }

    filter() {
        this.filtersChange.emit(this.filters);
    }

    getSelectedStarsFromParams() {
        return this.filters.stars.split(',')
        .filter((item, index, self) => self.indexOf(item) == index)
        .map((item) => parseInt(item));
    }

    hasSelected(value) {
        return this.starsSelected.indexOf(value) > -1;
    }

    ngOnInit() {
        this.starsSelected = this.filters.stars ? this.getSelectedStarsFromParams() : [];
    }

    selectAllStars(event) {
        const isChecked = event.target.checked;

        if (isChecked) {
            this.starsSelected = [];
            this.filters.stars = '';
            this.filter();
        }
    }

    setFilterStars(event, value) {
        const isChecked = event.target.checked;
        let index;

        if (isChecked) {
            this.starsSelected.push(value);
        } else {
            index = this.starsSelected.indexOf(value);

            if (index > -1) {
                this.starsSelected.splice(index, 1);
            }
        }

        this.filters.stars = this.starsSelected.join(',');
        this.filter();
    }

    toggleFilterName() {
        this.showFilterName = !this.showFilterName;
    }

    toggleFilterStar() {
        this.showFilterStar = !this.showFilterStar;
    }
}
