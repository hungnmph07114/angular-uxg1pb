import { Component, OnInit, Input } from "@angular/core";
import { data } from "../mocdata";
import { ProductService } from "../service/product.service";
import { Product } from "../Product";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.product = this.productService.getProduct(this.id);
    });
  }
}