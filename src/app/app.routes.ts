import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

export const routes: Routes = [
    {
        path : "",
        component:HomeComponent

    },
    {
        path : "product/:id",
        component:ProductInformationComponent

    },
    {
        path:"add-product",
        component:AddProductComponent
    },
    {
        path:"edit-product/:id",
        component:EditProductComponent
    }
];
