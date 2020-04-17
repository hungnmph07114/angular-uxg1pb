import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute ,Route, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit2',
  templateUrl: './product-edit2.component.html',
  styleUrls: ['./product-edit2.component.css']
})
export class ProductEdit2Component implements OnInit {
product:Product;
  constructor(private sv:ProductService ,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getproduct();
  }
getproduct(){
this.route.params.subscribe(param => { 
  console.log(param);this.sv.getProducts1(param.prodcutID).subscribe(data => {this.product = data})} );
}
updateproduct(){
this.sv.updateproduct(this.product).subscribe(data =>{this.router.navigateByUrl('/manager')});
}
}