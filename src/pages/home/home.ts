import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url;

  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer) {
    this.getSafeUrl("https://www.youtube.com/embed/S46MFd-JdK4");
  }

  getSafeUrl(url) {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);		
	}
}
