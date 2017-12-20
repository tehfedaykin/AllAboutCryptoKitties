import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  navItems = [
    {
      title: 'wut r dey?',
      path: '/about/kitties'
    },
    {
      title: 'what do I need?',
      path: '/about/requirements'
    },
    {
      title: 'how do I get mah kitteh?',
      path: '/about/purchasing'
    }
  ];
  navKitty = 'navkitty1.svg';
  navKitties = [
    'navkitty1.svg',
    'navkitty2.svg',
    'navkitty3.svg',
    'navkitty4.svg'
  ];

  constructor() { }

  ngOnInit() {
    var randomInt = Math.floor((Math.random() * (this.navKitties.length - 0) + 0));
    this.navKitty = this.navKitties[randomInt];
  }

}
