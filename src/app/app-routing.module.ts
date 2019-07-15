import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { YugiohComponent } from './site/yugioh/yugioh.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'yugioh', component: YugiohComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
