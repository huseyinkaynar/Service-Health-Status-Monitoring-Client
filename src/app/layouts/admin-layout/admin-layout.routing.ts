import { Routes } from '@angular/router';

import { DashboardComponent } from '../../checkservice/dashboard.component';
import { UserProfileComponent } from '../../home-page/user-profile.component';
import { TableListComponent } from '../../service-list/table-list.component';
import { NotificationsComponent } from '../../email/notifications.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'check-service', component: DashboardComponent },
    { path: 'home-page', component: UserProfileComponent },
    { path: 'service-list', component: TableListComponent },
    { path: 'e-mail', component: NotificationsComponent },
];
