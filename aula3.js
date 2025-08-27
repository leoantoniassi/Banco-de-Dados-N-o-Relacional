db.produtos.insertMany([
    {
        "_id":1,
        "nome": "Sotebook Dell",
        "categoria": "Eletronicos",
        "preco": 4500,
        "estoque":15,
        "avaliacao": 4.7
    },
    {
        "_id": 2,
        "nome": "Smartphone Samsumg",
        "categoria": "Eletronicos",
        "preco": 2500,
        "estoque": 30,
        "avaliacao": 4.5
    },
    {
        "_id": 3,
        "nome": "Cadeira Gamer",
        "categoria": "Móveis",
        "preco": 1200,
        "estoque": 10,
        "avaliacao": 4.8
    }
]);
//operadores de igual
db.produtos.find(
    {preco:"2500"}
)
//ou
db.produtos.find({"preco": {"$eq": 2500}})

//operadores de comparação
//$ne (diferente de) - Retorna documentos cujo valor de um campo 
// seja diferente do valor especificado
db.produtos.find({"preco": {"$ne": 4500}})

//$gt(maior que - greater than)
//retorna documentos cujo valor seja maior que o específicado
db.produtos.find({"preco": {"$gt": 2000}})

//$lt (menor que - lower than)
//retorna documetnos cujo valor seja menor que o especificado
db.produtos.find({"preco": {"$lt": 3000}})

//$gte e $lte (maior ou igual/ menor ou igual)
//são variações dos operadores anteriores, incluíndo valores iguais ao limite definido
db.produtos.find({"preco":{ "$gte": 1000, "$lte": 3000}})

//operadores lógicos
//$and
//o operador $and exige que todas as condições especificadas sejam verdade
db.produtos.find({"$and": [
    {"categoria": "Eletronicos"},
    {"preco": {"$gt": 3000}}
]
})

//$or
//retorna documentos que satisfaçam pelo menos uma das condições especificadas
db.produtos.find({"$or": [
    {"categoria": "Eletronicos"},
    {"preco": {"$gt": 4000}}
    ]
})

//$not
//nega uma consição especificada
db.produtos.find({"preco": {
    "$not": {"$gt": 3000}
    }
})
// retorna todos os produtos cujo preço não seja maior que 3000

//$nor
//oposto de $or, excluíndo documentos que satisfaçam qualquer uma das condições listadas
db.produtos.find({
    "$nor": [
        {"categoria": "Eletronicos"},
        {"preco": {"$gt": 4000}}
    ]
})

//operadores de elemento
//$exists
//verifica se um campo está presente ou não em um documento
db.produtos.find({"avaliacao": {"$exists": true}})

//$type
//filrta documentos com base no tipo de dado armazenado em um campo
db.produtos.find({"preco": {"$type": "double"}}) 
//não retornará nada pois nenhum preço é em double