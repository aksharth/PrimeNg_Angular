import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{
  form!: FormGroup;
  id:any;
  name!:string;
  price:any;

  constructor(
    private formBuilder: FormBuilder, 
    private customer:CustomerService,
    private routes:ActivatedRoute,
     private messageService: MessageService,
      private route: Router) {}

  ngOnInit() {

    this.routes.queryParams.subscribe((params) => {
      this.id = this.routes.snapshot.params['id'];
      this.name = params['name'] || '';
      // this.price = params['price'] || '';

      console.log(this.id)
      console.log(this.name)
      console.log(this.price)


    });
    
    this.form = this.formBuilder.group({
      name: [this.name, Validators.required],
      price: [this.price, Validators.required],

    });
  }

  updateProduct() {

    this.customer.editcategory(this.form.value, this.id).subscribe({
      next: (res: any) => {
        alert("Product Updated Successfully!!");
        this.route.navigate(['/categorys']);
      },
      error: () => {
        alert("Error while updating the product!!");
      }
    });
  }


}
