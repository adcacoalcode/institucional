import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SwiperModule } from "swiper/angular";
import { SliderComponent } from './components/slider/slider.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SliderComponent,
    MapComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqQ0vinF4mT074dWAWWbfBlErolEGla94'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
