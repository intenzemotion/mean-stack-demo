import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    // empty
  }

  createForm() {
    this.myForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    this.productService.addProduct(ProductName, ProductDescription, ProductPrice);
    this.router.navigate(['products']);
  }

}
