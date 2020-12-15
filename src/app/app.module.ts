import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { OneColumnComponent } from './one-column/one-column.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TwoColumnComponent } from './two-column/two-column.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { ShopComponent } from './content/shop/shop.component';
import { ProductListComponent } from './content/shop/product-list/product-list.component';
import { ProductViewComponent } from './content/shop/product-view/product-view.component';
import { ProductItemComponent } from './content/shop/product-list/product-item/product-item.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotfoundComponent } from './content/notfound/notfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    OneColumnComponent,
    HeaderComponent,
    SidebarComponent,
    TwoColumnComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ShopComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductItemComponent,
    NotFoundComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
