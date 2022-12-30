import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { QualificationComponent } from './componentes/qualification/qualification.component';
import { ServicesComponent } from './componentes/services/services.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ProjectComponent } from './componentes/project/project.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CargarScripsService } from './cargar-scrips.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    QualificationComponent,
    ServicesComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [
    CargarScripsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
