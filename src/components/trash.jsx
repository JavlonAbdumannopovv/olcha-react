import React from 'react'

function trash() {
  class Product {
    constructor(img, model, brend, cost, color) {
      this.id = `${Math.random() * 10}_${Math.random() * 100}_${Math.random()}_${
        Math.random() * 1000
      }`;
      this.name = `${model}_${brend}_${color}`;
      this.img = img;
      this.model = model;
      this.brend = brend;
      this.brend = brend;
      this.cost = cost;
      this.color = color;
      this.count = 0;
    }
  }
  
  class Smartfon extends Product {
    constructor(img, model, brend, cost, color, ram, memory, system) {
      super(img, model, brend, cost, color);
      this.gCategory = "Smartfon, telefon, gadjet, aksessuarlar";
      this.Category = "Smartfonlar";
      this.type = "Smartfon";
      this.ram = ram;
      this.memory = memory;
      this.operationSystem = system;
    }
  } shu classdan foydalanib 10ta  obyektyasab ber cost xususiyatiga 7 xonali sonlarni taminla yani uzbek somiga aylantir
  return (
    <div>
      
    </div>
  )
}

export default trash
