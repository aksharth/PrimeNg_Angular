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
  filterproductbyid:any
  constructor(private customerService: CustomerService, private routes: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    
  this.route.params.subscribe(params => {
    this.id = params['id']
    console.log(this.id)
    this.customerService.getProductById(this.id).subscribe((res:any)=>{
      this.products=res;
      console.log('response', this.products)
    })
  })
  }

  addproducts(){
 this.routes.navigate(['/addproducts', this.id])
  }

  editproduct(id:any){
    console.log(id)
    this.routes.navigate(['/editproduct', id])
  }

  deletecategory(id: any) {

    this.customerService.deleteProducts(id).subscribe({
      next: (res: any) => {
        alert("category delete successfully");
        this.products = this.products.filter((catagory: any) => catagory.id !== id);
        // this.filterproductbyid = this.filterproductbyid.filter((catagory: any) => catagory.id !== id);
      },
      error: () => {
        alert("Error while deleting category");
      }
    })

  }

}
