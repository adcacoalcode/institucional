import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
