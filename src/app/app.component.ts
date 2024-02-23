import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductInformationComponent } from "./components/product-information/product-information.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MatButtonModule, HomeComponent, HeaderComponent, RouterOutlet, ProductInformationComponent]
})
export class AppComponent {

  title = 'product-management';
  
 
  
}
