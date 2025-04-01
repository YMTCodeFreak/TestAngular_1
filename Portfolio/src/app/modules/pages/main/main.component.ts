import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { MouseFollowerComponent } from '../../core/mouse-follower/mouse-follower.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MouseFollowerComponent, HeroComponent, AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
