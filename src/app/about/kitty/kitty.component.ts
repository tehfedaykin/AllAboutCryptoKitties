import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitty',
  templateUrl: './kitty.component.html',
  styleUrls: ['./kitty.component.less']
})
export class KittyComponent implements OnInit {
  tables = [
    {
      name : 'Body Features',
      columns: [
        {
          name: 'Body Type',
          rows: [
            'munchkin',
            'himalayan',
            'maincoon',
            'cymric',
            'sphynx',
            'laperm',
            'ragamuffin',
            'persian',
            'chartreux'
          ]
        },
        {
          name: 'Pattern Type',
          rows: [
            'amur',
            'tigerpunk',
            'spock',
            'calicool',
            'luckystripe',
            'jaguar',
            'henna',
            'hotrod',
            'totesbasic'

          ]
        },
        {
          name: 'Mouth Type',
          rows: [
            'gerbil',
            'whixtensions',
            'soserioues',
            'dali',
            'saycheese',
            'beard',
            'tongue',
            'happygokitty',
            'pouty',
          ]
        },
        {
          name: 'Eye Type',
          rows: [
            'googly',
            'raisedbrow',
            'otaku',
            'wingtips',
            'simple',
            'fabulous',
            'crazy',
            'thisccbrowz'
          ]
        }
      ]
    }]

  colors = [
    {
      name: 'coral',
      hex: '45f0f4'
    },
    {
      name: 'babyblue',
      hex: '4eb4f9'
    },
    {
      name: 'topaz',
      hex: '0ba09c'
    },
    {
      name: 'mintgreen',
      hex: '43edac'
    },
    {
      name: 'limegreen',
      hex: 'aef72f'
    },
    {
      name: 'babypuke',
      hex: 'bcba5e'
    },
    {
      name: 'chestnut',
      hex: 'a56429'
    },
    {
      name: 'strawberry',
      hex: 'ef4b62'
    },
    {
      name: 'pumpkin',
      hex: 'ffa039'
    },
    {
      name: 'gold',
      hex: 'fcdf35'
    },
    {
      name: 'sizzurp',
      hex: '7c40ff'
    },
    {
      name: 'bubblegum',
      hex: 'ef52d1'
    },
    {
      name: 'violet',
      hex: 'ba8aff'
    },
    {
      name: 'thundergrey',
      hex: '828282'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
