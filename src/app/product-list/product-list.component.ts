import { Component, OnInit } from '@angular/core';
import { ProductService } from "../service/product.service";
import { ActivatedRoute, Router} from '@angular/router';
import { data } from '../mocdat';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products: Product[] ;
  constructor(private productService: ProductService,  private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit() :void {
  // this.products = this.productService.getProducts();
   this.getProducts();
  }
getProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    })
  }
  showDetail(id) {
    this.router.navigate(["/product", id]);
  }


}