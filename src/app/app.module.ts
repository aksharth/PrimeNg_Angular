import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CategorysComponent } from './categorys/categorys.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { OrderListModule } from 'primeng/orderlist';
import { TagModule } from 'primeng/tag';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { ToastModule } from 'primeng/toast';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorysComponent,
    EditCategoryComponent,
    AddcategoryComponent,
    ProductsComponent,
    AddproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    OrderListModule,
    TagModule,
    DataViewModule,
    TableModule,
    HttpClientModule,
    ScrollPanelModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
    
   
  
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
