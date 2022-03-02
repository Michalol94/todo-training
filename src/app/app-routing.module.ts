import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePageModule } from './pages/home-page.page-module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePagePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
