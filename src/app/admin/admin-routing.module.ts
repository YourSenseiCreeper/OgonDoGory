import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminComponentComponent } from './admin.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "", component: AdminComponentComponent,
        children: [
          {
            path: "dashboard", component: AdminDashboardComponent,
          },
        ]
      },
      {
        path: "login", component: LoginComponent
      }
      // {
      //   path: "starter",
      //   component: FullComponent,
      //   loadChildren: () =>
      //     import("./starter/starter.module").then((m) => m.StarterModule),
      // },
    ]),
  ],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
