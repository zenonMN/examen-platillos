import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Material/angular-material.module';
import { LogInComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { IngredientesPopularesComponent } from './components/ingredientes-populares/ingredientes-populares.component';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AuthGuard, AuthGuardInit } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    BienvenidaComponent,
    IngredientesPopularesComponent,
    PlatillosComponent,
    ProfileComponent,
    MenuComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragScrollModule
  ],
  providers: [
    AuthGuard,
    AuthGuardInit
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
