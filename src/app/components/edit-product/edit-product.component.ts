import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {

  formBuilder = inject(FormBuilder);
  productForm:FormGroup = this.formBuilder.group({
    email:[''],
    password:['']
  })

  editProduct() {
    console.log(this.productForm.value)
    }
   

}
