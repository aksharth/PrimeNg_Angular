import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{
  form!: FormGroup;
  id:any;
  name!:string;
  Paramid:any;
  postId:any;
  setProduct:any;

  constructor(
    private formBuilder: FormBuilder, 
    private customer:CustomerService,
    private routes:ActivatedRoute,
     private messageService: MessageService,
      private route: Router) {}

  ngOnInit() {

    this.routes.params.subscribe((params) => {
      console.log("1--",params)
      this.Paramid = this.routes.snapshot.params['id'];
      console.log("2--",this.Paramid)
      this.customer.getcategory(this.Paramid).subscribe((res: any) => {
        this.setProduct = res[0];
        console.log("3---",this.setProduct.name)
        this.form = this.formBuilder.group({
          name: [this.setProduct.name, Validators.required]
        });
      });
    });

    // this.routes.queryParams.subscribe((params) => {
    //   this.id = this.routes.snapshot.params['id'];
    //   this.name = params['name'];
    //   console.log(this.id)
    //   console.log(this.name)

    // });
    
   
  }

  updateProduct() {

    this.customer.editcategory(this.form.value, this.Paramid).subscribe({
      next: (res: any) => {
        alert("Product Updated Successfully!!");
        this.route.navigate(['/categories']);
      },
      error: () => {
        alert("Error while updating the product!!");
      }
    });
  }


  
}
