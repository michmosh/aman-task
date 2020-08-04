import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatInputModule , MatCardModule , MatDialogModule} from  '@angular/material';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './shared/services/auth.service';
import { DialogComponent } from './components/dialog/dialog.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: '', component: MainComponent , canActivate: [AuthService] },
      {path: 'jokes', component: MainComponent , canActivate: [AuthService] }
    ]),
    FormsModule, 
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
