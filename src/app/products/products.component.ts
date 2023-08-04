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
  constructor(private customerService: CustomerService, private routes: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id')
    console.log(this.id)
  })

    this.customerService.getproductslist().subscribe(
     (res:any) => {
        console.log(res)
          this.products = res;
      },
     (error) => {
      console.log(error)
    }
    );
  }


  addproducts(){
 this.routes.navigate(['/addproducts', this.id])
  }

  editproduct(){
    this.routes.navigate(['/editproduct', this.id])
  }

  deletecategory(id: any) {

    this.customerService.deleteProducts(id).subscribe({
      next: (res: any) => {
        alert("category delete successfully");
        this.products = this.products.filter((catagory: any) => catagory.id !== id);
      },
      error: () => {
        alert("Error while deleting category");
      }
    })

  }

}
