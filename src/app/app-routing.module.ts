import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

//Componentes
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';

const routes: Routes = [{
  path:'api/list', component: ListarProductoComponent
},{
  path:'api/crear-producto',component: CrearProductoComponent
},{
  path:'api/editar-producto/:id', component: CrearProductoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
