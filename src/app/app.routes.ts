import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';

export const routes: Routes = [
    {
        path : "",
        component:CardComponent

    },
    {
        path : "product/:id",
        component:ProductInformationComponent

    }
];
