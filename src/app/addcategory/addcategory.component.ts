import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private customer:CustomerService,private messageService: MessageService, private route: Router) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.customer.addCategory(this.form.value).subscribe(
        (res: any) => {
          // Show success message
          this.messageService.add({  key: 'tl', severity: 'success', summary: 'Success', detail: 'Form submitted successfully.' });
          this.route.navigate(['/categorys'])
        },
        (error) => {
          // Show error message
          this.messageService.add({ key: 'tl',severity: 'error', summary: 'Error', detail: 'Failed to submit the form.' });
        }
      );
    }
  }
}
