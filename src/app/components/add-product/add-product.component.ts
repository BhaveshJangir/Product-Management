import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  email:string = ""
  password:string = ""
  toast = inject(ToastrService)

  getProduct() {
    console.log(this.email,this.password,"print")
    if(this.email=="" || this.password==""){
      this.toast.error("Fill Data" )
    }else{
      this.toast.success("great work")
    }
    
    }

}
