import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomepageComponent } from './../../src/app/user/homepage/homepage.component';
import { AdminComponent } from './../app/admin-side/admin/admin.component';
import { AddProductComponent } from './../app/admin-side/add-product/add-product.component'
import { CustomersComponent } from './admin-side/customers/customers.component';
import { OrderComponent } from './admin-side/order/order.component';
import { UserCartComponent } from './../app/user/user-cart/user-cart.component';
import { UserOrderComponent } from './../app/user/user-order/user-order.component';
import { ProductsComponent } from './../app/admin-side/products/products.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ProductListComponent, pathMatch: 'full'},
  { path: 'cart', component: CartComponent, pathMatch: 'full'},
  { path: 'all-products', component: AllProductsComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  { path: 'product-details', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'admin', component: AdminComponent, pathMatch: 'full'},
  { path: 'userhomepage', component: HomepageComponent, pathMatch: 'full'},
  { path: 'addproduct', component: AddProductComponent, pathMatch: 'full'},
  { path: 'customers', component: CustomersComponent, pathMatch: 'full'},
  { path: 'order', component: OrderComponent, pathMatch: 'full'},
  { path: 'cart', component: CartComponent, pathMatch: 'full'},
  { path: 'user-cart', component: UserCartComponent, pathMatch: 'full'},
  { path: 'user-order', component: UserOrderComponent, pathMatch: 'full'},
  { path: 'products', component: ProductsComponent, pathMatch: 'full'},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
