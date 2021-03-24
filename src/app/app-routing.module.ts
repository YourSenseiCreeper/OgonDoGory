import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: AppComponent,
        children: [
          {
            path: "login",
            component: LoginComponent,
          },
        ],
      },
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
export class AppRoutingModule { }
