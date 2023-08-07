import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {
  layout: any = 'list';
  products!: Product[];
  virtualProducts!: Product[];
  constructor(private customerService: CustomerService, private routes: Router,private confirmationService: ConfirmationService, private messageService: MessageService) {}

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
    if (window.confirm('Are you sure you want to delete this category?')) {
      this.customerService.deleteEmployee(id).subscribe({
        next: (res: any) => {
          alert("Category deleted successfully");
         
          this.products = this.products.filter((category: any) => category.id !== id);
        },
        error: () => {
          alert("Error while deleting category");
        }
      });
    }
  }


  }
