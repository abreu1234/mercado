import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoAddComponent } from './produto-add/produto-add.component';
import { ProdutoService } from './produto/produto.service';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente/cliente.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { VendaService } from './venda/venda.service';
import { VendaComponent } from './venda/venda.component';
import { VendaFormComponent } from './venda-form/venda-form.component';

const appRoutes: Routes = [
  { path: 'produto', component: ProdutoComponent },
  { path: 'produto/add', component: ProdutoAddComponent },
  { path: 'produto/edit/:id', component: ProdutoAddComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'cliente/add', component: ClienteFormComponent },
  { path: 'cliente/edit/:id', component: ClienteFormComponent },
  { path: 'venda', component: VendaComponent },
  { path: 'venda/add', component: VendaFormComponent },
  { path: 'venda/edit/:id', component: VendaFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutoComponent,
    ProdutoAddComponent,
    ClienteComponent,
    ClienteFormComponent,
    VendaComponent,
    VendaFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule, AppBootstrapModule, FormsModule
  ],
  providers: [
    ProdutoService,
    ClienteService,
    VendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
