import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorkComponent } from './work/work.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";

export function getAuthServiceConfig(){
  let config = new AuthServiceConfig([{
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("<GoogleClientIdJHere>")
  }]);
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }