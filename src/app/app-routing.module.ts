import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorysComponent } from './categorys/categorys.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  {path:'',redirectTo:'categorys',pathMatch:'full'},
  {path:'categorys',component:CategorysComponent},
  {path:'addcategory',component:AddcategoryComponent},
  {path:'products/:id',component:ProductsComponent},
  {path:'addproducts/:id',component:AddproductComponent},
  {path:'editcategories/:id',component:EditCategoryComponent},
  {path:'editproduct/:id',component:EditproductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
