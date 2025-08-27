// Exercícios 
//1) utilize o operador $gte para encontrar todos os produtos com preço maior ou igual a 2000.
db.produtos.find({"preco":{ "$gte": 2000}})

//2) filtre os produtos que pertencem a categoria "Moveis" e possuem 
// avaliação superior a 4.5 usando $and
db.produtos.find({"$and": [{"categoria": "Móveis"},{"avaliacao": {"$gt": 4.5}}]})

//3) use $or para retornar todos os produtos que custam menos de 2000 ou tem estoque maior que 20
db.produtos.find({"$or": [
    {"preco": {"$lt": 2000}},
    {"estoque": {"$gt": 20}}
    ]
})

//4) escreva uma consulta que retorne apenas os produtos que possuem o campo 'avaliacao'
db.produtos.find({ "avaliacao": { "$exists": true } })

//5) utilize $nor para excluír da busca os produtos da categoria "Eletronicos" e 
//aqueles com preço maior que 3000
db.produtos.find({
    "$nor": [
        {"categoria": "Eletronicos"},
        {"preco": {"$gt": 3000}}
    ]
})