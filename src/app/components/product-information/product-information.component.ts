import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-information',
  standalone: true,
  imports: [],
  templateUrl: './product-information.component.html',
  styleUrl: './product-information.component.scss'
})
export class ProductInformationComponent {
  pd:any;
  ps = inject(ProductService);
  activatedRout = inject(ActivatedRoute)
  @Output() data = new EventEmitter<number>();
  ngOnInit(){
    let id =this.activatedRout.snapshot.params['id']
    this.ps.getProduct(id).subscribe((result:any) =>{
      this.pd = result
    }
    )}
   
    

}
