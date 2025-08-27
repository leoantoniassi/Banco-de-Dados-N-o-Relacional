// 1) Acessar o mongoDB: abra o terminal e digite mongosh
// 2) Mostrar os bancos de dados no servidor: show dbs
// 3) Criar banco de dados: use primeiro_db
// 4) Mostrar as coleções no banco de dados: show collections
// 5) Criar coleção: 
    db.createCollection("minha_colecao")
// 6) Inserir documento:
    db.minha_colecao.insertOne({nome: "João", idade: 30})
// 7) Listar todos os documentos da coleção:
    db.minha_colecao.find()
// 8) Inserir vários documentos:
    db.minha_colecao.insertMany([
    {nome: 'Maria', idade: 25},
    {nome: 'José', idade: 40},
    {nome: 'Ana', idade: 35}
    ])
// 9) Encontrar um documento: 
    db.minha_colecao.findOne({nome: "João"})
// 10) Encontrar um documento e exibir apenas o campo "nome" e "idade":
    db.minha_colecao.find({nome: "joão"},
    {nome: 1, idade: 1, _id: 0})
// 11) Atualizar um documento:
    db.minha_colecao.updateOne(
        {nome: "João"},
        {$set: {idade: 31}}
    )
// 12) Remover um documento: 
    db.minha_colecao.deleteOne({nome: "João"})
// 13) Remover a coleção de dados:
    db.minha_colecao.drop()
// 14) remover o Banco de Dados:
    db.dropDatabase()