import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { SideBarComponent } from './user/side-bar/side-bar.component';
import { UserTopBarComponent } from './user/user-top-bar/user-top-bar.component';
import { AdminComponent } from './../app/admin-side/admin/admin.component';
import { OrderComponent } from './admin-side/order/order.component';
import { CustomersComponent } from './admin-side/customers/customers.component';
import { AdminTopbarComponent } from './admin-side/admin-topbar/admin-topbar.component';
import { AdminSidebarComponent } from './admin-side/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-side/admin-footer/admin-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    FooterComponent,
    CartComponent,
    AllProductsComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    HomepageComponent,
     SideBarComponent,
    UserTopBarComponent,
     AdminComponent,
     OrderComponent,
     CustomersComponent,
     AdminTopbarComponent,
     AdminSidebarComponent,
     AdminFooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
