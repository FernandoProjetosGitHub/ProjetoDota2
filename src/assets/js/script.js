
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

    this.text = [
      {
        "lang": "pt",
        "text-menu-game": "Jogo",
        "text-menu-heroes": "Heróis",
        "text-menu-news": "Novidades",
        "text-menu-sports": "E-sport",
        "text-selectLanguage": "Selecione o idioma",
      },
      {
        "lang": "eng",
        "text-menu-game": "Game",
        "text-menu-heroes": "Heroes",
        "text-menu-news": "News",
        "text-menu-sports": "E-sport",
        "text-selectLanguage": "Select the language",
      },
      {
        "lang": "fr",
        "text-menu-game": "Jeu",
        "text-menu-heroes": "Héros et héroïnes",
        "text-menu-news": "Actualités",
        "text-menu-sports": "E-sport",
        "text-selectLanguage": "Sélectionnez la langue",
      },
      {
        "lang": "zh",
        "text-menu-game": "游戏",
        "text-menu-heroes": "英雄",
        "text-menu-news": "新闻",
        "text-menu-sports": "电子竞技",
        "text-selectLanguage": "选择语言",
      },
      {
        "lang": "hi",
        "text-menu-game": "खेल",
        "text-menu-heroes": "नायकों",
        "text-menu-news": "समाचार",
        "text-menu-sports": "खेल",
        "text-selectLanguage": "भाषा चुनें",
      }
    ];
 
  }

  allHeroes() {
    return this.heroes;
  }

<<<<<<< HEAD
  allText(){
    return this.text;
  }
  
=======
>>>>>>> origin/html
}



