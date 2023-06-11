const URL = "https://olcha.uz/image/";
const CDN_URL = "https://cdn.olcha.uz/image/"
class Action {
  contructor(title, icon) {
    this.id = `${title}_${Math.random() * 10}_${Math.round(
      Math.random() * 100
    )}_${Math.floor(Math.random() * 1000)}`;
    this.title = title;
    this.icon = icon;
    this.count = 0;
  }
}
class GlobalCategory {
  contructor(
    title,
    fImg,
    lImg,
    heroImg = ``,
    boxImg = ``,
    sideImg = ``,
    topImg = ``,
    topImg1 = ``
  ) {
    const data = title;
    const data2 = data.split(`,`).join(``);
    this.slug = data2.toLowerCase().split(` `).join(`-`);
    this.title = title;
    this.fImg = fImg;
    this.lImg = lImg;
    this.heroImg = heroImg;
    this.boxImg = boxImg;
    this.sideImg = sideImg;
    this.topImg = topImg;
    this.topImg1 = topImg1;
  }
}

class Category {
  constructor(globalTitle, title, img) {
    this.globalTitle = globalTitle;
    this.title = title;
    this.img = img;
  }
}

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
    this.gCategory = `Smartfon, telefon, gadjet, aksessuarlar`;
    this.category = `Smartfonlar`;
    this.type = `Smartfon`;
    this.ram = ram;
    this.memory = memory;
    this.operationSystem = system;
  }
}

class Noutbook extends Product {
  constructor(img, model, brend, cost, color, ram, memory, inch) {
    super(img, model, brend, cost, color);
    this.gCategory = `Noutbuk, printer, kompyuterlar`;
    this.category = `Noutbuklar`;
    this.type = `Noutbuk`;
    this.ram = ram;
    this.memory = memory;
    this.inch = inch;
  }
}
  
class Camera extends Product {
  constructor(img, model, brend, cost, color, power, resolution) {
    super(img, model, brend, cost, color);
    this.gCategory = `Televizor, foto-video va audio`;
    this.category = `Videotexnika`;
    this.type = `Camera`;
    this.power = power;
    this.resolution = resolution;
  }
}

class Microphone extends Product {
  constructor(img, model, brend, cost, color) {
    super(img, model, brend, cost, color);
    this.gCategory = `Televizor, foto-video va audio`;
    this.category = `Audiotexnika`;
    this.type = `Microphone`;
  }
}

class Tv extends Product {
  constructor(img, model, brend, cost, color, inch) {
    super(img, model, brend, cost, color);
    this.gCategory = `Televizor, foto-video va audio`;
    this.category = `Televizorlar`;
    this.type = `Televizor`;
    this.inch = inch;
  }
}

class Konditsioner extends Product {
  constructor(img, model, brend, cost, color, coldArea) {
    super(img, model, brend, cost, color);
    this.gCategory = `Maishiy texnika`;
    this.category = `Iqlim ta'minlovchi qurilmalar`;
    this.type = `Konditsioner`;
    this.coldArea = coldArea;
  }
}

class WashingMachine extends Product {
  constructor(img, model, brend, cost, color, capacity, noiseLevel) {
    super(img, model, brend, cost, color);
    this.gCategory = `Maishiy texnika`;
    this.category = `Iqlim ta'minlovchi qurilmalar`;
    this.type = `Konditsioner`;
    this.capacity = capacity;
    this.noiseLevel = noiseLevel;
  }
}

class Microvawe extends Product {
  constructor(img, model, brend, cost, color, volume, diametr) {
    super(img, model, brend, cost, color);
    this.gCategory = `Maishiy texnika`;
    this.category = `Iqlim ta'minlovchi qurilmalar`;
    this.type = `Konditsioner`;
    this.volume = volume;
    this.diametr = diametr;
  }
}

class Fridge extends Product {
  constructor(img, model, brend, cost, color, volume, weight) {
    super(img, model, brend, cost, color);
    this.gCategory = `Maishiy texnika`;
    this.category = `Yirik oshxona texnikasi`;
    this.type = `Muzlatgich`;
    this.volume = volume;
    this.weight = weight;
  }
}

class Kettle extends Product {
  constructor(img, model, brend, cost, color, volume, power) {
    super(img, model, brend, cost, color);
    this.gCategory = `Maishiy texnika`;
    this.category = `Mayda oshxona texnikasi`;
    this.type = `Choynak`;
    this.volume = volume;
    this.power = power;
  }
}

class FutbolForm extends Product {
  constructor(img, model, brend, cost, color, material, size) {
    super(img, model, brend, cost, color);
    this.gCategory = `Sport anjomlari`;
    this.category = `Futbol anjomlari`;
    this.type = `Futbol Formasi`;
    this.material = material;
    this.size = size;
  }
}

class Equipment extends Product {
  constructor(img, model, brend, cost, color, dvigatel, size) {
    super(img, model, brend, cost, color);
    this.gCategory = `Sport anjomlari`;
    this.category = `Sport uskunalari`;
    this.type = `Yugurish yo'lakchasi`;
    this.dvigatel = dvigatel;
    this.size = size;
  }
}

class Atir extends Product {
  constructor(img, model, brend, cost, color,) {
    super(img, model, brend, cost, color);
    this.gCategory = `Go'zallik va salomatlik`;
    this.category = `Paryufmeriya`;
    this.type = `Atir`;
  }
}

class Loson extends Product {
  constructor(img, model, brend, cost, color,) {
    super(img, model, brend, cost, color);
    this.gCategory = `Go'zallik va salomatlik`;
    this.category = `Teri parvarishi`;
    this.type = `Loson`;
  }
}

class Trimmer extends Product {
  constructor(img, model, brend, cost, color, power, time) {
    super(img, model, brend, cost, color);
    this.gCategory = `Go'zallik va salomatlik`;
    this.category = `Go'zallik texnikasi`;
    this.type = `Trimmer`;
    this.batteryPower = power;
    this.batteryTime = time;
  }
}

class Rul extends Product {
  constructor(img, model, brend, cost, color) {
    super(img, model, brend, cost, color);
    this.gCategory = `Avto jihozlar`;
    this.category = `Avto uchun rul`;
    this.type = `Rul`;
    this.description = `Siz ushbu mahsulotni bizdan rasmiy kafolat bilan eng arzon narxda xarid qilishingiz mumkin. Tovarlarni bo'lib-bo'lib va kreditsiz xarid qilish imkoniyati mavjud. Yetkazib berish xizmati mavjud. O'zbekiston bo'ylab tez yetkazib berish. Biz bilan tez va oson xarid qiling. Biz siz uchun faqat eng yaxshisini tanladik, shuning uchun endi siz do'konlar bo'ylab yugurishingiz va qidirishga ko'p vaqt sarflashingiz shart emas. Sizga kerak bo'lgan hamma narsa bizda!`
  }
}

class Tire extends Product {
  constructor(img, model, brend, cost, color, radius, seasonality) {
    super(img, model, brend, cost, color);
    this.gCategory = `Avto jihozlar`;
    this.category = `Shinalar`;
    this.type = `Shina`;
   this.radius = radius;
   this.seasonality = seasonality;
  }
}

class Accumulator extends Product {
  constructor(img, model, brend, cost, color, volume, weight, voltage) {
    super(img, model, brend, cost, color);
    this.gCategory = `Avto jihozlar`;
    this.category = `Akkumulyatorlar`;
    this.type = `Akkumulyator`;
   this.volume = volume;
   this.weight = weight;
   this.electricalVoltage = voltage;
  }
}

class Drell extends Product {
  constructor(img, model, brend, cost, color, speedNumber, tension, diametr) {
    super(img, model, brend, cost, color);
    this.gCategory = `Barchasi ta'mirlash va qurilish uchun`;
    this.category = `Drellar`;
    this.type = `Drell`;
   this.speedNumber = speedNumber;
   this.tension = tension;
   this.diametr = diametr;
  }
}

class Perforator extends Product {
  constructor(img, model, brend, cost, color, speedNumber, tension, diametr) {
    super(img, model, brend, cost, color);
    this.gCategory = `Barchasi ta'mirlash va qurilish uchun`;
    this.category = `Perforatorlar`;
    this.type = `Perforator`;
   this.speedNumber = speedNumber;
   this.tension = tension;
   this.diametr = diametr;
  }
}

class Clothes extends Product {
  constructor(img, model, brend, cost, color, size, type, category) {
    super(img, model, brend, cost, color);
    this.gCategory = `Kiyim va poyabzallar`;
    this.category = category;
    this.type = type;
   this.size = size;
  }
}

class Shoes extends Product {
  constructor(img, model, brend, cost, color, size, type, category) {
    super(img, model, brend, cost, color);
    this.gCategory = `Kiyim va poyabzallar`;
    this.category = category;
    this.type = type;
   this.size = size;
  }
}

class Book {
  constructor(img, author, name, page, cost, year, category) {
    this.img = img;
    this.author = author;
    this.name = name;
    this.page = page;
    this.cost = cost;
    this.year = year;
    this.gCategory = `Diniy adabiyotlar`;
    this.category = category;
    this.type = `Kitob`;
  }
}

class Monitor extends Product {
  constructor(img, model, brend, cost, color, size, resolution) {
    super(img, model, brend, cost, color);
    this.gCategory = `Geymerlar uchun`;
    this.category = `Geymerlar uchun monitorlar`;
    this.size = size;
    this.resolution = resolution;
  }
}

class Earphone extends Product {
  constructor(img, model, brend, cost, color, chastota, battery) {
    super(img, model, brend, cost, color);
    this.gCategory = `Geymerlar uchun`;
    this.category = `Geymerlar uchun garnituralar`;
    this.chastota = chastota;
    this.battery = battery;
  }
}

