import { PostDetailsComponent } from './post-details/post-details.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdoptionComponent } from './adoption/adoption.component';
import { AdoptionDetailsComponent } from './adoption-details/adoption-details.component';
import { AlarmTelephoneComponent } from './alarm-telephone/alarm-telephone.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { ContactComponent } from './contact/contact.component';

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
            path: "doadopcji/wszystkie", component: AdoptionComponent,
          },
          {
            path: "doadopcji/psy", component: AdoptionComponent,
          },
          {
            path: "doadopcji/koty", component: AdoptionComponent,
          },
          {
            path: "doadopcji/:id", component: AdoptionDetailsComponent,
          },
          {
            path: "blog/:id", component: PostDetailsComponent,
          },
          {
            path: "telefon", component: AlarmTelephoneComponent
          },
          {
            path: "jakpomagac", component: HowToHelpComponent
          },
          {
            path: "kontakt", component: ContactComponent
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
