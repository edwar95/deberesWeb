import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routes";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoComponent } from './producto/producto.component';
import { PeticionTranasferenciaComponent } from './peticion-tranasferencia/peticion-tranasferencia.component';
import { HeaderComponent } from './header/header.component';
import { SeleccionTransferenciaComponent } from './seleccion-transferencia/seleccion-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    UsuariosComponent,
    TiendaComponent,
    ProductoComponent,
    PeticionTranasferenciaComponent,
    HeaderComponent,
    SeleccionTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
