import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorysComponent } from './categorys/categorys.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  {path:'',redirectTo:'categories',pathMatch:'full'},
  {path:'categories',component:CategorysComponent},
  {path:'categories/new',component:AddcategoryComponent},
  {path:'categories/:id/edit',component:EditCategoryComponent},
  {path:'Products/:id',component:ProductsComponent},
  {path:'Products/New',component:AddproductComponent},
  {path:'Products/Edit/:id',component:EditproductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
