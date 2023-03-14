import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // pour faire un formulaire

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragonsComponent } from './components/dragons/dragons.component';
import { DragonDetailComponent } from './components/dragon-detail/dragon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DragonsComponent,
    DragonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    // pour le formulaire
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
