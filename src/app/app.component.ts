import { Component } from '@angular/core';
import { BigSquare } from './classes/big-square';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socialmedia-dashboard';

  bigSquare:BigSquare[]=[
    {
      icon:"assets/images/icon-facebook.svg",
      name:"@nathanf",
      amount:1987,
      type:"FOLLOWERS",
      variation:12,
      color: "var(--Facebook)",
      indicator:"var(--Lime-Green)",
      symbol:"assets/images/icon-up.svg"
    },
    {
      icon:"assets/images/icon-twitter.svg",
      name:"@nathanf",
      amount:1044,
      type:"FOLLOWERS",
      variation:99,
      color: "var(--Twitter)",
      indicator:"var(--Lime-Green)",
      symbol:"assets/images/icon-up.svg"
    },
    {
      icon:"assets/images/icon-instagram.svg",
      name:"@realnathanf",
      amount:11000,
      type:"FOLLOWERS",
      variation:1099,
      color: "var(--Instagram)",
      indicator:"var(--Lime-Green)",
      symbol:"assets/images/icon-up.svg"
    },
    {
      icon:"assets/images/icon-youtube.svg",
      name:"Nathan F.",
      amount:8239,
      type:"SUBSCRIBERS",
      variation:144,
      color: "var(--YouTube)",
      indicator:"var(--Bright-Red)",
      symbol:"assets/images/icon-down.svg"

    }
  ]
}
