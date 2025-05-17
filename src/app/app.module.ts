import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InformationContainerComponent } from './components/information-container/information-container.component';
import { FlagsComponent } from './components/flags/flags.component';
import { HeroComponent } from './components/hero-header/hero/hero.component';
import { AboutContainerComponent } from './components/about-container/about-container.component';
import { SubscribeContainerComponent } from './components/subscribe-container/subscribe-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    NavbarComponent,
    FooterComponent,
    InformationContainerComponent,
    FlagsComponent,
    HeroComponent,
    AboutContainerComponent,
    SubscribeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
