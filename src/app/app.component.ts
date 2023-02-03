import { Component } from '@angular/core';
import { BigSquare } from './classes/big-square';
import { SmallSquare } from './classes/small-square';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socialmedia-dashboard';
  totalFollowers=23004

  facebookIcon:string="assets/images/icon-facebook.svg";
  twitterIcon:string="assets/images/icon-twitter.svg";
  instagramIcon:string="assets/images/icon-instagram.svg";
  youtubeIcon:string="assets/images/icon-youtube.svg";
  iconUp:string="assets/images/icon-up.svg"
  iconDown:string="assets/images/icon-down.svg"

  dark:boolean=false;

  darkModeActive(){
    this.dark=!this.dark
    if(this.dark==true){
      this.darkMode()
    }
    else{
      this.lightMode()
    }
  }



  darkMode(){
    var topBody=document.getElementById("help-square")
    topBody?.classList.add("dark-top-body")

    var Body=document.getElementById("body")
    Body?.classList.add("dark-body")

    var bigSquare=document.getElementsByClassName("big-square")
    for(var i=0; i<bigSquare.length; i++){
      bigSquare[i].classList.remove("light-big-square")
      bigSquare[i].classList.add("dark-big-square")
    }

    var titles=document.getElementsByClassName("text-1")
    for(var i=0; i<titles.length; i++){
      titles[i].classList.add("dark-text-1")
    }

    var subtitles=document.getElementsByClassName("text-2")
    for(var i=0; i<subtitles.length; i++){
      subtitles[i].classList.add("dark-text-2")
    }
    var smallSquare=document.getElementsByClassName("small-square")
    for(var i=0; i<smallSquare.length; i++){
      smallSquare[i].classList.add("dark-small-square")
      smallSquare[i].classList.remove("light-small-square")
    }

  }

  lightMode(){
    var topBody=document.getElementById("help-square")
    topBody?.classList.remove("dark-top-body")

    var Body=document.getElementById("body")
    Body?.classList.remove("dark-body")

    var bigSquare=document.getElementsByClassName("big-square")
    for(var i=0; i<bigSquare.length; i++){
      bigSquare[i].classList.remove("dark-big-square")
      bigSquare[i].classList.add("light-big-square")
    }

    //efecto hover
    var bigSquare=document.getElementsByClassName("big-square")
    for(var i=0; i<bigSquare.length; i++){
      bigSquare[i].classList.add("light-big-square:hover")
    }

    var titles=document.getElementsByClassName("text-1")
    for(var i=0; i<titles.length; i++){
      titles[i].classList.remove("dark-text-1")
    }

    var subtitles=document.getElementsByClassName("text-2")
    for(var i=0; i<subtitles.length; i++){
      subtitles[i].classList.remove("dark-text-2")
    }

    var smallSquare=document.getElementsByClassName("small-square")
    for(var i=0; i<smallSquare.length; i++){
      smallSquare[i].classList.remove("dark-small-square")
      smallSquare[i].classList.add("light-small-square")
    }

    //efecto hover

  }



  bigSquare:BigSquare[]=[
    {
      icon:this.facebookIcon,
      name:"@nathanf",
      amount:1987,
      type:"FOLLOWERS",
      variation:12,
      color: "var(--Facebook)",
      indicator:"var(--Lime-Green)",
      symbol:this.iconUp
    },
    {
      icon:this.twitterIcon,
      name:"@nathanf",
      amount:1044,
      type:"FOLLOWERS",
      variation:99,
      color: "var(--Twitter)",
      indicator:"var(--Lime-Green)",
      symbol:this.iconUp
    },
    {
      icon:this.instagramIcon,
      name:"@realnathanf",
      amount:11000,
      type:"FOLLOWERS",
      variation:1099,
      color: "var(--Instagram)",
      indicator:"var(--Lime-Green)",
      symbol:this.iconUp
    },
    {
      icon:this.youtubeIcon,
      name:"Nathan F.",
      amount:8239,
      type:"SUBSCRIBERS",
      variation:144,
      color: "var(--YouTube)",
      indicator:"var(--Bright-Red)",
      symbol:this.iconDown

    }
  ]

  smallSquare:SmallSquare[]=[
    {
      details:"Page Views",
      icon:this.facebookIcon,
      amount:87,
      variation:3,
      symbol:this.iconUp,
      indicator:"var(--Lime-Green)",
    },
    {
      details:"Likes",
      icon:this.facebookIcon,
      amount:52,
      variation:2,
      symbol:this.iconDown,
      indicator:"var(--Bright-Red)",
    },
    {
      details:"Likes",
      icon:this.instagramIcon,
      amount:5462,
      variation:2257,
      symbol:this.iconUp,
      indicator:"var(--Lime-Green)",
    },
    {
      details:"Profile Views",
      icon:this.instagramIcon,
      amount:52000,
      variation:1375,
      symbol:this.iconUp,
      indicator:"var(--Lime-Green)"
    },
    {
      details:"Retweets",
      icon:this.twitterIcon,
      amount:117,
      variation:303,
      symbol:this.iconUp,
      indicator:"var(--Lime-Green)"
    },
    {
      details:"Likes",
      icon:this.twitterIcon,
      amount:507,
      variation:553,
      symbol:this.iconUp,
      indicator:"var(--Lime-Green)",
    },
    {
      details:"Likes",
      icon:this.youtubeIcon,
      amount:107,
      variation:19,
      symbol:this.iconDown,
      indicator:"var(--Bright-Red)"
    },
    {
      details:"Total Views",
      icon:this.youtubeIcon,
      amount:1407,
      variation:12,
      symbol:this.iconDown,
      indicator:"var(--Bright-Red)",
    }
  ]
}
