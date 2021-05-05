import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminComponentComponent } from './admin.component';
import { NewMailComponent } from './mails/new-mail.component';
import { SpeciesDictionaryComponent } from './species-dictionary/species-dictionary.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "", component: AdminComponentComponent,
        children: [
          {
            path: "dashboard", component: AdminDashboardComponent,
          },
          {
            path: "mails",
            children: [
              {
                path: "new", component: NewMailComponent,
              },
            ]
          },
          {
            path: 'species', component: SpeciesDictionaryComponent
          }
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
