function agePrice(Name, age) {}
  Name = '〇〇';
  age = 15;


  if (age >= 20) {
    document.write(`${Name}さんは20歳以上なので大人賞金です。`);
  } else if (age < 20) {
    document.write(`${Name}さんは20未満なので子供料金です。`);
  }
