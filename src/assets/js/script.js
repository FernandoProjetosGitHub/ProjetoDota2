
/*export class Heroes {
  constructor() {
    this.heroes = [
      {
        "nome": "Rubic",
        "img": "http://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png",
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

}*/



export class Heroes{

  constructor (){
    this.heroes = null;
    this.URL = "https://api.opendota.com/api/heroes";
  }
  
  async function getHeroes() {
    const resp = await fetch(this.URL);
    f (!resp.ok) {
      throw new Error(`Erro na requisição: ${resp.statusText}`);
    }
    if (resp.status === 200) {
      const obj= await resp.json();
      this.heroes = obj;
    }
  }


  allHeroes(){
    return this.heroes;
  }
  
}



