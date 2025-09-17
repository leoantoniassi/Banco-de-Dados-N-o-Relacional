// use aulaAgregations

db.cliente.insertOne({
  nome: "joao silva",
  idade: 30,
  email: "joaosilva@example.com",
});

db.produtos.insertOne({
  nome: "manga",
  preco: 20,
  categoria: "livros",
});

db.compra.insertOne({
  cliente_id: ObjectId("68cab6bac1990073e75b8c8c"),
  data: new Date(),
  itens: [
    {
      produto_id: ObjectId("68cab6bac1990073e75b8c8c"),
      preco: 99.99,
      quantidade: 1,
      total_unitario: 99.99,
    },
  ],
});

db.compra.aggregate([
  {
    $lookup: {
      from: "cliente",
      localField: "cliente_id",
      foreignField: "_id",
      as: "cliente_info",
    },
  },
]);
// Realiza um join entre as colecoes "compra" e "cliente" para trazer informacoes do cliente junto com cada compra.

db.compra.aggregate([
    {
        $project: {
            cliente_id: 1,
            data: 1,
            itens: 1,
            valor_total: {
                $sum: {
                    $map: {
                        input: "$itens",
                        as: "item",
                        in: { $multiply: ["$$item.preco", "$$ite.quantidade"]}
                    }
                }
            }
        }
    }
])