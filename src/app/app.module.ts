import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './service/product.service';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductmanagerComponent } from './productmanager/productmanager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { ProductEdit2Component } from './product-edit2/product-edit2.component';
import { ProductAdd2Component } from './product-add2/product-add2.component';
import { StoreComponent } from './store/store.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  imports:[ BrowserModule, FormsModule,AppRoutingModule ,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, HomeComponent, AboutComponent, ProductDetailComponent, ProductAddComponent, ProductmanagerComponent, ProductEditComponent, ProductDetail2Component, ProductEdit2Component, ProductAdd2Component, StoreComponent, SlideComponent, FooterComponent, AdminComponent,],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
