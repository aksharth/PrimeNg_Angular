import { Component } from '@angular/core';
import { Product } from '../domain/product';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  layout: any = 'list';
  products: any = [];
  virtualProducts!: Product[];
  id:any;
  postId:any;
  setProduct:any;
  constructor(private customerService: CustomerService, private routes: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    
  this.route.params.subscribe(params => {
    console.log(params)
    this.id = params['id']
    console.log(this.id)
    this.customerService.getProductById(this.id).subscribe((res:any)=>{
      this.products=res;
      console.log('response', this.products)
    })

    this.customerService.getcategory(this.id).subscribe((res: any) => {
      this.setProduct = res[0];
      console.log("3---",this.setProduct.name)
      
    });
  })
  }

  addproducts(){
  
 this.routes.navigate([`/Products/${this.id}/New`])
  }

  editproduct(id:any){
    console.log(id)
    this.routes.navigate([`/Products/${id}/Edit`])
  }

  // deletecategory(id: any) {

  //   this.customerService.deleteProducts(id).subscribe({
  //     next: (res: any) => {
  //       alert("category delete successfully");
  //       this.products = this.products.filter((catagory: any) => catagory.id !== id);
  //       // this.filterproductbyid = this.filterproductbyid.filter((catagory: any) => catagory.id !== id);
  //     },
  //     error: () => {
  //       alert("Error while deleting category");
  //     }
  //   })

  // }
  deletecategory(id: any) {
    if (window.confirm('Are you sure you want to delete this product?')) {
      this.customerService.deleteProducts(id).subscribe({
        next: (res: any) => {
          alert("Category deleted successfully");
         
          this.products = this.products.filter((catagory: any) => catagory.id !== id);
        },
        error: () => {
          alert("Error while deleting category");
        }
      });
    }
  }

  goBack() {
    this.routes.navigate(['/'], { relativeTo: this.route });
  }
  
}
