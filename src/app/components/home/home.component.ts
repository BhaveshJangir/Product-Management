import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProductService } from '../../product.service';
import { Product } from '../../../../type/post';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,MatButtonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
//   this.lis=this.ps.lip
//   console.log(this.lis,"data")
// }


  type = 1;
  lis:any  = []
  p?:Product;
  ps = inject(ProductService);
  textByInput:any;
  text: any ="";
  constructor(private router:Router){
    this.lis=this.ps.lip
    console.log(this.lis,"data")
    
  }
  // Second Method
  // constructor(private ps:ProductService){
  //   this.lis=this.ps.lip
  //   console.log(this.lis,"data")
  // }
  ngOnInit(){

    // Below commented code have error check it 



    this.ps.getProducts().subscribe((r: any) =>{
      this.p = r.products;
      console.log(this.p,"show data of product")
    })


    //  this.ps.getPost().subscribe((result) => {
    //   this.lis = result
    //   console.log(result)
      
    // })
      
  }
  getData(pr:string){
    console.log("getData",pr)
    console.log(this.lis)
  }



  

  gotoProduct(id:any) {
    console.log(id)
    this.router.navigate(['/product']);  // define your component where you want to go
    }


    getInput() {
      console.log(this.textByInput,this.text);
      }

      getText(event: any) {
       this.textByInput = event?.target.value;
       console.log(this.textByInput);
        }
}
