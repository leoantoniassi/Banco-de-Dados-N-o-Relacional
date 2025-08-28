db.users.insertMany([
  {
    _id: 1,
    username: "joao",
    age: 24,
    active: true,
    premium: false,
    hobbies: ["reading", "soccer"],
    tasks: [{ title: "study mongoDB", status: "pending" }],
  },
  {
    _id: 2,
    username: "maria",
    age: 30,
    active: false,
    premium: true,
    hobbies: ["cooking", "yoga"],
    tasks: [{ title: "complete project", status: "done" }],
  },
  {
    id: 3,
    username: "carlos",
    age: 35,
    active: true,
    premium: false,
    hobbies: ["gaming", "music"],
    tasks: [{ title: "write report", status: "pending" }],
  },
]);
// --- Operadores de Atualização ---
//--- modificação de campos ---
//atualiza apenas um documento que corresponde ao filtro:
//$set - define ou altera um campo específico
//$unset - remove um campo
//$rename - renomeia um campo

db.users.updateOne({ username: "joao" }, { $set: { age: 25 } });

db.users.updateMany(
  { active: true }, //seleciona todos os usuarios que forem ativos
  { $set: { premium: true } } //define todos para premium
);

//substitui um documento inteiro por outro novo
db.users.replaceOne(
  { username: "maria" },
  {
    _id: 2,
    username: "maria",
    age: 31,
    active: true,
    premium: false,
    hobbies: [],
  }
);

//atualização de documentos com $set
db.users.updateOne({ username: "joao" }, { $set: { premium: true } });
//joao agora é premium

//$unset - remove um campo
db.users.updateOne({ username: "carlos" }, { $unset: { premium: "" } });
//remove o campo premium do usuário carlos

//$rename - renomeia um campo
db.users.updateOne({ username: "maria" }, { $rename: { age: "yearsOld" } });
//age foi renomeado para 'yearsOld' em maria

// --- Operadores matematicos ---
//$inc - incrementa um valor
db.users.updateOne({ username: "joao" }, { $inc: { age: 1 } });
//a idade de joao aumenta em 1

//$mul - multiplica um valor
db.users.updateOne({ username: "carlos" }, { mul: { age: 2 } });
//a idade de carlos dobra

//$min
db.users.updateOne({ username: "joao" }, { $min: { age: 23 } });
// se a idade de 'joao' for maior que 23, ela é reduzida para 23.

//$max
db.users.updateOne({ username: "maria" }, { $max: { yearsOld: 35 } });
//se a idade de 'maria' for menor que 35, ela é aumentada para 35

//$pop - remove o primeiro ou o último elemento
db.users.updateOne({ username: "maria" }, { $pop: { hobbies: -1 } });
//remove o primeiro item do array hobbies de 'maria'

//$push - adiciona um elemento ao array
db.users.updateOne({ username: "joao" }, { $push: { hobbies: "guitar" } });
//guitar é adicionado ao array hobbies de 'joao'

//$pull - remove elementos específicos
db.users.updateOne({ username: "carlos" }, { $pull: { hobbies: "gaming" } });

//$addToSet - add um item se ele não existir
db.users.updateOne({ username: "joao" }, { $addToSet: { hobbies: "chess" } });

//$each - adiciona múltiplos elementos
db.users.updateOne(
  { username: "joao" },
  { $push: { hobbies: { $each: ["coding", "music"] } } }
);

//ou...

db.users.updateOne(
  { username: "joao" },
  { $push: { hobbies: ["codding", "music"] } }
);
//coding e music são adicionados a hobbies
