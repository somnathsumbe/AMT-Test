import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserformComponent } from './userform/userform.component';
import { UserService } from './service/user.service';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';
import { EmpcountComponent } from './employee/empcount/empcount.component';
import { EmpComponent } from './employee/emp/emp.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: UserformComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'practice', component: PracticeComponent },
  { path: '**', component: NotFoundComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserformComponent,
    PracticeComponent,
    EmpcountComponent,
    EmpComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
