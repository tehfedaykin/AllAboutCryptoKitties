import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'All About Cryptokitties';
  navItems = [
    {
      title: 'CryptoKitty 101',
      path: '/about'
    },
    {
      title: 'Ethereum 101',
      path: '/ethereum101'
    },
    {
      title: 'Resources',
      path: '/resources'
    }
  ];
  navKitty = 'navkitty1.svg';
  navKitties = [
    'navkitty1.svg',
    'navkitty2.svg',
    'navkitty3.svg',
    'navkitty4.svg'
  ];

  ngOnInit() {
    var randomInt = Math.floor((Math.random() * (this.navKitties.length - 0) + 0));
    this.navKitty = this.navKitties[randomInt];
  }

}
