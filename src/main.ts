import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'

import { LoginComponent } from './app/login/login.component';
import { RegistroProdutosComponent } from './app/registro-produtos/registro-produtos.component';
import { RegistroFuncionariosComponent } from './app/registro-funcionarios/registro-funcionarios.component';
import { RegistrosInternosComponent } from './app/registros-internos/registros-internos.component';
import { VitrineComponent } from './app/vitrine/vitrine.component';
import { AppRoutingModule } from './app/router.module';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro-produtos', component: RegistroProdutosComponent },
  { path: 'registro-funcionarios', component: RegistroFuncionariosComponent },
  { path: 'registros-internos', component: RegistrosInternosComponent },
  { path: 'vitrine', component: VitrineComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule)
  ]
});
