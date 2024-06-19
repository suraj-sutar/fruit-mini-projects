import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Pages/admin/cart/cart.component';
import { CategoriesComponent } from './Pages/admin/categories/categories.component';
import { LayoutComponent } from './Pages/admin/layout/layout.component';
import { LoginComponent } from './Pages/admin/login/login.component';
import { OrderComponent } from './Pages/admin/order/order.component';
import { ProductsComponent } from './Pages/admin/products/products.component';
import { CategoryProductsComponent } from './Pages/website/category-products/category-products.component';
import { LandingComponent } from './Pages/website/landing/landing.component';
import { CustomerCartComponent } from './Pages/website/customer-cart/customer-cart.component';
import { CheckoutComponent } from './Pages/website/checkout/checkout.component';
import { CustomerOrdersComponent } from './Pages/website/customer-orders/customer-orders.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoriesComponent,
    LayoutComponent,
    LoginComponent,
    OrderComponent,
    ProductsComponent,
    CategoryProductsComponent,
    LandingComponent,
    CustomerCartComponent,
    CheckoutComponent,
    CustomerOrdersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
