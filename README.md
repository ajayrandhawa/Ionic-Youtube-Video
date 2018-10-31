# Ionic Youtube Video Embeded 

In this app show, youtube videos embedded in Ionic 3 Application. Application show two methods (iframes, Object) to implement embded videos. DomSanitizer is also implemented for safe Url and Cross-site Scripting (XSS).

<center><img src="view.gif" alt="app"></center>


## Embed Youtube Video using Iframe

```
<iframe allowscriptaccess="always" [src]="url" width="100%" height="250px" frameborder="0" allowfullscreen=""></iframe>
```

## Embed Youtube Video Without using Iframe

```
CSS
.embed-video {
    width: 100%;
    height: 250px;
  }

HTML
<object class="embed-video" [data]="url"></object>
```

#### Get Safe URL using DomSantizer

```
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
```
