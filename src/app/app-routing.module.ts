import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { DownloadComponent } from './download/download.component';
import { UsComponent } from './us/us.component';

const routes: Routes = [
  {path:'home', component: MainComponent},
  {path:'product', component: ProductComponent},
  {path:'download', component: DownloadComponent},
  {path:'us', component: UsComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
