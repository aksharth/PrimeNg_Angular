import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {
  layout: any = 'list';
  products!: Product[];
  virtualProducts!: Product[];
  constructor(private customerService: CustomerService, private routes: Router) {}

  ngOnInit() {

    this.customerService.getcategorylist().subscribe({
      next: (res:any) => {
        this.products = res;
        console.log(res)
      },
      error: console.log,
    });
  }


  addcatogory(){
 this.routes.navigate(['/categories/new'])
  }

  gotoproducts(id:any){
    this.routes.navigate(['/Products', id]);
  }

  editcategory(id:any){
    this.routes.navigate([`/categories/${id}/edit/`]);

  }

  deletecategory(id: any) {

    this.customerService.deleteEmployee(id).subscribe({
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
