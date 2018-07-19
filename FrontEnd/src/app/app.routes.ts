import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {UsuarioComponent} from "./usuario/usuario.component";
import {ModuleWithProviders} from "@angular/core";

export const routes:Route=[
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'usuario', component:UsuarioComponent},
];

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
