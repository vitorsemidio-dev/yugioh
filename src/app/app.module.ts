import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { ConhecaOGameComponent } from './conheca-o-game/conheca-o-game.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroImageComponent,
    ConhecaOGameComponent,
    CaracteristicasComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
