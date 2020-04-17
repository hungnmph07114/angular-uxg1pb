import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute ,Route, Router } from '@angular/router';
import { Product } from '../product';
import { data } from '../mocdat';
@Component({
  selector: 'app-product-add2',
  templateUrl: './product-add2.component.html',
  styleUrls: ['./product-add2.component.css']
})
export class ProductAdd2Component implements OnInit {

  constructor(private sv:ProductService ,private route: ActivatedRoute,private router:Router ) { }

  ngOnInit() {
  
  }
addproduct(){
  this.sv. addProduct1(this.product).subscribe(data => {console.log(data)});
}
}