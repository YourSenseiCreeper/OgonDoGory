import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdoptionComponent } from './adoption/adoption.component';
import { AdoptionDetailsComponent } from './adoption-details/adoption-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "", component: AppComponent,
        children: [
          {
            path: "", component: HomepageComponent
          },
          {
            path: "doadopcji", component: AdoptionComponent,
            children: [
              {
                path: "{id}", component: AdoptionDetailsComponent
              }
            ]
          }
        ]
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