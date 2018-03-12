import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelComponent } from './../pages/hotel/hotel.component';

const hotelRoutes: Routes = [
    { path: 'hotels', component: HotelComponent },
    { path: '**', redirectTo: '/hotels' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(hotelRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HotelRoutingModule {}
