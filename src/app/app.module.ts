import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// google maps
import { AgmCoreModule } from '@agm/core';

// SweetAlert2
import Swal from 'sweetalert2';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { EditComponent } from './components/mapa/edit/edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  entryComponents: [
    EditComponent 
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3wD5Ku0DxOV9Gz9b3NF3M-xz36tsM0mE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
