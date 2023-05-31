class Beverage {
  constructor(name, price, imgUrl) {
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}

let beverage = [
  new Beverage("Aquarius", 100, "img/top-aquarius.png"),
  new Beverage("Ayataka", 110, "img/top-ayataka.png"),
  new Beverage("Canadadry", 120, "img/top-canadadry.png"),
  new Beverage("Cocacola", 130, "img/top-cocacola.png"),
  new Beverage("Costa", 140, "img/top-costav2.png"),
  new Beverage("Drpepper", 110, "img/top-drpepper.png"),
  new Beverage("Fanta", 120, "img/top-fanta.png"),
  new Beverage("Georgia", 130, "img/top-georgia.png"),
  new Beverage("Hajime", 140, "img/top-hajime.png"),
  new Beverage("Huang", 140, "img/top-huang.png"),
  new Beverage("Ilohas", 170, "img/top-i-lohas.png"),
  new Beverage("Jackdaniel", 140, "img/top-jackdanielcocacola.png"),
  new Beverage("Sukoyakacha", 150, "img/top-karadasukoyakacha.png"),
  new Beverage("Kochakaden", 160, "img/top-kochakaden.png"),
  new Beverage("Lemondo", 180, "img/top-lemondo.png"),
  new Beverage("Nomels", 160, "img/top-nomels.png"),
  new Beverage("Qoo", 180, "img/top-qoo.png"),
  new Beverage("Realgold", 170, "img/top-realgold.png"),
  new Beverage("Saryusaisai", 150, "img/top-saryusaisai.png"),
  new Beverage("Sokenbicha", 120, "img/top-sokenbicha.png"),
  new Beverage("Sprite", 100, "img/top-sprite.png"),
  new Beverage("Yakan", 170, "img/top-yakanv2.png"),
  new Beverage("Yogurstand", 130, "img/top-yogurstand.png"),
  new Beverage("Lemondo", 160, "img/top-yowanai_lemondo.png"),
];

class Controller {
  static slidejump(input) {
    const leftSide = document.querySelector(".left-side");
    leftSide.innerHTML = `
    <img src="${beverage[input - 1].imgUrl}"/>
    `;

    const description = document.querySelector(".description");
    description.innerHTML = `
            <p class="name">Name:&nbsp${beverage[input - 1].name}</p>
            <p class="price">Price:&nbsp￥${beverage[input - 1].price}</p>
    `;
  }
}
class View {
  static createButton() {
    let buttons = document.querySelector(".buttons");
    for (let i = 1; i < beverage.length + 1; i++) {
      let button = document.createElement("button");
      button.setAttribute("type", "button");
      button.innerHTML = `${i}`;
      buttons.append(button);
    }

    for (let i = 1; i <= beverage.length; i++) {
      document
        .querySelectorAll("button")
        [i - 1].addEventListener("click", function () {
          Controller.slidejump(i);
        });
    }
  }

  static createInfoContainer(obj) {
    const description = document.querySelector(".description");
    description.innerHTML = `
            <p class="name">Name:&nbsp${obj.name}</p>
            <p class="price">Price:&nbsp￥${obj.price}</p>
    `;
  }

  static createSlide(obj) {
    const leftSide = document.querySelector(".left-side");
    leftSide.innerHTML = `
    <img src="${obj.imgUrl}"/>
    `;
  }
}

View.createButton();
View.createInfoContainer(beverage[0]);
View.createSlide(beverage[0]);
