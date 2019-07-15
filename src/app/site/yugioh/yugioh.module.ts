import { YugiohComponent } from './yugioh.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ConhecaOGameComponent } from './conheca-o-game/conheca-o-game.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YugiohRoutingModule } from './yugioh-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroImageComponent,
    ConhecaOGameComponent,
    CaracteristicasComponent,
    NewsletterComponent,
    FooterComponent,
    YugiohComponent,
  ],
  imports: [
    CommonModule,
    YugiohRoutingModule
  ]
})
export class YugiohModule { }
