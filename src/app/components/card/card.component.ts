import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { RupeePipe } from '../../rupee.pipe';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,UpperCasePipe,RupeePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
   ak = [1,2,3,4]
  @Input()  pk:any;
  @Input() pd:any;
  @Output() data = new EventEmitter<string>();
  @Output() id = new EventEmitter<number>();
  
   constructor(private router:Router){
    console.log(this.pd," data show ")
   }
    
    projectServiece = inject(ProductService);
    // ngOnInit(){
    //   this.projectServiece.getPost().subscribe((result) =>{
    //     console.log(result,"show data")
    //   })
    // }
    
    public async show(){
       setTimeout(() => {
        console.log(this.pk);
        
       }, 4000);
    }

    view(e?:any){
      console.log(e);
      this.data.emit("10");
      
    }

    gotoProduct(id:any) {
      console.log(id);
      this.id.emit(id);
      this.router.navigate(['/product/'+id]);
      this.projectServiece.getProduct(id).subscribe((result) =>{
         console.log(result);
      }) // define your component where you want to go
      }

          
}

