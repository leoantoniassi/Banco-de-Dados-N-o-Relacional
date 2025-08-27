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

db.users.updateOne({username: 'joao'},{$set: {age:25}});

db.users.updateMany(
    {active: true}, //seleciona todos os usuarios que forem ativos
    {$set: {premium: true}} //define todos para premium
);

// --- Operações Matemáticas ---
//$inc - incrementa o valor de um campo numérico
//$mul - multiplica o valor de um campo
//$min - atualiza o campo apenas se o novo valor for menor que o atual
//$max - atualiza o campo apenas se o novo valor for maior que o atual