import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelComponent } from './hotel.component';
import { HotelFiltersComponent } from './hotel-filters/hotel-filters.component';
import { HotelRoutingModule } from './../../routes/hotel.routes';
import { HotelService } from './service/hotel.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        HotelCardComponent,
        HotelComponent,
        HotelFiltersComponent
    ],
    exports: [
        HotelCardComponent,
        HotelComponent,
        HotelRoutingModule
    ],
    providers: [
        HotelService
    ]
})
export class HotelModule { }
