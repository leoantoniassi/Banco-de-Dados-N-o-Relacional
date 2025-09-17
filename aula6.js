// --- Comandos de Criacao de Indices ---

db.usuarios.createIndex({ email: 1 });
// Cria um indice em um unico campo (email) para tornar as buscas nesse campo muito mais rapidas.

db.usuarios.createIndex({ nome: 1, idade: -1 });
// Cria um indice composto que otimiza consultas com multiplos criterios, neste caso, buscas que filtram por nome em ordem crescente e idade em ordem decrescente. [cite: 44, 45]

db.pedidos.createIndex({ itens: 1 });
// Cria um indice do tipo multi-key em um campo que e um array (itens), melhorando o desempenho ao pesquisar valores dentro desse array. [cite: 53, 57, 58]

db.produtos.createIndex({ descricao: "text" });
// Cria um indice textual, util para buscar por palavras especificas dentro de campos de texto, como uma descricao de produto. [cite: 64, 66]

db.locais.createIndex({ localizacao: "2dsphere" });
// Cria um indice geoespacial para otimizar buscas baseadas em coordenadas geograficas, como encontrar locais proximos a um ponto especifico. [cite: 73, 75]

// --- Comandos de Analise e Monitoramento ---

db.usuarios.totalIndexSize();
// Mostra o espaco total em disco, em bytes, que todos os indices de uma colecao (usuarios) estao ocupando. [cite: 80, 81]

db.usuarios.stats().indexSizes;
// Fornece um detalhamento do espaco utilizado por cada indice individualmente dentro da colecao. [cite: 87]

db.usuarios
  .find({ cliente: "Ana", status: "Pendente" })
  .explain("executionStats");
// E a principal ferramenta para analisar como uma consulta e executada. [cite: 136] [cite_start]Ela mostra se um indice foi utilizado e qual foi o custo da operacao, permitindo otimizar o desempenho. [cite: 136, 137]

db.pedidos
  .find({ cliente: "Ana", status: "Pendente" })
  .hint({ cliente: 1, status: 1 });
// Forca o MongoDB a usar um indice especifico que voce determina. [cite: 112] [cite_start]E util para testar qual indice tem o melhor desempenho para uma determinada consulta. [cite: 114]

// --- Comandos de Gerenciamento ---

db.usuarios.getIndexes();
// Lista todos os indices que existem em uma determinada colecao. [cite: 131]

db.usuarios.dropIndex("email_1");
// Remove um indice que nao esta mais sendo usado, ajudando a economizar espaco em disco. [cite: 130]

// --- Comando de Busca Especial ---

db.produtos.find({ $text: { $search: "notebook" } });
// Realiza uma busca textual para encontrar todos os documentos que contenham a palavra "notebook" em um campo que possui um indice do tipo "text". [cite: 68]
