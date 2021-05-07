import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminComponentComponent } from './admin.component';
import { SpeciesDictionaryComponent } from './species-dictionary/species-dictionary.component';
import { NewPostComponent } from './posts/new-post.component';
import { AddEditAnimalComponent } from './add-edit-animal/add-edit-animal.component';
import { MailListComponent } from './mails/list/mail-list.component';
import { NewMailComponent } from './mails/new/new-mail.component';

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
            path: "mails/new", component: NewMailComponent
          },
          { 
            path: "mails/list", component: MailListComponent 
          },
          {
            path: "posts/new", component: NewPostComponent,
          },
          {
            path: "animals/new", component: AddEditAnimalComponent
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
