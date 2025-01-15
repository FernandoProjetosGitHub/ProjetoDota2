
export class Heroes{

  constructor (){
    this.heroes = [
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

  this.herois = function(){
    const xhr = new XMLHttpRequest();
    let resultado;
    function buscarCep(valor) {
        xhr.open('GET', `https://api.opendota.com/api/heroes`);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.status == 200) {
              if (xhr.responseText != "") {
                  return JSON.parse(xhr.responseText)
                };
            }
        }
      }  
      
    }
  }

  allHeroes(){
    return this.heroes;
  }
  
}



