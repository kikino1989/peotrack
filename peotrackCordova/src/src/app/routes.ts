import { MainComponent } from './main/main.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

export const routes = [
    {
      path: 'main',
      component: MainComponent
    },
    {
      path: 'client-details/:id',
      component: ClientDetailsComponent
    },
    {
      path: 'pending-orders',
      component: PendingOrdersComponent
    },
    {
      path: 'new-order/:clientId',
      component: OrderDetailsComponent
    },
    {
      path: 'order-details/:orderId/:src',
      component: OrderDetailsComponent
    },
    {
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
    }
];