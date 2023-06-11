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
  
  class Rul extends Product {
    constructor(img, model, brend, cost, color) {
      super(img, model, brend, cost, color);
      this.gCategory = "Avto jihozlar";
      this.Category = "Avto uchun rul";
      this.type = "Rul";
      this.description = "Siz ushbu mahsulotni bizdan rasmiy kafolat bilan eng arzon narxda xarid qilishingiz mumkin. Tovarlarni bo'lib-bo'lib va kreditsiz xarid qilish imkoniyati mavjud. Yetkazib berish xizmati mavjud. O'zbekiston bo'ylab tez yetkazib berish. Biz bilan tez va oson xarid qiling. Biz siz uchun faqat eng yaxshisini tanladik, shuning uchun endi siz do'konlar bo'ylab yugurishingiz va qidirishga ko'p vaqt sarflashingiz shart emas. Sizga kerak bo'lgan hamma narsa bizda!"
    }
  }shu classdan foydalanib 10ta  haqiqiy obyekt yasab ber cost xususiyatiga 7 xonali sonlarni taminla yani uzbek somiga aylantir
  return (
    <div>
      
    </div>
  )
}

export default trash
