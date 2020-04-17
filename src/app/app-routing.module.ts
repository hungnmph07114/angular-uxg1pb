import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductmanagerComponent } from './productmanager/productmanager.component'
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { ProductEdit2Component } from './product-edit2/product-edit2.component';
import { ProductAdd2Component } from './product-add2/product-add2.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
   {path:'home',component:HomeComponent},
   {path:'admin',component:AdminComponent,children:[
     {path:'',redirectTo:'manager', pathMatch:'full'},
  {path : 'manager', component: ProductmanagerComponent},
   ]},
  {path:'list-product',component:ProductListComponent},
  {path:'product/:prodcutID',component:ProductDetail2Component},
   {path:'product/edit/:prodcutID',component:ProductEdit2Component},
   //{ path: 'product/add', component: [ProductAdd2Component]},
 
  {path:'about',component:AboutComponent},
  {path:'detail-product/:id',component:ProductDetailComponent},
  {path:'edit - product/:id',component:ProductEditComponent},
  { path: 'add-product', component: ProductAddComponent},

  {path : 'store', component: StoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