const olcha = {
  actions: [
    new Action(`Taqqoslash`, `fa fa-signal`),
    new Action(`Sevimlilar`, `fa fa-heart`),
    new Action(`Savatcha`, `fa fa-cart-shopping`),
    new Action(`Kirish`, `fa fa-user`),
  ],
  data: [
    {
      globalCategory: new GlobalCategory(
        `Televizor, foto-video va audio`,
        `${URL}128x128/category/CKZsoYyBZe0yjbVeweAfqdN37DUoniYtoaP6axHXjmP8mL1sdfHJViYxE9oC.`,
        `${URL}132x132/category/6zDy6H7NAKLmaIszRCYFLxiXDtZDvNapSNOmLkLZJUpuXpRTtEq98OC9gX5J.png`,
        `${URL}original/category_slider/JJlZyYgFlgHCeSwDpt5raRrCWyBSKy9WhCldtdNQeouo74txnLl5A2Srsnu3.png`,
        `${URL}150x150/category/hDrS5LJ2o09a70D2okoTlVyiMJ03r9UkDTat1z7TFJCu55AJ5HvK5w8VpAbN.`,
        `${URL}original/homePage/reOUQBj8EEzFhf3N7kamaLpZoVurXiWLuKzjKdk7GXNUIxSRMg7zaqMOdorH.png`,
        `${URL}original/homePage/KMcoD2fRTkWHamTWP1cjwnWOup6QM37h6rQLI2N2dWuimve8kvi3VWkVzXh6.png`,
        `${URL}original/homePage/3ZqgNjZVHbk4P4I2SkSZm8Oi4GcCPo8c8WsAnpmXWLipwsEg6YdoOxNOw9NS.png`
      ),
      categories: [
        new Category(
          `Televizor, foto-video va audio`,
          `Televizorlar`,
          `${URL}150x150/category/qdVTBaQHAIBKWX7Zmtnqyt41UiGfCsBuQI7b2T33svLTTu40fF83RVO6u4Q4.png`
        ),
        new Category(
          `Televizor, foto-video va audio`,
          `Audiotexnika`,
          `${URL}150x150/category/MFGlVLSgqFhWAAD20AG8rhl6bqpdxnPH4E4iRcu86AAI3BCelhntarOz1OP3.png`
        ),
        new Category(
          `Televizor, foto-video va audio`,
          `Videotexnika`,
          `${URL}150x150/category/yw3vCbU0YmfBnMTOjLKSddHwCPWCfgqyQStWCEfPyi4G2jx5Uf61tYpvMXvC.png`
        ),
      ],
      products: [
        new Tv(
          `${URL}266x266/products/CI54C90YQ3j3zbtMAcaMYAbamQrOfSyyKHzneczUCZcEmFTlnK91wk9Xvteu.jpg`,
          `Sony Bravia X900H`,
          `Sony`,
          1400000,
          `Black`,
          65
        ),
        new Tv(
          `${URL}266x266/products/r7XxG7eksYzp7ppjvMAnKKcS1ypCAJxbNAqNYjaF59EHFhhL9LvEbWWsW7TQ.jpg`,
          `LG OLED CX`,
          `LG`,
          1200000,
          `Silver`,
          65
        ),
        new Tv(
          `${URL}266x266/products/YnvVsBWL2uIcDRvD08wBX4AkE4KgLMALJ9pruJhL8JVMuPFyDkozXBgYc59G.jpg`,
          `Samsung Q80T`,
          `Samsung`,
          1300000,
          `Titan Black`,
          50
        ),
        new Tv(
          `${URL}266x266/products/OXzikwPBB7VDeXcl7x99KdXLRwzw2gmyRFOphlP94gRTSDZMbPWBlJ8chFxg.jpg`,
          `TCL 6-Series`,
          `TCL`,
          1700000,
          `Black`,
          55
        ),
        new Tv(
          `${URL}266x266/products/2023-01-07/televizor-samsung-qa43q60baklxl-188630-0.jpg`,
          `Vizio P-Series Quantum X`,
          `Vizio`,
          1800000,
          `Gray`,
          75
        ),
        new Microphone(
          `${CDN_URL}266x266/products/woocomerce/sp-phone/2023-06-01/LlAPeXkMHg7dIsWjUsVCYQd0MxHXOJ7pm0zL8gNfFvqsb0I6QrYtQwwCMk3ca9W5.jpeg`,
          `Shure SM58`,
          `Shure`,
          650000,
          `Black`
        ),
        new Microphone(
          `${CDN_URL}266x266/products/woocomerce/sp-phone/2023-05-28/Tl5BGnOxWJUmoxqKVloEOQdvJQGlATV0VanGD9vxy7vCge7UBaqqhAFEoGx1UOmJ.jpeg`,
          `Audio-Technica AT2020`,
          `Audio-Technica`,
          450000,
          `Silver`
        ),
        new Microphone(
          `${CDN_URL}266x266/products/woocomerce/sp-phone/2023-05-25/ctpXuWsZV02RVnEorLvvKEhabBuifeRG9Zhkw6z91wjyuheaNDFCE5Lh9TQBYHRQ.jpeg`,
          `Rode NT1`,
          `Rode`,
          850000,
          `White`
        ),
        new Microphone(
          `${CDN_URL}266x266/products/woocomerce/sp-phone/2023-05-25/Xb59P1OAcmWU6vfPCuemXBnM4nseE76giQepezcudf46kgyqkc6j1xL0kHtIYEBe.jpeg`,
          `AKG C214`,
          `AKG`,
          950000,
          `Black`
        ),
        new Microphone(
          `${CDN_URL}266x266/products/woocomerce/sp-phone/2023-04-11/WCcRU3VFqasXUrwwfOZABBrWAzx1YhWz54CUZrRDiXcOymnvGYMGJ5rxm6ucBTlB.jpeg`,
          `Sennheiser e935`,
          `Sennheiser`,
          550000,
          `Gray`
        ),
        new Camera(
          `${URL}266x266/products/2023-01-18/ip-kamera-anker-eufy-indoor-cam-2k-pan-tilt-white-191263-0.jpg`,
          `Canon EOS 5D Mark IV`,
          `Canon`,
          5999000,
          `Black`,
          `2500mAh`,
          `30.4 MP`
        ),
         new Camera(
          `${URL}266x266/products/2023-01-04/ip-kamera-xiaomi-mi-smart-camera-c200-mjsxj14cm-186467-0.jpg`,
          `Nikon D850`,
          `Nikon`,
          6499000,
          `Black`,
          `2000mAh`,
          `45.7 MP`
        ),
         new Camera(
          `${URL}266x266/products/2022-04-21/videokamera-bezopasnosti-mi-wireless-outdoor-1080p-mwc13-48970-1.jpeg`,
          `Sony Alpha a7 III`,
          `Sony`,
          4599000,
          `Black`,
          `2280mAh`,
          `24.2 MP`
        ),
         new Camera(
          `${URL}266x266/products/supplier/stores/1/2023-05-31/osqusruCx2Fi3SA3IGEnlAcfldT8g9Lq3tcchAaKocIIg6lCgkMTwJCnmNaH.jpg`,
          `Fujifilm X-T4`,
          `Fujifilm`,
          3699000,
          `Silver`,
          `2350mAh`,
          `26.1 MP`
        ),
         new Camera(
          `${URL}266x266/products/2021-10-26/mi-home-security-360-2k-pro-26310-0.jpeg`,
          `Panasonic Lumix GH5`,
          `Panasonic`,
          3999000,
          `Black`,
          `1860mAh`,
          `20.3 MP`
        ),
      ],
    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Noutbuk, printer, kompyuterlar`,
        `${URL}128x128/category/ANjR66Mftj98kEBx8CWVVnQLdFQuJ4pSr3QKP4n9msN9OAwp25zPtdDyLxi5.`,
        `${URL}132x132/category/LMk7YuQAzKqsUIBDfr4jRA2IEFsLPsyFkWAWFHYkwlQZ8WRVvWut5Heb8Dju.png`,
        `${URL}original/category_slider/L8dF0P699Y9bGdOxuhsd9tCTmwufW3N0xHRofAYpAqE7J03eEb6u64UGQ01n.png`,
        `${URL}150x150/category/WMWlnwEEgHe2lNjriFXFR1AmnrIcJhPnQ50ylTqigev0AmllTZyaTHOx7jQW.`
      ),
      categories: [
        new Category(
          `Noutbuk, printer, kompyuterlar`,
          `Noutbuklar`,
          `${URL}150x150/category/Zzb97hGmwgC8EpGI3uVEwgdtvf4k9Wx404mtejcvF2qvbTSIA6HMben2CDJL.png`
        ),
      ],
      products: [
        new Noutbook(
          `${URL}266x266/products/4umNxfMJHMwW1Xq7IAJsD2GJOjkaXSef4AgzmkXcHUbwwUkCLBOaOD36VTzB.jpg`,
          `HP Pavilion`,
          `HP`,
          7500000,
          `Silver`,
          `8GB`,
          `512GB`,
          `15.6 inch`
        ),
        new Noutbook(
          `${URL}266x266/products/1enxBXIABdWnqqdWmmiOAX0SzKM4gRFw7AX6fTRx2iYcG7h0jUENngYT13Nr.jpg`,
          `Dell XPS`,
          `Dell`,
          10500000,
          `Black`,
          `16GB`,
          `1TB`,
          `13.3 inch`
        ),
        new Noutbook(
          `noutbook3.jpg${URL}266x266/products/supplier/stores/1/2023-05-31/Sn82S7Ay1uf6CAarfJpP4sLx1fp6UL9Rry61DaDafHWCs9nepVgbiB1MSCZq.jpg`,
          `Lenovo ThinkPad`,
          `Lenovo`,
          6800000,
          `Black`,
          `8GB`,
          `256GB`,
          `14 inch`
        ),
          new Noutbook(
          `${URL}266x266/products/tSEjUfiZX20mb03YpU2XJKQDHntgp0I3D9OdnYTDTLfjT9psVuAisSqvphEz.jpg`,
          `Asus ROG Strix`,
          `Asus`,
          12500000,
          `Black`,
          `16GB`,
          `1TB`,
          `17.3 inch`
        ),
          new Noutbook(
          `${URL}266x266/products/EkwBBKULoIMhx9PN2Ih31AIGRRKyCZbxDtNnERSVqI6FEcfyRX9FSlDBRVEm.jpg`,
          `Apple MacBook Air`,
          `Apple`,
          9200000,
          `Silver`,
          `8GB`,
          `256GB`,
          `13.3 inch`
        ),
          new Noutbook(
          `${URL}266x266/products/O2WzXMZK6bcaaKID1nX0f1CC94QzJxYX1ZU0DGornFlp3zSumUaLjmL73RRk.jpg`,
          `HP Envy`,
          `HP`,
          8500000,
          `Rose Gold`,
          `16GB`,
          `512GB`,
          `15.6 inch`
        ),
         new Noutbook(
          `${URL}266x266/products/rmryoKVObzNiLS3QU3afD2dWuWw7AcgMBthelipnuq9lZayPXh4TMMRnozk3.jpg`,
          `Dell Inspiron`,
          `Dell`,
          5700000,
          `Silver`,
          `8GB`,
          `256GB`,
          `14 inch`
        ),
         new Noutbook(
          `${URL}266x266/products/fJUCbjhIo15C5srsC1cWoTcWqPcpSCjtHodfP6MSA7NT8DDE24EsJZRo6Naf.jpg`,
          `Lenovo Yoga`,
          `Lenovo`,
          9900000,
          `Grey`,
          `16GB`,
          `1TB`,
          `15.6 inch`
        ),
        new Noutbook(
          `${URL}266x266/products/6YOpJLpJBiUutZYgpBoaYoNj9Qj7JJoHccJTxqx7K4Ivv14oH2r79RwtYrgC.jpg`,
          `Asus VivoBook`,
          `Asus`,
          6200000,
          `Silver`,
          `8GB`,
          `512GB`,
          `13.3 inch`
        ),
         new Noutbook(
          `${URL}266x266/products/xxyq8QzyQy6eKGziUgzyUemvKUuy44Smgfks5q8QQVu1XYVoNhuRbm2Kxf3W.jpg`,
          `Apple MacBook Pro`,
          `Apple`,
          12800000,
          `Space Grey`,
          `16GB`,
          `1TB`,
          `16 inch`
        ),
      ],
    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Smartfon, telefon, gadjet, aksessuarlar`,
        `${URL}128x128/category/ZUL8nBr5B3s2XNEX8MYx7lQz52QDpTpOOEf31vUDjN5Zxt0nkHEDuxyNNvuJ.`,
        `${URL}132x132/category/M90cCGAT8ARmlnxJzt5sH4cTD4eBUjWocRW36j69zghIlMA6leRkjL9mvoBr.png`,
        `${URL}original/category_slider/JXQtgmL8WRxw1jGmH1VgozvfYER1VzdgWZtkrrZ28d2fR47u0rsmmzYXLRJd.png`,
        `${URL}150x150/category/7mwEqFhaeCM2wwIOtVrnipvEobuW0extIoNSf8bqAM4GyxPoaoWivOyAVhns.`
      ),
      categories: [
        new Category(
          `Smartfon, telefon, gadjet, aksesuarlar`,
          `Smartfon`,
          `${URL}150x150/category/7jTR5D4A3C8N2G3WfjToAnGgmH4spQBUlGI8EBTOGgZWTLBi0SDpd4mIkhbW.png`
        ),
      ],
      products: [
        new Smartfon(`${URL}220x220/products/2022-06-13/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0.jpeg`, `Samsung Galaxy S21`, `Samsung`, 5500000, `Black`, `8 GB`, `128 GB`, `Android`),
        new Smartfon(`${URL}220x220/products/q2VIRlsSQKhRKsLg9HIJzE1oEAyC3PAXRSO2YK2QvqrBNllCb6zi5pV5FKwx.jpg`, `iPhone 12`, `Apple`, 7000000, `White`, `4 GB`, `64 GB`, `iOS`),
        new Smartfon(`${URL}220x220/products/COnrRAzmmeEFBLdXZN0HH0dRbExdKC2k6T46qWhscg3P0OIyaOn7uMnZ6yxe.jpg`, `Xiaomi Mi 11`, `Xiaomi`, 4000000, `Blue`, `6 GB`, `256 GB`, `Android`),
        new Smartfon(`${URL}220x220/products/2022-04-08/samsung-galaxy-a33-5g-6128gb-chernyy-45548-0.jpeg`, `Google Pixel 5`, `Google`, 6000000, `Black`, `8 GB`, `128 GB`, `Android`),
        new Smartfon(`${URL}220x220/products/supplier/stores/1/2023-05-01/PSoOBfcswkiVNhyEL5DdsLXYnn1jjkF2xf90NqHRN2JkGMKJNjKuY07P1JC8.jpg`, `OnePlus 9 Pro`, `OnePlus`, 6500000, `Silver`, `12 GB`, `256 GB`, `Android`),
        new Smartfon(`${URL}220x220/products/supplier/stores/1/2023-05-23/hIqZcUObrub3wYypcWjtOSL8eS8PZpZbCRAngxqwbRkFWoGhRw1tixvn57h1.jpg`, `Huawei P30 Pro`, `Huawei`, 4500000, `Aurora`, `8 GB`, `128 GB`, `Android`),
        new Smartfon(`${URL}220x220/products/mdOb9kn6eSWgGetMZxVwDeQMWZQEO4PIxQH4hXXm9Gv0DKRulzTe1J8xend0.jpg`, `Sony Xperia 1 II`, `Sony`, 5500000, `Black`, `8 GB`, `256 GB`, `Android`),
        new Smartfon(`${URL}220x220/products/2022-02-02/smartfon-xiaomi-redmi-note-11-china-4-gb-128gb-chernyy-35264-0.png`, `LG Velvet`, `LG`, 3500000, `Pink`, `6 GB`, `128 GB`, `Android`),
        new Smartfon(`${URL}220x220/products/2022-06-05/samsung-galaxy-a13-chernyy-4128-gb-56395-0.jpeg`, `Motorola Edge`, `Motorola`, 3000000, `Green`, `6 GB`, `128 GB`, `Android`),
        new Smartfon(`${URL}266x266/products/RJhJOEduNOp1zrolPNe1MreQC5ehbbi4mNgQ3o2ClbKCmADIWdvPBBh2DaQd.jpg`, `Nokia 8.3`, `Nokia`, 2500000, `Cyan`, `6 GB`, `64 GB`, `Android`)
      ],
    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Maishiy texnika`,
        `${URL}128x128/category/BCoCpVZoqpqJzQC4aiRpGVE115PG3XEqtSsF4AfxYn9sruh9BLoqUenR5IAi.`,
        `${URL}132x132/category/gTEdspBADkaKoLWlt6Tyc1XrGeJAiyfd8zwwP52GBOFDtAVnVtj4jDOwbCMz.png`,
        `${URL}668x380/category_slider/8f4KDORF4u8gGVfgw0ja2XrZS77LI0uaXcHPMKiwLoWVgzarZwbE2fjZbaiz.png`,
        `${URL}original/homePage/DBSq0ZqXSEp1v0YVVFfqySQt9IYnO4PqFgF6j5SpJJuEjQPblAeNcAfW0Mup.png`,
        `${URL}272x444/homePage/DwoIoglCDm8iWOs3U12iyMB3PQAjzAkc5oTmmKVUiQlNV8a7YxDWMhlqYb4p.png`
      ),
      categories: [
        new Category(
          `Maishiy texnika`,
          `Iqlim ta'minlovchi qurilmalar`,
          `${URL}150x150/category/TZwPCMv3JIxj8bR6ASH8JnZUwyArsXr3pUBYU2k7HQsp27ZPBL1qyhiL9NBq.png`
        ),
        new Category(
          `Maishiy texnika`,
          `Kir yuvish mashinalari`,
          `${URL}150x150/category/OGwWkM4vBkRSVzsTWZchBhWPm0r9NLbDbSUo3eMVGr0ABUuKuqx40QbL1Gjx.png`
        ),
      ],
      products: [
        new Konditsioner(`${URL}220x220/products/2022-08-16/konditsioner-avalon-art-12hq-inverter-wi-fi-99268-0.jpeg`, `Samsung AC123`, `Samsung`, 4500000, `White`, `20 sqm`),
        new Konditsioner(`${URL}220x220/products/supplier/stores/1/2023-06-10/XosiXtOFIjqsIWOvUUBSz7m589wZ6FrIhOzsrBh6hrwKp57eiwjItcaVZ4FB.jpg`, `LG AC567`, `LG`, 5200000, `Silver`, `25 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-04-18/konditsioner-artel-everest-12-inverter-48040-0.jpeg`, `Haier AC789`, `Haier`, 3800000, `Black`, `18 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-10-04/konditsioner-artel-12-everest-inverter-132817-0.jpeg`, `Gree AC456`, `Gree`, 4900000, `Gold`, `22 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-10-04/konditsioner-vb-artel-marvarid-12kbtu-132821-0.jpeg`, `Panasonic AC901`, `Panasonic`, 5500000, `Grey`, `30 sqm`),
        new Konditsioner(`${URL}220x220/products/TBogSyKqVBTbA9OeUAZAM3LmQn1krK4NZsiPc4HdWF5D45ogq6UxqK6pdG6U.jpg`, `Mitsubishi AC234`, `Mitsubishi`, 6200000, `White`, `28 sqm`),
        new Konditsioner(`${URL}220x220/products/MHVdxFaJ0RctXTbMePOeam28lZsCjKAdWrYAO5sLGRGwQv5Z2uIgg6yq9ol1.jpg`, `Daikin AC345`, `Daikin`, 5900000, `Silver`, `26 sqm`),
        new Konditsioner(`${URL}220x220/products/fj1CHWqG9LyT1cr5ZFrUmZWh1nKDiFxgBfxzGb7szdhtbJP8EFVikaWaw0WE.jpg`, `Sharp AC678`, `Sharp`, 4300000, `Black`, `24 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-10-04/konditsioner-artel-12-everest-inverter-132817-0.jpeg`, `Toshiba AC789`, `Toshiba`, 5100000, `White`, `23 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-10-04/konditsioner-vb-artel-marvarid-12kbtu-132821-0.jpeg`, `Electrolux AC432`, `Electrolux`, 4800000, `Silver`, `21 sqm`),
        // kir yuvish mashinalari
        new WashingMachine(`${URL}266x266/products/Cxxvc87JNoemFhCBOXPEdgK871c8mwXrAhrOtJYAcg1uxKdYqoUx54uJSJJT.jpg`, `Samsung WM123`, `Samsung`, 5500000, `White`, `7 kg`, `50 dB`),
        new WashingMachine(`${URL}266x266/products/9qAqwMOKhXaaiTS285WtnLQCAsCjKd2VVCS2L64oHeFDyop8WI4TjFHSO6b1.jpg`, `LG WM567`, `LG`, 7000000, `Silver`, `8 kg`, `48 dB`),
        new WashingMachine(`${URL}266x266/products/8DtCTCeKfvuQQRekPKrGp6OO97D92TFyCFiqgUHlyvcrazMEtk4zEGXGpD9J.jpg`, `Haier WM789`, `Haier`, 4000000, `Black`, `6 kg`, `52 dB`),
        new WashingMachine(`${URL}266x266/products/Wyfudd3WnhhLmh7nlWgiEy2XTQEVFA63dhFcxIsHgyTsOJJQ2X3UtVbi0LlT.jpg`, `Gorenje WM456`, `Gorenje`, 6000000, `Grey`, `7 kg`, `51 dB`),
        new WashingMachine(`${URL}266x266/products/qpWfPIJVkv8bhbxPnA60jh22Q5SXVIJjuzE6SxBWeH1dABx9OmCwPl33Obq9.jpg`, `Bosch WM901`, `Bosch`, 6500000, `White`, `8 kg`, `49 dB`),
        new WashingMachine(`${URL}266x266/products/2022-11-14/stiralnaya-mashina-samsung-ww60j42e0hwold-belyy-168713-0.jpeg`, `Whirlpool WM234`, `Whirlpool`, 4500000, `Silver`, `6 kg`, `53 dB`),
        new WashingMachine(`${URL}266x266/products/2022-11-14/ww80j62-stiralnaya-mashina-s-funktsiey-eco-bubble-168711-0.jpeg`, `Electrolux WM345`, `Electrolux`, 5500000, `Black`, `7 kg`, `50 dB`),
        new WashingMachine(`${URL}266x266/products/2022-10-18/stiralnaya-mashina-bosch-wga254x0me-157664-0.jpeg`, `Siemens WM678`, `Siemens`, 3500000, `White`, `6 kg`, `54 dB`),
        new WashingMachine(`${URL}266x266/products/2022-10-05/stiralnaya-mashina-artel-wf60k060cg-132897-0.jpeg`, `Indesit WM789`, `Indesit`, 3000000, `Silver`, `5 kg`, `55 dB`),
        new WashingMachine(`${URL}266x266/products/2022-10-05/stiralnaya-mashina-artel-wf60k060cs-132899-0.jpeg`, `Hotpoint WM432`, `Hotpoint`, 2500000, `Black`, `5 kg`, `56 dB`)
      ],
    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Barchasi oshxona uchun`,
        `${URL}128x128/category/BMBNZQhTuA1GZumMwimF96GL1kiCPWrmAqAqHjYJ9hMB1uuofjrF9GHH0cli.`,
        `${URL}132x132/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png`,
        `${URL}original/category_slider/2PYgwZb5B8hMSAY7jszGMD3ZrYvLcNXDrMNX1WQtrFcedsc3GIcDlTjykyp0.png`,
        `${URL}150x150/category/ywGuOZhjE5SzEQ5g3dd47Ld3n4VM08Chh6RtAGhwSVQZ1lmFY5upatooDiZI.`,
        `${URL}original/homePage/dSdbXUrCGAHQW5DgMkaE2UzFqwQEvNnMNwKRjMAgLyGb5iWZ6EDfK9X2EEWW.png`,
        `${URL}original/homePage/uoc7uzb78yNnQMDL8hiYTGCBC958J7O2jalOfdoTtxgK09r5BSaXGlpwo0aS.png`,
        `${URL}original/homePage/YgorMzrWA2SJ3ZlzPIw39k14Ckxqou8jUDx3oK35DNHXJ0YWks6jKMIud45q.png`
      ),
      categories: [
        new Category(
          `Barchasi oshxona uchun`,
          `Mikro to'lqinli pechlar`,
          `${URL}150x150/category/hEl6KuhDljPFlUsQ38stSrvs6TxTUfpCJtdbSKBn85dvfWJZoO2sOCqAYbeS.png`
        ),
        new Category(
          `Barchasi oshxona uchun`,
          `Yirik oshxona texnikasi`,
          `${URL}150x150/category/q1uu2OnM8bYfPBWspb2guc5IOBKhzqljK1MtervrY6FPQwH4chPpKfOp6JH3.png`
        ),
        new Category(
          `Barchasi oshxona uchun`,
          `Mayda oshxona texnikasi`,
          `${URL}150x150/category/HgWPrbtoFIdzKO74Yw6KQtzLeMOt1l75rg9omn0Fec2Bfa36MsbJS5QCzqGN.png`
        ),
      ],
      products: [
        new Microvawe(`${URL}266x266/products/2022-09-19/mikrovolnovaya-pech-samsung-me83krs-1-119968-0.jpeg`, `Samsung MW123`, `Samsung`, 1500000, `Black`, `20L`, `30cm`),
      new Microvawe(`${URL}266x266/products/2022-07-05/mikrovolnovaya-pech-bosch-bfl634gb1-63200-0.jpeg`, `LG MW567`, `LG`, 1800000, `Silver`, `25L`, `35cm`),
      new Microvawe(`${URL}266x266/products/2022-07-04/mikrovolnovaya-pech-bosch-bfl554ms0-63163-0.jpeg`, `Panasonic MW789`, `Panasonic`, 1200000, `White`, `15L`, `25cm`),
      new Microvawe(`${URL}266x266/products/2022-07-04/mikrovolnovaya-pech-bosch-bfl524mw0-63018-0.jpeg`, `Whirlpool MW456`, `Whirlpool`, 2000000, `Black`, `30L`, `40cm`),
      new Microvawe(`${URL}266x266/products/2022-07-04/mikrovolnovaya-pech-vstraivaemaya-bosch-bel653mw3-belyy-63179-0.jpeg`, `Beko MW901`, `Beko`, 1700000, `White`, `22L`, `32cm`),
      // Muzlatgich
      new Fridge(`${URL}266x266/products/supplier/stores/1/2023-05-01/p6d77GfIK3ivlQcqK3Jdj6LkXO82YpTjk6bim4HscMadD2kmAw83RoaVyhAG.jpg`, `Samsung FR123`, `Samsung`, 4500000, `Silver`, `300L`, `50kg`),
      new Fridge(`${URL}266x266/products/397wiJ7f4C4voa2bkRYSdYy0pE34XYPV7wSOGh4FZGnf0EjUKxmugaAPDnkU.jpg`, `LG FR567`, `LG`, 5500000, `White`, `400L`, `60kg`),
      new Fridge(`${URL}266x266/products/bidRK2VULbpLn56y82j227QLaKnc2hlg8AkjxHjxuvoIiigepkKZPkWCD053.jpg`, `Beko FR789`, `Beko`, 3800000, `Black`, `250L`, `45kg`),
      new Fridge(`${URL}266x266/products/CH2X6RVBvdNtATpFbXowAhJXuSiHSClltTSNXEmMUh3zDV0TJh0sk6Bdx6Y4.jpg`, `Whirlpool FR456`, `Whirlpool`, 5200000, `Stainless Steel`, `350L`, `55kg`),
      new Fridge(`${URL}266x266/products/gYjndBs4y2t7HJjhTAjamBKtPzL0QkRQvSFgRQ3jiB2VYPEtH2dyqCOk9blE.jpg`, `Haier FR901`, `Haier`, 4100000, `Silver`, `320L`, `52kg`),
        // choynak
        new Kettle(`${URL}266x266/products/fLp3H0xZMtDTs9cgBKQezAkCJMDw2LtH8LKEWd2GSpGUSxeOue88FnovARir.jpg`, `Philips K201`, `Philips`, 1500000, `White`, `1.7L`, `2200W`),
      new Kettle(`${URL}266x266/products/j42eRINxh7STldepsDJNxq6rWb9wwCnsrmPeg19rVssPFGWHclzDUFxsbgnd.jpg`, `Bosch B123`, `Bosch`, 1200000, `Silver`, `1.5L`, `1800W`),
      new Kettle(`${URL}266x266/products/IrRC6WnpGzQW8CRZR9gbAOlR99G8GRt6A2qkWEuGPslTJ8YLCbTAxHtIhLqk.jpg`, `Russell Hobbs R456`, `Russell Hobbs`, 900000, `Black`, `1.8L`, `2000W`),
      new Kettle(`${URL}266x266/products/tciHnUoOxusbDKS2WBs5qpe35Cz13wcDK9YjqJdyLAy6j4h4fY5Hk6hpfRT9.jpg`, `Tefal T789`, `Tefal`, 1350000, `Red`, `1.6L`, `1500W`),
      new Kettle(`${URL}266x266/products/jOCvgMC02V3E4RZaqeqh40PSZIWufiZWxZtRBQ7tGkKu7sX6huYYFwLVMRnX.jpg`, `Morphy Richards M901`, `Morphy Richards`, 1100000, `Stainless Steel`, `1.2L`, `1700W`)
    ],

    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Sport anjomlari`,
        `${URL}128x128/category/9fCLiZeH7QOJDKz24ZZg9h7lNbSMlWNuZKCYZueqB0bGSDpx9AbodQuBhmoa.`,
        `${URL}132x132/category/opA1z5cMyRtEZW6Oa02AXZnH0l74jiTNDA10QXTKZXS8fsoYNuPAmjID5xUT.png`,
        `${URL}original/category_slider/JVlFiHm0yYmrh7fFU2B4vrEICXNU8P8kaRkq17UhoIsDRlEQAjBtGf7dqNHm.png`,
        `${URL}original/homePage/LCGpWF43yE34PagJbxBbQSCPHF15uW6Wy2Ra8QSf6uMKtFIrAWI0Yartxv8E.png`,
        `${URL}272x444/homePage/oX66KzT1H5XavETXNwtBUPho3xEnxyqSgUrcYEi33rgxrRWpwmU7jhVnQO6l.png`
      ),
      categories: [
        new Category(
          `Sport anjomlari`,
          `Futbol anjomlari`,
          `${URL}150x150/category/D3OabRt09Me2IBTtMFSO4qRvU8Fi1dibN1EyHORVOZldBFSobpRR91j2vRLY.png`
        ),
        new Category(
          `Sport anjomlari`,
          `Sport uskunalari`,
          `${URL}150x150/category/ZA1NeSSnbXkeTlmX25Yyyawr70MvkSJNJ26Hk9BpkRrDSDmK8fU5ODW092z4.png`
        ),
      ],
      products: [
        new FutbolForm(`${URL}266x266/products/0eFLJ6rprou59L4To4lDJv2VNKWW6k4q60NVZEOT0fGG32aRNdDv2sJu7rhA.jpg`, `Nike FC Barcelona Home`, `Nike`, 200000, `Blue/Red`, `Polyester`, `M`),
        new FutbolForm(`${URL}266x266/products/MnDYzooRPczRPo0TS2mytfE12oZL9bxKFer0lxH9meIXmPKGgt0AQ2R2n6cG.jpg`, `Adidas Real Madrid Away`, `Adidas`, 180000, `White/Black`, `Polyester`, `L`),
        new FutbolForm(`${URL}266x266/products/2022-08-25/futbolnaya-forma-roma-202223-powergym-101962-1.jpeg`, `Puma Manchester United Home`, `Puma`, 220000, `Red/Black`, `Polyester`, `XL`),
        new FutbolForm(`${URL}266x266/products/2022-08-26/futbolnaya-forma-pszh-202223-powergym-102199-1.jpeg`, `Under Armour Bayern Munich Home`, `Under Armour`, 190000, `Red/White`, `Polyester`, `S`),
        new FutbolForm(`${URL}266x266/products/2022-08-25/futbolnaya-forma-barselona-202223-powergym-102032-1.jpeg`, `New Balance Liverpool Home`, `New Balance`, 210000, `Red/Yellow`, `Polyester`, `XXL`),
        // yugurish yolakchasi
        new Equipment(`${URL}266x266/products/2022-12-06/ellipticheskiy-trenazher-general-fitness-gf-500e-173328-0.jpeg`, `Adidas Treadmill`, `Adidas`, 4500000, `Black`, `Electric`, `Large`),
        new Equipment(`${URL}266x266/products/2022-12-03/begovaya-dorozhka-gf-2030m-173070-0.jpeg`, `NordicTrack Elliptical`, `NordicTrack`, 5500000, `Silver`, `Magnetic`, `Medium`),
        new Equipment(`${URL}266x266/products/uytuSJjMKwS70yOgInOKo7pNydQOGBUl6EhwsaxVTv7AajfPIYW4RZRwqQqH.jpg`, `ProForm Exercise Bike`, `ProForm`, 3500000, `Red/Black`, `Belt-driven`, `Small`),
        new Equipment(`${URL}266x266/products/2022-06-20/mnogofunktsionalnyy-silovoy-trenazher-powergym-h-88-60132-0.jpeg`, `Life Fitness Rowing Machine`, `Life Fitness`, 6500000, `Gray`, `Hydraulic`, `Large`),
        new Equipment(`${URL}266x266/products/2022-02-25/universalnaya-skamya-dlya-pressa-powergym-b10-38398-0.jpeg`, `Sole Fitness Stepper`, `Sole Fitness`, 4000000, `Black/Red`, `Air-resistance`, `Medium`)

      ],
    },
    //----------------------- half
    {
      globalCategory: new GlobalCategory(
        `Go'zallik va salomatlik`,
        `${URL}128x128/category/Yj9TQjVam8Cv1fiH09UBzA38z6ei92xvBC7BCvhyS3CS5b2XZVd3dRwvMUVQ.`,
        `${URL}132x132/category/v35JbK5fmf34Hl86Leu5QundGiGyP4BmhQ8olwbUdtUFZms0JWA5pp46yBSp.png`,
        `${URL}original/category_slider/keMjjU0tqCNPLFaFY377jHjCptsWdYjZVO0RGlxVMSbw7d3ToofImwXu8AS7.png`,
        `${URL}150x150/category/L296Pbjg9qB31kznRNOsDiq1PaYxyvNtFxbfXkuPOodbvWTVYCVbt0raSIFk.`,
        `${URL}original/homePage/H44igP6UbbDLRRDcVmlKA60NUIc03aNzDAF5qkoUMlFZEWXvzVhfYNbzPeGs.png`,
        `${URL}original/homePage/vA1UDCXpqJbFOlVgp4akNfiBeVDz9zeTqmdOfiERXV4wj0jquYJLVtjUaUu7.png`,
        `${URL}original/homePage/L2OSAhXLHor57wtRnD6Tj5BGzSQASK2KgKIsSDhpWA3rswq4V9g1emrOZwTd.png`
      ),
      categories: [
        new Category(
          `Go'zallik va salomatlik`,
          `Parfuymeriya`,
          `${URL}150x150/category/LFyC9qe8BDp4tnUxrQoiuN2mqhJ8c2wjOkU1MWy00goWUdoCRECUT37vjRQr.`
        ),
        new Category(
          `Go'zallik va salomatlik`,
          `Teri Parvarishi`,
          `${URL}150x150/category/JzLawNjY5VYa0YhqdpcN4uGocdzpIjTgGUhc8murxmpqnSLOWEEpzxDOGHsd.`
        ),
        new Category(
          `Go'zallik va salomatlik`,
          `Go'zallik uchun texnika`,
          `${URL}150x150/category/22Ts6On82oNq7sHPIxy3Dd8QFfePtixmNcraATPanIw8qWPIgSTzBx7crPLU.`
        ),
      ],
      products: [
        new Atir(`${CDN_URL}266x266/products//rpc/binafsha/2023-05-16/pY4ao2Nsgq10FGZ7q21qvGsZd6YOYkErR2GRyooS1VarpMBBMiZXSQh3Eqtel1qf.jpg`, `Versace Eros`, `Versace`, 4000000, `Gold`),
        new Atir(`${URL}220x220/products/2022-04-29/azzaro-wanted-m-edt-100ml-50939-0.jpeg`, `Chanel No. 5`, `Chanel`, 5000000, `Transparent`),
        new Atir(`${CDN_URL}266x266/products//rpc/binafsha/2023-05-16/0dWMRRVlZSS041velpleeJU9PbWapiMHI7qM2dHTQ5uRdU5odCr7LBxldqdhTYCm.jpg`, `Gucci Bloom`, `Gucci`, 5500000, `Pink`),
        new Atir(`${URL}220x220/products/2021-01-18/versace-pour-homme-dylan-blue-versace-100ml-edt-original-20755-0.jpeg`, `Dior Sauvage`, `Dior`, 4500000, `Blue`),
        new Atir(`${CDN_URL}266x266/products//rpc/binafsha/2023-05-16/ZpjsLDNM9Or5wLJFTGyFaPmKaKuIX5gzTI6du8dvBJIB1L8Wh9Ps1s28jjX3WkYZ.jpg`, `Tom Ford Black Orchid`, `Tom Ford`, 6000000, `Black`),
        // teri parvarishi
        new Loson(`${URL}266x266/products/UiKLzWPAH5eFdJxrx4ezd1wXZaevzCyeYxeOK5C67hMvVoJldIvZikvqdfiX.jpg`, `Vaseline Intensive Care`, `Vaseline`, 180000, `Yellow`),
        new Loson(`${URL}266x266/products/QF4OGoZVkpsT6t6BDEKqPPOVkbwO9P60JUR9ouCiCQfPQOohCLMQNrfkHFFQ.jpg`, `Nivea Soft`, `Nivea`, 200000, `White`),
        new Loson(`${URL}266x266/products/ZsMAPRHNm4fnvZb3nCscGjEShigbfdpVDiK8VgbKRteDqhpGlsPtQlkoPryj.jpg`, `Dove Beauty Cream`, `Dove`, 250000, `Pink`),
        new Loson(`${URL}266x266/products/YJI9TnZhFw7jp0Rkp9AFh66D61FNTNuMcCq0NrwqAELIiZhVXVwiwbU69FYY.jpg`, `Cetaphil Moisturizing Lotion`, `Cetaphil`, 220000, `Green`),
        new Loson(`${URL}266x266/products/alZk1TlmmvGenCshiNBJosiWTN6nt0wrawJFA7FttW1lcdT43l3VqSaWgtTd.jpg`, `Aveeno Daily Moisturizing Lotion`, `Aveeno`, 300000, `Blue`),
              // Trimmer
        new Trimmer(`${URL}266x266/products/2022-11-01/trimmer-panasonic-er-gb40-r520-164544-0.jpeg`, `Braun Series 9`, `Braun`, 600000, `Silver`, `Cordless`, `50 minutes`),
        new Trimmer(`${URL}266x266/products/ICvMVhYIN9DPBfXhzlRsvK0w3OpHdXAk9yIWApTXuWcumq5ury4JO69MduQx.jpg`, `Philips Series 7000`, `Philips`, 500000, `Black`, `Cordless`, `60 minutes`),
        new Trimmer(`${URL}266x266/products/AviZpm6cz02hTC9HF9WWhXJJJ3RAha3m56az3MftNeONTs2EGNETrDUwO9Bn.jpg`, `Remington HC4250`, `Remington`, 400000, `Blue`, `Cordless`, `60 minutes`),
        new Trimmer(`${URL}266x266/products/KzeKQzdbe1EwRQg62AjYNzVFFDE0tUitBPLvJHlhqDNbMYJhHh4EhZTaDjfd.jpg`, `Panasonic ER-GN30-K`, `Panasonic`, 300000, `Black`, `Battery-powered`, `40 minutes`),
        new Trimmer(`${URL}266x266/products/Gn7fynZwnUX7lC1nHpEJAfUZxoc5zIIiSAJ3hEiIKPWgZ6BnmgpYiJWnUc2F.jpg`, `Wahl Lithium Ion Plus`, `Wahl`, 350000, `Red`, `Cordless`, `120 minutes`),
      ],

    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Avto jihozlar`,
        `${URL}128x128/category/N3iMWPyvXRIXTqwloVhRb4oe2PEn38unPptNWZVenY7DJS2GYY5py94DRAX6.`,
        `${URL}132x132/category/8AHSgv20VYFMvDFCykQOb25FsT2zXTroCgxaNugsZmfaA1fHbFKswZT9tFqq.png`,
        `${URL}original/category_slider/BqkMvx3TqR2k37PU4vNxf4THLZTfQsSmlj7Tv0yYXU2tl89EAAX9ddQyEh5Z.png`,
        `${URL}original/homePage/CAIEji1cx5wOAGmIAemBB0NKpT7KQaznWqT0Rkmt8ZHXTXKwGWkHQoOiN1me.png`,
        `${URL}272x444/homePage/sXucmM8gqWHhDeSWbBziBP8eXIwnfRkQf5Tx8T4BX9txupgGivXYhiomzrlz.png`
      ),
      categories: [
        new Category(
          `Avto Jihozlar`,
          `Avto uchun rul`,
          `${URL}150x150/category/1T79CVFM1tfWRjatnqv7RsWiFzFhvAeMEhbMZjc1bNceJR7ara6LAMBrjDb5.png`
        ),
        new Category(
          `Avto Jihozlar`,
          `Shinalar`,
          `${URL}150x150/category/NnPrDfxRshNwGKZK2EzKgKxRJjNLV64aXAcoQbNkjYajTyQ514NgCnfQXHxL.png`
        ),
        new Category(
          `Avto jihozlar`,
          `Akkumulyatorlar`,
          `${URL}150x150/category/7HyrXFsEIKJRBBMl4QywNFTtwbj8b58TiR0L8W48W7D2APlfC7YtOR87j27x.png`
        ),
      ],
      products: [
        new Rul(`${URL}266x266/products/NdVCCmCrL0qEX7JCiV9ZoXJh1neyFnShoo3EuHH20M4wXmmSRcNeaB9ewWnN.jpg`, `Power Steering`, `Bosch`, 400000, `Qora`),
        new Rul(`${URL}266x266/products/JvrMwT972lnsZauzU2BVz6yALiQxaQbNfIR1niN69VntZQMGrlFNfYAfE4Uf.jpg`, `Electric Power Steering`, `TRW`, 500000, `Oq`),
        new Rul(`${URL}266x266/products/OEMQZ65TNtB1dsnikyvjy3B2D73f1cZriYIfI7noPKsWFhw6eZey6KllqSBn.jpg`, `Power Steering`, `Mando`, 550000, `Kulrang`),
        new Rul(`${URL}266x266/products/G3MIDJWts3n7CLCUmSVLVQctS8Mhc5R7DBOT9UO9D2jPsFRFjdA2c73oBSj9.jpg`, `Electric Power Steering`, `Delphi`, 450000, `Kok`),
        new Rul(`${URL}266x266/products/2021-05-29/rul-mercedes-gelandewagen-tiptronic-anatomiya-23849-0.jpeg`, `Power Steering`, `JTEKT`, 600000, `Qora`),
        // Shinalar
        new Tire(`${URL}266x266/products/FLiBiuWQ4UcRu7aNqNMrTd2PO17pwEn53KsmCwH8bCDBSDQvfjBURJZZkp9L.jpg`, `Michelin Pilot Sport 4S`, `Michelin`, 300000, `Black`, 18, `Summer`),
        new Tire(`${URL}266x266/products/2022-11-30/shina-kumho-ecsta-215-45-zr17-172385-0.jpeg`, `Bridgestone Potenza RE-71R`, `Bridgestone`, 280000, `Black`, 19, `Summer`),
        new Tire(`${URL}266x400/products/2022-07-08/avtoshiny-michelin-crossclimate2-2156516-4-sht-64289-0.jpg`, `Goodyear Assurance WeatherReady`, `Goodyear`, 320000, `Gray`, 17, `All-Season`),
        new Tire(`${URL}266x266/products/2022-07-08/avtoshiny-michelin-crossclimate-suv-2456018-4-sht-64282-0.jpg`, `Continental ExtremeContact DWS06`, `Continental`, 290000, `Black`, 18, `All-Season`),
        new Tire(`${URL}266x266/products/2022-05-12/shina-nexen-nfero-au7-21555-r17-4sht-52512-0.jpeg`, `Pirelli P Zero Nero`, `Pirelli`, 310000, `Black`, 19, `Summer`)    ,  
        //Akkumlyatorlar
        new Accumulator(`${URL}266x266/products/2021-03-18/avtomobilnyy-akkumulyator-bars-6st-90-apz-pp-22482-0.jpeg`, `Exide Edge FP-AGM`, `Exide`, 150, `Sariq`, 70, 15, 12),
        new Accumulator(`${URL}266x266/products/2021-03-18/akkumulyator-kainar-6st-60-apz-pp-22484-0.jpeg`, `Delkor EFB`, `Delkor`, 190, `Oq`, 60, 13, 12),
        new Accumulator(`${URL}266x266/products/2021-03-18/avtomobilnyy-akkumulyator-bars-silver-6ct-75-22480-0.jpegsch`, `Bosch S4`, `Bosch`, 200, `Qora`, 75, 16, 12),
        new Accumulator(`${URL}266x266/products/2021-03-18/avtomobilnyy-akkumulyator-bars-6st-60-apz-pp-22478-0.jpeg`, `Varta Blue Dynamic`, `Varta`, 180, `Ko'k`, 65, 14, 12),
        new Accumulator(`${URL}266x266/products/2021-03-18/akkumulyator-kainar-6st-60-apz-pp-22484-0.jpeg`, `Yuasa High Power`, `Yuasa`, 170, `Yashil`, 80, 17, 12),
      ],
    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Barchasi ta'mirlash va qurilish uchun`,
        `${URL}128x128/category/difdCHCdbpndST221TZmKFNSGUiwYIjRB8KPJRl1kVkTt2jyN4f8hnFgk68Q.`,
        `${URL}132x132/category/ppPdVKboDyJeSIwPV2azbrUGGWU1NmeBICAEpufF5ZriTQsHT6MvCQKpDyUC.png`,
        `${URL}original/homePage/XPMBiEBJuew0N0hPtRyJd2EAe7uSZQCzwJmyD29psRatLafclJVy4QPqfrae.png`,
        `${URL}original/homePage/H8MlOeMRwNCKCEMNfz3COnFxnJhixSDTyot8J7DyfaC9nUs7boRQHPx7nuqb.png`,
        `${URL}original/homePage/g8aDqY6Ht4O9Qo1l98aEBW9q8Rl5PL5e96WVXoKriBM6bq2SOtAUw5XcelSY.png`,
        `${URL}original/homePage/g8aDqY6Ht4O9Qo1l98aEBW9q8Rl5PL5e96WVXoKriBM6bq2SOtAUw5XcelSY.png`
      ),
      categories: [
        new Category(
          `Barchasi ta'mirlash va qurilish uchun`,
          `Drellar`,
          `${URL}150x150/category/DsYswbJL2g18WpsXpeNzva7DWOXf2r32mEmMPZtXY2f63xER2pAweykFtdnp.png`
        ),
        new Category(
          `Barchasi ta'mirlash va qurilish uchun`,
          `Perforatorlar`,
          `${URL}150x150/category/yK1WpdUxFyD6TObGTrPB4badbpabVzhb9QLLEFihM2NyIUPCyeMaecf4eAeJ.png`
        ),
      ],
      products: [
        new Drell(`${URL}266x266/products/wsOXok5Tqn7RnxD1lxZLKnhi2JvqdxPl5guKS5aYVhOjqbstGvCQH22Nbu8j.jpg`, `Drell SpeedMaster`, `Drell`, 120, `Qizil`, 6, `R17`, `215/55`),
        new Drell(`${URL}266x266/products/ycSRltCFvVfPDdv05ezUxKdUafVp3JHa6VrXn2wUnXoigM9T9aTZheXCjmSm.jpg`, `Drell SportGrip`, `Drell`, 140, `Qora`, 4, `R16`, `205/60`),
        new Drell(`${URL}266x266/products/2022-11-02/shurupovert-bosch-gtb-650-164745-0.jpeg`, `Drell UltraTraction`, `Drell`, 150, `Yashil`, 8, `R18`, `225/50`),
        new Drell(`${URL}266x266/products/2022-10-28/akkumulyatornyy-shurupovert-dewalt-dcf887n-xj-163110-0.jpeg`, `Drell ComfortPlus`, `Drell`, 130, `Oq`, 6, `R15`, `195/65`),
        new Drell(`${URL}266x266/products/2022-10-29/drel-akkumulyatornaya-total-tidli20031-163222-0.jpeg`, `Drell AllSeason`, `Drell`, 110, `Ko'k`, 4, `R16`, `205/55`),
        // Perforatorlar
        new Perforator(`${URL}266x266/products/TCZBLs0Gf286WJSbGuD8SuSsJQtwplEarTwwU9Jgt5sWZEBUtoxIlogFj6NO.jpg`, `Bosch GBH 2-20 D`, `Bosch`, 300, `Qora`, 2, `220V`, `20 mm`),
        new Perforator(`${URL}266x266/products/CvDUReoyXZuyWqi0yYeDksdcsaYwMUHkUdQSGR9eqVmNbLzlmhZlJwyXkTIc.jpg`, `Makita HR2470`, `Makita`, 250, `Mokri`, 3, `230V`, `24 mm`),
        new Perforator(`${URL}266x266/products/2022-12-06/perforator-rodex-rdx2402-173337-0.jpeg`, `Dewalt D25144K`, `Dewalt`, 350, `Sariq`, 4, `220V`, `26 mm`),
        new Perforator(`${URL}266x266/products/TCZBLs0Gf286WJSbGuD8SuSsJQtwplEarTwwU9Jgt5sWZEBUtoxIlogFj6NO.jpg`, `Hilti TE 2`, `Hilti`, 400, `Qora`, 3, `230V`, `22 mm`),
        new Perforator(`${CDN_URL}266x266/products/2022-10-12/perforator-dewalt-d25481k-5343-155110-0.jpeg`, `Festool BHC 18 Li`, `Festool`, 500, `Ko'k`, 2, `18V`, `18 mm`)
      ],
    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Kiyim va poyabzallar`,
        `${URL}128x128/category/jTPPyG1D9fziqBW0yJXQd3RpyCUSRd6AbthM5l0CRxLFbJhrlxOmcqI48LMZ.`,
        `${URL}132x132/category/GtgyWIyER3Ahqeq4xrBhyL501KohK4wJlGUmjqZQj4BGJAnrZENIGqE7eic6.`,
        ``,
        `${URL}150x150/category/HXYGXCHGxdOSy74thgYxPPmfvpknPy5lCcEe02aIZTunCD4DcNWktjAulwwo.`,
        `${URL}original/homePage/2wsUhLgcxb0Hlhn2FdXTJ8xgMUBlTl32sGXf0JbRW9xcjMhUwpH2W1aWrJN4.png`,
        `${URL}original/homePage/yFoLqEHfC0xv30OumPV7phzGk1uT6flob5Ij5OhRq9lGUjxRMBR9Fq2IFvgA.png`,
        `${URL}original/homePage/BX9QARd1k6fZAqxYE7xJYP9FJ1Zzx5GmVv6vr2EeMaKuCL0J3asK50Dvgo6l.png`
      ),
      categories: [
        new Category(
          `Kiyim va poyabzallar`,
          `Erkaklar kiyimlari`,
          `${URL}150x150/category/tZw0kutrTq6a14qlU2s9knmfm2W2tfyEyOW1KWwXGOqNWniKe92vEpwuSxef.png`
        ),
        new Category(
          `Kiyim va poyabzallar`,
          `Ayollar kiyimlari`,
          `${URL}150x150/category/JpxEi31tJ1woH8kt5UaDYFEkpkf8VFG3SH5kggJ2QWBUxnposr9TcC4gpCJp.png`
        ),
        new Category(
          `Kiyim va poyabzallar`,
          `Erkaklar poyabzallari`,
          `${URL}150x150/category/EyqmoLrVEr5XRg1bI06fd9fJfiMdbbtcfQmb9FDRurnIxqwZTdba9GCia7GW.`
        ),
        new Category(
          `Kiyim va poyabzallar`,
          `Ayollar poyabzallari`,
          `${URL}150x150/category/qsSlkxK0t8rU9hlFGW5GdJG8OFG7yzqFaf0J2LHQSPGpV3JcDEDHUj97Fdd2.`
        ),
      ],
      products: [
        // ayollar kiyimlari
        new Clothes(`${CDN_URL}266x266/products/api/newale/2023-06-01/n1CXy8KrcIgumpQmsZhT1Wm5of8bYcSC9HQufXh5rETY5KV16no4qd8zIDqunhOc.jpeg`, `Elle Dress`, `Elle`, 150, `Mavi`, `S`, `Ayollar`, `Ayollar kiyimlari`),
        new Clothes(`${CDN_URL}266x400/products/api/newale/2023-06-02/QphrmCcxi4S0Wg3DHUSQjCEwZdxuhNjFLv5YSarhOibkjyLlIPjigHCbNG8MhbbF.jpeg`, `Zara Blouse`, `Zara`, 80, `Beyaz`, `M`, `Ayollar`, `Ayollar kiyimlari`),
        new Clothes(`${CDN_URL}266x266/products/api/newale/2023-06-02/OeUy2dX1wj1aRLnfxqoqS0gdtQNE1Lu2qVsrjkJu4xuJXhihApEX1WNY0d6cnBI7.jpeg`, `H&M Skirt`, `H&M`, 60, `Siyah`, `L`, `Ayollar`, `Ayollar kiyimlari`),
        new Clothes(`${CDN_URL}266x266/products/api/newale/2023-06-02/JvO8PL3btVMCQShhlrqM7ivO26QOAmenF3ND5izIzkFpFQEnacdGUf4A4ohGUuNN.jpeg`, `Mango Pants`, `Mango`, 100, `Gri`, `XL`, `Ayollar`, `Ayollar kiyimlari`),
        new Clothes(`${CDN_URL}266x400/products/api/anaki/2023-06-08/5XcHSbdamfvjVTzvyol6xlpfkecjPq7gacUMUyisiQ6GQ8dSMk9Cb7kIKiQd99Y8.jpeg`, `Forever 21 Top`, `Forever 21`, 70, `Pembe`, `XS`, `Ayollar`, `Ayollar kiyimlari`),
        //ayollar poyabzallari
        new Shoes(`${CDN_URL}266x266/products/2022-09-30/bosonozki-1395783-40pjrt-128811-0.jpeg`, `Nike Air Max`, `Nike`, 200, `Siyah`, 38, `Ayollar`, `Ayollar Poyabzallari`),
        new Shoes(`${CDN_URL}266x266/products/api/newale/2023-06-09/bpA8DdOrQifgv0KaN4o0gmxObJfzRCNyGgQOjubjSjMyeJwdm9fOKyTJpKupr1ZQ.jpeg`, `Adidas Ultraboost`, `Adidas`, 180, `Beyaz`, 36, `Ayollar`, `Ayollar poyabzallari`),
        new Shoes(`${CDN_URL}266x266/products/api/newale/2023-06-04/c6q0XDg3FLd5KzE2npGuCwHBKmkzhXISv2ISERjHNskprXibxudJKnWSFEaSQuii.jpeg`, `Puma RS-X`, `Puma`, 150, `Gri`, 39, `Ayollar`, `Ayollar poyabzallari`),
        new Shoes(`${CDN_URL}266x400/products/api/newale/2023-06-03/PnE4Q42GPP3dhQ3kA9TpKm11uuQ5K2KnsBycFxf2m7DbYBwKD2b6fcMqaVZbTduh.jpeg`, `New Balance 574`, `New Balance`, 160, `Mavi`, 37, `Ayollar`, `Ayollar poyabzallari`),
        new Shoes(`${CDN_URL}266x266/products/api/newale/2023-06-03/I7177tcKlaAmE5aFGBTVSSieagMtNfIPAiIVHy3RVP8LpnMrGPeztpSFbi7J8IEA.jpeg`, `Reebok Classic Leather`, `Reebok`, 140, `Beyaz`, 40, `Ayollar`, `Ayollar poyabzallari`),
        //erkaklar kiyimlari
        new Clothes(`${CDN_URL}266x266/products/api/newale/2023-06-03/ogk4VgSPGNAFkib9mKW5mwWRgl654tcjaZr1tIPnss4SYuVPlgXmGAmQDKtGXZzx.jpeg`, `Adidas T-Shirt`, `Adidas`, 50, `Qizil`, `L`, `Erkaklar`,`Erkaklar kiyimlari`),
        new Clothes(`${CDN_URL}266x266/products/api/newale/2023-06-03/7DSDF1EToq3eZSS1QoJsyMhGcRttHPZjwhPoawjLX5LR6D7Ogz9VYbZgmYH4PjMC.jpeg`, `Nike Polo Shirt`, `Nike`, 70, `Oq`, `M`, `Erkaklar`,`Erkaklar kiyimlari`),
        new Clothes(`${CDN_URL}266x266/products/api/newale/2023-06-03/5cZq5pCdxuxDEPZHhG94OM0DnsUOTUKQwXTkidYh8R0ffYOljtlEisCn0SzY5Hgv.jpeg`, `Puma Hoodie`, `Puma`, 80, `Qora`, `XL`, `Erkaklar`,`Erkaklar kiyimlari`),
        new Clothes(`${CDN_URL}266x266/products/api/newale/2023-06-03/PkQiebuD8P9xbH8h1cJcaBfxJ6A6LizpXmCzxrYCq1sRSERKerjtwr9LluGL0NHm.jpeg`, `Reebok Shorts`, `Reebok`, 40, `Yashil`, `S`, `Erkaklar`,`Erkaklar kiyimlari`),
        new Clothes(`${CDN_URL}266x266/products/api/newale/2023-06-03/IKp7cDwMFhsxfWragjSzgL8GDkG4t8O1Xb1sD3buI1t5uxBRxMPg8DRHzQZPc4ar.jpeg`, `Under Armour Joggers`, `Under Armour`, 90, `Ko'k`, `XXL`, `Erkaklar`,`Erkaklar kiyimlari`),
        // erkaklar poyabzallari
        new Shoes(`${URL}266x400/products/supplier/stores/1/2023-05-30/AQ29cp6rMuniE6Bny4V3thy9Ca0YRVLdVsgGkDbJGQzxay8apVP47lREImh3.jpg`, `Nike Air Max`, `Nike`, 200, `Siyah`, 42, `Erkaklar`, `Erkaklar poyabzallari`),
        new Shoes(`${URL}266x400/products/supplier/stores/1/2023-05-30/aG1IWKrL2dEmiYpo9k9qphaZV6iVMVDMAa8KffDmFXIALPqyj9D6nLulQj8m.jpg`, `Adidas Ultraboost`, `Adidas`, 180, `Beyaz`, 44, `Erkaklar`, `Erkaklar poyabzallari`),
        new Shoes(`${URL}266x266/products/3pUSuY2K0yDK8bcym2isflb001MvsuUmn1O8VgWAOlnlekNKfwxmAyevStYo.jpg`, `Puma RS-X`, `Puma`, 150, `Gri`, 41, `Erkaklar`, `Erkaklar poyabzallari`),
        new Shoes(`${CDN_URL}266x266/products/api/sofitex/2023-05-08/ejfPLlAGiFJPBQTTeBdTPBSg0tv2q632K2Z58ZEpQy1flrTUqEaoQLAZmXwYFxt3.jpeg`, `New Balance 574`, `New Balance`, 160, `Mavi`, 43, `Erkaklar`, `Erkaklar poyabzallari`),
        new Shoes(`${URL}266x400/products/5XkBFTIatGjYWi067z0ulCL3RPtT5bZLkTdSgUDmaFMKdbNPaQy6FmxMhCgx.jpg`, `Reebok Classic Leather`, `Reebok`, 140, `Beyaz`, 45, `Erkaklar`, `Erkaklar poyabzallari`),
      ],
    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Kitoblar`,
        `${URL}128x128/category/eMGaqVMlhSpffNNjX3KglXrMRvO0LKRyIFiHhujkihjkukwIMRPUgqvkB5rf.`,
        `${URL}132x132/category/odtXyERULXCcAjKtJEb0kH7XBV0InZmmqAwRqk24I1zqtITNExpsa7wto6uN.png`,
        `${URL}original/category_slider/ohVBewOkH7hkDzTQGIw3ZVh8EINtytxqAa2t2ke1FqsR7XE0YSnhXAoGQnX5.png`,
        `${URL}original/homePage/EfSw1HSKRUS0xSwKFPfv1JaQH0HtCiXyJQYrxNpjtAAHKpd5xheiAroj04rc.png`,
        `${URL}272x444/homePage/L7glHAPUJiC9RB15XAdDq52DinD9ZyeQXBp3XvIsUs9OBOObMv8CVzOaEqHV.png`
      ),
      categories: [
        new Category(
          `Kitoblar`,
          `Diniy adabiyot`,
          `${URL}150x150/category/5yK3r8UKLMcuHObiZ4AXxYodnjfS5aop4cG6EPxylFMFr0r7fVgblETTDnpA.png`
        ),
        new Category(
          `Kitoblar`,
          `Jahon adabiyoti`,
          `${URL}150x150/category/iHKQ7nwLLscZdyMxK3e9YuYfoAbIqy4gDZof2cHdA6HDPizXkeTfMCgu3nPq.png`
        ),
      ],
      products: [
        new Book(`${URL}266x266/products/eJFwyg9QTTffFTsTDrRYNnRrf5smtjKa859qkFoqVddpnrpVy0vTThWZqP4N.jpg`, `Abdullah Yusuf Ali`, `The Noble Qur'an`, 1200, 500000, 1934, `Diniy adabiyot`),
        new Book(`${URL}266x266/products/dHepjjt0T2cvTy850hiuZ4g3GfQtyq6gLPnXwFWBQegFEtHMjvFmPFDOotPW.jpg`, `Imam Al-Bukhari`, `Sahih Al-Bukhari`, 3000, 800000, 870, `Diniy adabiyot`),
        new Book(`${URL}266x266/products/IaPJ5sIyhn4Ac0J0euFcbgHvIyNj3EBo5wGBsnbIzbRCAPqXBGRDhG10gHpa.jpg`, `Imam Muslim`, `Sahih Muslim`, 2500, 75, 875000, `Diniy adabiyot`),
        new Book(`${URL}266x266/products/HC8FJ28phAOIjmO77nSwM7X2F8XslpBXWDEAUqzpyXFCx0a3M1q4l2HSvcO8.jpg`, `Maulana Jalaluddin Rumi`, `Mathnawi`, 800, 400000, 1258, `Diniy adabiyot`),
        new Book(`${URL}266x266/products/CWKvOZUpHa4KHP13QV0LO9QoiLvzNEcWh737LKMQDL3vxItHzi9U0ToSjIPx.jpg`, `Imam Al-Ghazali`, `Ihya Ulumuddin`, 1500, 1600000, 1095, `Diniy adabiyot`),
        // jahon adabiyoti
        new Book(`${URL}266x266/products/BTFJ1cjO0eO2XQoFNDpVIiUJha9vi5Q3vi4WWFhjH8ux9JO8AQZO4zsbOs5x.jpg`, `William Shakespeare`, `Hamlet`, 200, 30, 1603, `Jahon adabiyoti`),
        new Book(`${URL}266x266/products/F8Ao0sxNzVrRnK3VnMcrb72BzYTJJSvWvgwYaSEjAVNKrB80Yr6FSXdqhANn.jpg`, `Fyodor Dostoevsky`, `Crime and Punishment`, 500, 40, 1866, `Jahon adabiyoti`),
        new Book(`${URL}266x266/products/XLOjptM2g0MMGYqGbaDmkWa3iTD26SGEgPm8mUtIG7f4DsnxHu6rOeCFsOpO.jpg`, `Jane Austen`, `Pride and Prejudice`, 350, 35, 1813, `Jahon adabiyoti`),
        new Book(`${URL}266x266/products/ekjvZ5ereBLuprUwIhGo5NeADORvf3nwDbdCMxItyPsvgMYiQNRSivxVVRLK.jpg`, `Gabriel Garcia Marquez`, `One Hundred Years of Solitude`, 400, 45, 1967, `Jahon adabiyoti`),
        new Book(`${URL}266x266/products/SSnIS5eVN5kVr7i7QmqfcR2OpzBWG671YOoXyWzAXwB1m8RYgkQjHsEn8JPn.jpg`, `Harper Lee`, `To Kill a Mockingbird`, 300, 35, 1960, `Jahon adabiyoti`)
      ],
    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Geymerlar uchun`,
        `${URL}128x128/category/78jAtnkAgDOlj2JhxYHV8kV3mFfBtYEXkNLPYZCCBsOzr4C4HZpgVxT659DJ.`,
        `${URL}132x132/category/uSZ7ukWOhOGAavEsU53jITihn8GZwiqeCmnzaErWodbkagi99gq739isSfC2.png`,
        ``,
        `${URL}original/homePage/YpIidfgPXgTayzigFFg6G7srMWnKeKBofDIzR3O4k3fKqvDMxxxw1gQjeaxJ.png`,
        `${URL}272x444/homePage/jgS3BKYXjzdMDLnGIUAlW1mIu6kdQgDQfyRN35esX2qKecXIJcI8ePKqH7wU.png`
      ),
      categories: [
        new Category(
          `Geymerlar uchun`,
          `Geymerlar uchun monitor`,
          `${URL}150x150/category/HRAUvk8zE2wRsK5hO0RlCzN8wBVjQhsVpQGsMlS5QnqcmIuyDrnlq8yKl0py.png`
        ),
        new Category(
          `Geymerlar uchun`,
          `Geymerlar uchun garnituralar`,
          `${URL}150x150/category/zHoqkmHOunb06KQhoec6ub4cNZXP3UOYZrVkZZOHvDPtbk92rbeC3KH9EsAF.png`
        ),
      ],
      products: [
        new Monitor(`${URL}266x266/products/2023-01-04/igrovoy-monitor-aoc-g2sp-24-186453-0.jpg`, `Model1`, `LG`, 350, `Black`, 27, `2560x1440`),
        new Monitor(`${URL}266x266/products/2023-01-04/igrovye-monitor-aoc-c27g3-27-va-curved-186446-0.jpg`, `Model2`, `Dell`, 450, `Silver`, 24, `1920x1080`),
        new Monitor(`${URL}266x266/products/2022-06-09/monitor-xiaomi-2k-gaming-monitor-27-57435-0.jpeg`, `Model3`, `Samsung`, 550, `White`, 32, `3840x2160`),
        new Monitor(`${URL}266x266/products/2022-03-28/monitor-benq-ex2510s-245-43437-0.jpeg`, `Model4`, `Asus`, 250, `Black`, 21.5, `1920x1080`),
        new Monitor(`${URL}266x266/products/2022-03-07/monitor-pixel-pxg27fhd-pro-gaming-monitor-27-39305-0.jpeg`, `Model5`, `Acer`, 300, `Black`, 23.8, `1920x1080`),
        // quloqchinlar
        new Earphone(`${URL}266x266/products/2023-01-19/provodnye-naushniki-lenovo-legion-stereo-headset-191544-0.jpg`, `Arctis Nova1`, `Sony`, 100, `Black`, `20Hz-20kHz`, `10 hours`),
        new Earphone(`${URL}266x266/products/2022-09-22/igrovaya-garnitura-asus-tuf-gaming-h1-90yh03a1-b1ua00-122513-0.jpeg`, `GM-3`, `Apple`, 150, `White`, `10Hz-30kHz`, `8 hours`),
        new Earphone(`${URL}266x266/products/2022-09-22/igrovaya-garnitura-asus-rog-fusion-ii-300-90yh02x3-b2ua00-122477-0.jpeg`, `Headset 800`, `JBL`, 80, `Red`, `20Hz-20kHz`, `12 hours`),
        new Earphone(`${URL}266x266/products/supplier/stores/1/2023-05-10/hE5pJqnyxSgGJ1WIdC9tOG2ENtL5s3hVQH9qMn2HrciHOwlYnsGwrzvnXE9P.jpg`, `H-300`, `Sennheiser`, 200, `Black`, `16Hz-22kHz`, `15 hours`),
        new Earphone(`${URL}266x266/products/2022-07-07/igrovye-naushniki-shinecon-hs-5-zheltyy-63815-0.jpeg`, `Legion Stereo`, `Bose`, 250, `Silver`, `20Hz-20kHz`, `20 hours`),
      ],
    },
    //-----------------------
    {
      globalCategory: new GlobalCategory(
        `Mavsumiy mahsulotlar`,
        `${URL}128x128/category/BCoCpVZoqpqJzQC4aiRpGVE115PG3XEqtSsF4AfxYn9sruh9BLoqUenR5IAi.`,
        `${URL}132x132/category/gTEdspBADkaKoLWlt6Tyc1XrGeJAiyfd8zwwP52GBOFDtAVnVtj4jDOwbCMz.png`,
        `${URL}668x380/category_slider/8f4KDORF4u8gGVfgw0ja2XrZS77LI0uaXcHPMKiwLoWVgzarZwbE2fjZbaiz.png`,
        `${URL}150x150/category/PycBrAg7qXJHaLSqgHRiF87XzQ3vUG4csg5B08V5xISt6fXZQzXx6n1rQ8RD.`,
        `${URL}original/homePage/WL2j1YpUiet58XBgAzZ9W3eL9AFkY32DAsu5LWXlive4z2zL7zgZl1uejCAm.png`,
        `${URL}original/homePage/vpNH7dxm2cM9ISvEIZ9vmCFxHHdyJHB2jUzLYfcv3VjRo0woYYhNIhpBuxBJ.png`,
        `${URL}original/homePage/qu1atXHyuynZVxBBF9oBSlRyWUvJYmaf1a04uFk235FXhVBoarxbbchGWLtO.png`
      ),
      categories: [
        new Category(
          `Mavsumiy mahsulotlar`,
          `Iqlim ta'minlovchi qurilmalar`,
          `${URL}150x150/category/TZwPCMv3JIxj8bR6ASH8JnZUwyArsXr3pUBYU2k7HQsp27ZPBL1qyhiL9NBq.png`
        ),
      ],
      products: [
        new Konditsioner(`${URL}220x220/products/2022-08-16/konditsioner-avalon-art-12hq-inverter-wi-fi-99268-0.jpeg`, `Samsung AC123`, `Samsung`, 4500000, `White`, `20 sqm`),
        new Konditsioner(`${URL}220x220/products/supplier/stores/1/2023-06-10/XosiXtOFIjqsIWOvUUBSz7m589wZ6FrIhOzsrBh6hrwKp57eiwjItcaVZ4FB.jpg`, `LG AC567`, `LG`, 5200000, `Silver`, `25 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-04-18/konditsioner-artel-everest-12-inverter-48040-0.jpeg`, `Haier AC789`, `Haier`, 3800000, `Black`, `18 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-10-04/konditsioner-artel-12-everest-inverter-132817-0.jpeg`, `Gree AC456`, `Gree`, 4900000, `Gold`, `22 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-10-04/konditsioner-vb-artel-marvarid-12kbtu-132821-0.jpeg`, `Panasonic AC901`, `Panasonic`, 5500000, `Grey`, `30 sqm`),
        new Konditsioner(`${URL}220x220/products/TBogSyKqVBTbA9OeUAZAM3LmQn1krK4NZsiPc4HdWF5D45ogq6UxqK6pdG6U.jpg`, `Mitsubishi AC234`, `Mitsubishi`, 6200000, `White`, `28 sqm`),
        new Konditsioner(`${URL}220x220/products/MHVdxFaJ0RctXTbMePOeam28lZsCjKAdWrYAO5sLGRGwQv5Z2uIgg6yq9ol1.jpg`, `Daikin AC345`, `Daikin`, 5900000, `Silver`, `26 sqm`),
        new Konditsioner(`${URL}220x220/products/fj1CHWqG9LyT1cr5ZFrUmZWh1nKDiFxgBfxzGb7szdhtbJP8EFVikaWaw0WE.jpg`, `Sharp AC678`, `Sharp`, 4300000, `Black`, `24 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-10-04/konditsioner-artel-12-everest-inverter-132817-0.jpeg`, `Toshiba AC789`, `Toshiba`, 5100000, `White`, `23 sqm`),
        new Konditsioner(`${URL}220x220/products/2022-10-04/konditsioner-vb-artel-marvarid-12kbtu-132821-0.jpeg`, `Electrolux AC432`, `Electrolux`, 4800000, `Silver`, `21 sqm`),
      ],
    },
  ],
};

export default olcha;
