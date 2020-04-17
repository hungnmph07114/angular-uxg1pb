import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router} from '@angular/router';
import { data } from '../mocdat';

@Component({
  selector: 'app-product-detail2',
  templateUrl: './product-detail2.component.html',
  styleUrls: ['./product-detail2.component.css']
})
export class ProductDetail2Component implements OnInit {

  constructor( private productService: ProductService,  private route: ActivatedRoute,private router: Router
  ) { }
product:Product;
  ngOnInit() {
    this.getProduct();
  }
getProduct(){
this.route.params.subscribe(param => { 
  console.log(param);
  this.productService.getProducts1(param.prodcutID).subscribe(data => {this.product = data})} );
}
}