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

// import { HeaderComponent } from './header/header.component';

import { HomepageComponent } from './user/homepage/homepage.component';
import { SideBarComponent } from './user/side-bar/side-bar.component';
import { UserTopBarComponent } from './user/user-top-bar/user-top-bar.component';
import { AdminComponent } from './../app/admin-side/admin/admin.component';
import { OrderComponent } from './admin-side/order/order.component';
import { CustomersComponent } from './admin-side/customers/customers.component';
import { AdminTopbarComponent } from './admin-side/admin-topbar/admin-topbar.component';
import { AdminSidebarComponent } from './admin-side/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-side/admin-footer/admin-footer.component';
import { AddProductComponent } from './admin-side/add-product/add-product.component';
import { UserCartComponent } from './user/user-cart/user-cart.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ProductOfAdminComponent } from './admin-side/product-of-admin/product-of-admin.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import {FormsModule} from '@angular/forms';
import { ApprovedProductsComponent } from './admin-side/approved-products/approved-products.component';
import { UserprofileComponent } from './userprofile/userprofile.component';







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

//     HeaderComponent

    HomepageComponent,
    AdminTopbarComponent,
     SideBarComponent,
    UserTopBarComponent,
     AdminComponent,
     OrderComponent,
     CustomersComponent,
     AdminSidebarComponent,
     AdminFooterComponent,
     AddProductComponent,
     UserCartComponent,
     UserOrderComponent,
     AdminProductComponent,
     ProductOfAdminComponent,
     AdminprofileComponent,
     ApprovedProductsComponent,
     UserprofileComponent,

    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
