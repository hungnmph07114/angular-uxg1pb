import { Component, OnInit } from '@angular/core';
import { ProductService } from "../service/product.service";
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-productmanager',
  templateUrl: './productmanager.component.html',
  styleUrls: ['./productmanager.component.css']
})
export class ProductmanagerComponent implements OnInit {

 products: Product[] ;
  constructor(private productService: ProductService,  private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit()  {
    this.products = this.getproducts();
  }
  getproducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    })

  }
  
 editproduct(id) {
    this.router.navigate(["product/edit", id]);
  }
   removeItem(id) {
     this.productService.removeProduct1(id).subscribe(Response => {
       this.products = this.products.filter(product => product.id != Response.id)
     });
  //  this.products = this.productService.removeProduct(id);
  }
}