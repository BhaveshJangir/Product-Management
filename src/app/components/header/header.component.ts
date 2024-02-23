import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,MatButtonModule],
  template: `
   
     <!-- <h1 class="text-3xl font-bold underline"> how are you </h1>
     <h2>what are doing buddy</h2> -->
  <mat-toolbar class="tool">
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
  <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
</mat-toolbar>
  `,
  styles: `
  .example-spacer {
  flex: 1 1 auto;
}
*{
  margin:0;
  padding:0;
}
  .tool{
    margin:0;
    background-color:pink;
  }

  `
})
export class HeaderComponent {

}
