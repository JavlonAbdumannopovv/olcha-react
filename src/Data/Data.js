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
  contructor(title, fImg, lImg) {
    const data = title;
    const data2 = data.split(",").join("");
    this.slug = data2.toLowerCase().split(" ").join("-");
    this.title = title;
    this.fImg = fImg;
    this.lImg = lImg;
  }
}

class Category {
  contructor(title, fImg, lImg) {
    super(title, fImg, lImg);
  }
}

class Phones {
  constructor(imgUrl, model, color, cost, made, ram, memory){
    this.globalType = "smartfon, telefon, gadjet";
    this.type = "telefon";
    this.imgUrl = imgUrl;
    this.model = model;
    this.color = color;
    this.cost = cost;
    this.made = made;
    this.ram = ram;
    this.memory = memory;
  }
}

const olcha = {
  actions: [
    new Action("Taqqoslash", "fa fa-signal"),
    new Action("Sevimlilar", "fa fa-heart"),
    new Action("Savatcha", "fa fa-cart-shopping"),
    new Action("Kirish", "fa fa-user"),
  ],
  globalCategories: [
    new GlobalCategory(
      "Televizor, foto-video va audio",
      "https://olcha.uz/image/128x128/category/CKZsoYyBZe0yjbVeweAfqdN37DUoniYtoaP6axHXjmP8mL1sdfHJViYxE9oC.",
      "https://olcha.uz/image/132x132/category/6zDy6H7NAKLmaIszRCYFLxiXDtZDvNapSNOmLkLZJUpuXpRTtEq98OC9gX5J.png"
    ),
    new GlobalCategory(
      "Noutbuk, printer, kompyuterlar",
      "https://olcha.uz/image/128x128/category/ANjR66Mftj98kEBx8CWVVnQLdFQuJ4pSr3QKP4n9msN9OAwp25zPtdDyLxi5.",
      "https://olcha.uz/image/132x132/category/LMk7YuQAzKqsUIBDfr4jRA2IEFsLPsyFkWAWFHYkwlQZ8WRVvWut5Heb8Dju.png",
    ),
    new GlobalCategory(
      "Smartfon, telefon, gadjet, aksessuarlar",
      "https://olcha.uz/image/128x128/category/ZUL8nBr5B3s2XNEX8MYx7lQz52QDpTpOOEf31vUDjN5Zxt0nkHEDuxyNNvuJ.",
      "https://olcha.uz/image/132x132/category/M90cCGAT8ARmlnxJzt5sH4cTD4eBUjWocRW36j69zghIlMA6leRkjL9mvoBr.png",
    ),
    new GlobalCategory(
      "Maishiy texnika",
      "https://olcha.uz/image/128x128/category/BCoCpVZoqpqJzQC4aiRpGVE115PG3XEqtSsF4AfxYn9sruh9BLoqUenR5IAi.",
      "https://olcha.uz/image/132x132/category/gTEdspBADkaKoLWlt6Tyc1XrGeJAiyfd8zwwP52GBOFDtAVnVtj4jDOwbCMz.png",
    ),
    new GlobalCategory(
      "Barchasi oshxona uchun",
      "https://olcha.uz/image/128x128/category/BMBNZQhTuA1GZumMwimF96GL1kiCPWrmAqAqHjYJ9hMB1uuofjrF9GHH0cli.",
      "https://olcha.uz/image/132x132/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png",
    ),
    new GlobalCategory(
      "Sport anjomlari",
      "https://olcha.uz/image/128x128/category/9fCLiZeH7QOJDKz24ZZg9h7lNbSMlWNuZKCYZueqB0bGSDpx9AbodQuBhmoa.",
      "https://olcha.uz/image/132x132/category/opA1z5cMyRtEZW6Oa02AXZnH0l74jiTNDA10QXTKZXS8fsoYNuPAmjID5xUT.png",
    ),
    new GlobalCategory(
      "Go`zallik va salomatlik",
      "https://olcha.uz/image/128x128/category/Yj9TQjVam8Cv1fiH09UBzA38z6ei92xvBC7BCvhyS3CS5b2XZVd3dRwvMUVQ.",
      "https://olcha.uz/image/132x132/category/v35JbK5fmf34Hl86Leu5QundGiGyP4BmhQ8olwbUdtUFZms0JWA5pp46yBSp.png",
    ),
    new GlobalCategory(
      "Avto jihozlar",
      "https://olcha.uz/image/128x128/category/N3iMWPyvXRIXTqwloVhRb4oe2PEn38unPptNWZVenY7DJS2GYY5py94DRAX6.",
      "https://olcha.uz/image/132x132/category/8AHSgv20VYFMvDFCykQOb25FsT2zXTroCgxaNugsZmfaA1fHbFKswZT9tFqq.png",
    ),
    new GlobalCategory(
      "Kiyim va poyabzallar",
      "https://olcha.uz/image/128x128/category/jTPPyG1D9fziqBW0yJXQd3RpyCUSRd6AbthM5l0CRxLFbJhrlxOmcqI48LMZ.",
      "https://olcha.uz/image/132x132/category/GtgyWIyER3Ahqeq4xrBhyL501KohK4wJlGUmjqZQj4BGJAnrZENIGqE7eic6.",
     ),
     new GlobalCategory(
      "Kitoblar",
      "https://olcha.uz/image/128x128/category/eMGaqVMlhSpffNNjX3KglXrMRvO0LKRyIFiHhujkihjkukwIMRPUgqvkB5rf.",
      "https://olcha.uz/image/132x132/category/odtXyERULXCcAjKtJEb0kH7XBV0InZmmqAwRqk24I1zqtITNExpsa7wto6uN.png",
     ),
     new GlobalCategory(
      "",
      "",
      "",
     ),
       
  ],
  categories: [

  ],
};

export default olcha;
