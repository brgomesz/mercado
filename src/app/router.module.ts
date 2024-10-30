import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroProdutosComponent } from './registro-produtos/registro-produtos.component';
import { RegistroFuncionariosComponent } from './registro-funcionarios/registro-funcionarios.component';
import { RegistrosInternosComponent } from './registros-internos/registros-internos.component';
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro-produtos', component: RegistroProdutosComponent },
  { path: 'registro-funcionarios', component: RegistroFuncionariosComponent },
  { path: 'registros-internos', component: RegistrosInternosComponent },
  { path: 'vitrine', component: VitrineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
