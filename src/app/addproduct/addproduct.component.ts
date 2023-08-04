import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  form!: FormGroup;
id:any;
  constructor(private formBuilder: FormBuilder, private customer:CustomerService,private messageService: MessageService, private router: Router ,private route:ActivatedRoute) {
   
  }
  ngOnInit(): void {
    this.initproductform();
    this.id = this.route.snapshot.paramMap.get('id');
    this.form.patchValue({ postId: this.id });
  }

  private initproductform(){
    this.form = this.formBuilder.group({
      postId: [""],
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.customer.addProduct(this.form.value).subscribe(
        (res: any) => {
          // Show success message
          this.messageService.add({  key: 'tl', severity: 'success', summary: 'Success', detail: 'Form submitted successfully.' });
          this.router.navigate(['/products',this.id])
        },
        (error) => {
          // Show error message
          this.messageService.add({ key: 'tl',severity: 'error', summary: 'Error', detail: 'Failed to submit the form.' });
        }
      );
    }
  }
}
