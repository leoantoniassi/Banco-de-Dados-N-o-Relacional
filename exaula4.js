// -- Exercício 1 --
//banco para usar de base para o exercício 1
db.heroes.insertMany([
  {
    _id: 1,
    name: "Spider-Man",
    city: "New York",
    power: ["Agility", "Web-Shooting"],
    defeatedVillains: 50,
  },
  {
    _id: 2,
    name: "Batman",
    city: "Gotham",
    power: ["Martial Arts", "Detective Skills"],
    defeatedVillains: 200,
  },
  {
    _id: 3,
    name: "Wonder Woman",
    city: "Themyscira",
    power: ["Super Strength", "Lasso"],
    defeatedVillains: 120,
  },
]);

//exercício 1 -
//a) O Homem-Aranha desenvolveu um novo poder: Sentido Aranha Aprimorado.
// Adicione esse poder ao array power de "Spider-Man".

db.heroes.updateOne(
  { name: "Spider-Man" },
  { $addToSet: { power: "Sentido Aranha Aprimorado" } }
);

// b) O Batman prendeu mais 10 vilões.
// Atualize o campo defeatedVillains para refletir essa mudança.

db.heroes.updateOne({ name: "Batman" }, { $inc: { defeatedVillains: 10 } });

//c) O nome da cidade da Mulher-Maravilha foi alterado para "Amazonia".
// Atualize essa informação.

db.heroes.updateOne({ name: "Wonder Woman" }, { $set: { city: "Amazonia" } });

//d) O Batman perdeu suas "Detective Skills" (ele não se lembra mais de como investigar).
// Remova essa habilidade da lista power.

db.heroes.updateOne({ name: "Batman" }, { $pop: { power: 1 } });

// -- Exercício 2 --
// banco base para o exercício 2
db.menu.insertMany([
  {
    _id: 1,
    dish: "Pizza",
    ingredients: ["Dough", "Tomato Sauce", "Cheese"],
    price: 30,
  },
  {
    _id: 2,
    dish: "Sushi",
    ingredients: ["Rice", "Fish", "Seaweed"],
    price: 40,
  },
  {
    _id: 3,
    dish: "Taco",
    ingredients: ["Tortilla", "Beef", "Cheese"],
    price: 15,
  },
]);

// a) o restaurante decidiu aumentar o preço de todos os pratos em 10%.
//atualize os preços

db.menu.updateMany({}, { $mul: { price: 1.1 } });

// b) o taco vem com Guacamole. Adicone esse ingrediente à lista de ingredientes

db.menu.updateOne({ dish: "Taco" }, { $push: { ingredients: "Guacamole" } });

// c) o sushi teve um reajuste e agora custa 35. atualize esse valor

db.menu.updateOne({ dish: "Sushi" }, { $set: { price: 35 } });

// d) o restaurante removeu 'Beef' dos tacos e substrituiu por 'Chiken'.
//atualize a lista de ingredientes

db.menu.updateOne({ dish: "Taco" }, { $pull: { ingredients: "Beef" } });
db.menu.updateOne({ dish: "Taco" }, { $push: { ingredients: "Chicken" } });