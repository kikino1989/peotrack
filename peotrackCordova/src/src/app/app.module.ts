import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ClientService } from './services/client.service';
import { OrderService } from './services/order.service';
import { StorageService } from './services/storage.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { routes } from "./routes";
import { PaginationComponent } from './pagination/pagination.component';
import { ListBoxComponent } from './list-box/list-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ClientDetailsComponent,
    PendingOrdersComponent,
    OrderDetailsComponent,
    PaginationComponent,
    ListBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClientService,
    OrderService,
    StorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
