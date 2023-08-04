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
  Paramid:any;
  // name!:string;
  price:any;
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
      this.customer.getprod(this.Paramid).subscribe((res: any) => {
        this.setProduct = res[0];
        console.log("3---",this.setProduct.name)
        this.form = this.formBuilder.group({
          postId: [this.setProduct.postId],
          // abcname: [this.setProduct.name, Validators.required],
          name: [this.setProduct.name, Validators.required],
           price: [this.setProduct.price, Validators.required],
         });
      });
    });
    
    
   
      
    

  }
  

  // getProduct(id:any){
  //   console.log(id)
  //   this.customer.getprod(id).subscribe((res:any)=>{
  //   console.log(res[0])

  //   this.setProduct= res[0];
  //   console.log(this.setProduct.name)

  //   console.log(this.setProduct.name,this.setProduct.price);
  
  //     console.log(this.form.value)
  //   })
  // }

  updateProduct() {
    console.log("hii",this.form.value, this.Paramid);
    

    this.customer.editproduct(this.form.value, this.Paramid, ).subscribe({
      next: (res: any) => {
        alert("Product Updated Successfully!!");
        this.route.navigate(['/products',this.setProduct.postId]);
      },
      error: () => {
        alert("Error while updating the product!!");
      }
    });
  }


}
