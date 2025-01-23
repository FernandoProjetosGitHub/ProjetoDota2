
export class Heroes {

  constructor() {
    this.heroes = [
      {
        "nome": "Rubic",
        "img": "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png",
        // "primary_attr": "agi" 
      },
      {
        "nome": "tiny",
        "img": "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png",
        // "primary_attr": "str",
      },
      {
        "nome": "Rubic",
        "img": "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png",
        // "primary_attr": "int"
      },
      {
        "nome": "tiny",
        "img": "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png",
        // "primary_attr": "all" // <div class="heroesAttribute">${heroiAtual.img}</div>
      },
      {
        "nome": "Rubic",
        "img": "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png"
      },
      {
        "nome": "tiny",
        "img": "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png"
      }
    ];
  }

  allHeroes() {
    return this.heroes;
  }

}



