/* Crie um banco de dados para um petshop com as seguintes coleções: 
- animal {id, nome, idade, tipo, raça, peso, dono}
- dono {id, nome, telefone, endereço}
- agendamento {id, id_animal, data_agendamento, serviço}

cada um: 150 animais e 150 donos*/

use petshop

db.createCollection("animal");

db.animal.insertMany([
    // Cachorros
    { "nome": "Biscoito", "idade": 2, "tipo": "Cachorro", "raça": "Golden Retriever", "peso": 30.5 },
    { "nome": "Paçoca", "idade": 5, "tipo": "Cachorro", "raça": "Vira-lata", "peso": 15.2 },
    { "nome": "Thor", "idade": 3, "tipo": "Cachorro", "raça": "Husky Siberiano", "peso": 28.0 },
    { "nome": "Amora", "idade": 1, "tipo": "Cachorro", "raça": "Poodle Toy", "peso": 3.5 },
    { "nome": "Zelda", "idade": 4, "tipo": "Cachorro", "raça": "Pastor Alemão", "peso": 35.1 },
    { "nome": "Fígaro", "idade": 6, "tipo": "Cachorro", "raça": "Dachshund", "peso": 9.8 },
    { "nome": "Costela", "idade": 8, "tipo": "Cachorro", "raça": "Bulldog Francês", "peso": 12.3 },
    { "nome": "Sirius", "idade": 2, "tipo": "Cachorro", "raça": "Border Collie", "peso": 20.0 },
    { "nome": "Pudim", "idade": 7, "tipo": "Cachorro", "raça": "Shih Tzu", "peso": 6.5 },
    { "nome": "Bacon", "idade": 3, "tipo": "Cachorro", "raça": "Beagle", "peso": 11.4 },
    { "nome": "Nébula", "idade": 5, "tipo": "Cachorro", "raça": "Doberman", "peso": 34.0 },
    { "nome": "Sushi", "idade": 2, "tipo": "Cachorro", "raça": "Akita", "peso": 40.2 },
    { "nome": "Gandalf", "idade": 10, "tipo": "Cachorro", "raça": "Lhasa Apso", "peso": 7.1 },
    { "nome": "Pipoca", "idade": 1, "tipo": "Cachorro", "raça": "Chihuahua", "peso": 2.5 },
    { "nome": "Ragnar", "idade": 4, "tipo": "Cachorro", "raça": "Rottweiler", "peso": 55.0 },
    // Gatos
    { "nome": "Salem", "idade": 3, "tipo": "Gato", "raça": "Bombaim", "peso": 5.0 },
    { "nome": "Mochi", "idade": 2, "tipo": "Gato", "raça": "Siamês", "peso": 4.5 },
    { "nome": "Cosmo", "idade": 5, "tipo": "Gato", "raça": "Vira-lata", "peso": 6.2 },
    { "nome": "Lilith", "idade": 4, "tipo": "Gato", "raça": "Maine Coon", "peso": 8.0 },
    { "nome": "Gatsby", "idade": 6, "tipo": "Gato", "raça": "Persa", "peso": 5.5 },
    { "nome": "Íris", "idade": 1, "tipo": "Gato", "raça": "Angorá", "peso": 3.8 },
    { "nome": "Ozzy", "idade": 8, "tipo": "Gato", "raça": "Siberiano", "peso": 7.3 },
    { "nome": "Pixel", "idade": 2, "tipo": "Gato", "raça": "Sphynx", "peso": 4.0 },
    { "nome": "Quasar", "idade": 7, "tipo": "Gato", "raça": "Azul Russo", "peso": 5.1 },
    { "nome": "Tofu", "idade": 3, "tipo": "Gato", "raça": "Ragdoll", "peso": 9.0 },
    { "nome": "Jinx", "idade": 4, "tipo": "Gato", "raça": "Scottish Fold", "peso": 4.2 },
    { "nome": "Orion", "idade": 5, "tipo": "Gato", "raça": "Bengal", "peso": 6.8 },
    { "nome": "Yoda", "idade": 12, "tipo": "Gato", "raça": "Vira-lata", "peso": 4.9 },
    { "nome": "Hades", "idade": 6, "tipo": "Gato", "raça": "Norueguês da Floresta", "peso": 8.5 },
    { "nome": "Nugget", "idade": 2, "tipo": "Gato", "raça": "British Shorthair", "peso": 6.0 },
    // Pássaros
    { "nome": "Zazu", "idade": 5, "tipo": "Pássaro", "raça": "Calopsita", "peso": 0.09 },
    { "nome": "Kiwi", "idade": 2, "tipo": "Pássaro", "raça": "Agapornis", "peso": 0.05 },
    { "nome": "Maestro", "idade": 8, "tipo": "Pássaro", "raça": "Canário Belga", "peso": 0.02 },
    { "nome": "Ravi", "idade": 10, "tipo": "Pássaro", "raça": "Arara Canindé", "peso": 1.2 },
    { "nome": "Ambar", "idade": 3, "tipo": "Pássaro", "raça": "Periquito Australiano", "peso": 0.03 },
    { "nome": "Galileu", "idade": 15, "tipo": "Pássaro", "raça": "Papagaio-verdadeiro", "peso": 0.4 },
    { "nome": "Topázio", "idade": 4, "tipo": "Pássaro", "raça": "Diamante de Gould", "peso": 0.015 },
    { "nome": "Cacau", "idade": 7, "tipo": "Pássaro", "raça": "Cacatua", "peso": 0.6 },
    { "nome": "Ícaro", "idade": 6, "tipo": "Pássaro", "raça": "Ring Neck", "peso": 0.15 },
    { "nome": "Phoenix", "idade": 9, "tipo": "Pássaro", "raça": "Rosela", "peso": 0.1 },
    // Répteis
    { "nome": "Pascal", "idade": 4, "tipo": "Réptil", "raça": "Camaleão", "peso": 0.2 },
    { "nome": "Crush", "idade": 25, "tipo": "Réptil", "raça": "Tartaruga de Orelha Vermelha", "peso": 1.5 },
    { "nome": "Rango", "idade": 3, "tipo": "Réptil", "raça": "Dragão Barbudo", "peso": 0.5 },
    { "nome": "Nagini", "idade": 8, "tipo": "Réptil", "raça": "Cobra do Milho", "peso": 0.8 },
    { "nome": "Godzilla", "idade": 6, "tipo": "Réptil", "raça": "Iguana Verde", "peso": 4.0 },
    { "nome": "Donatello", "idade": 15, "tipo": "Réptil", "raça": "Jabuti", "peso": 10.0 },
    { "nome": "Saphira", "idade": 5, "tipo": "Réptil", "raça": "Gecko Leopardo", "peso": 0.07 },
    { "nome": "Draco", "idade": 7, "tipo": "Réptil", "raça": "Tegu", "peso": 6.5 },
    { "nome": "Voldemort", "idade": 12, "tipo": "Réptil", "raça": "Jiboia", "peso": 15.0 },
    { "nome": "Spike", "idade": 9, "tipo": "Réptil", "raça": "Lagarto de Gola", "peso": 0.9 },
    // Roedores e Pequenos Mamíferos
    { "nome": "Stuart", "idade": 1, "tipo": "Roedor", "raça": "Hamster Sírio", "peso": 0.15 },
    { "nome": "Remi", "idade": 2, "tipo": "Roedor", "raça": "Twister", "peso": 0.4 },
    { "nome": "Nibs", "idade": 3, "tipo": "Roedor", "raça": "Porquinho-da-índia", "peso": 1.1 },
    { "nome": "Faisca", "idade": 4, "tipo": "Roedor", "raça": "Chinchila", "peso": 0.6 },
    { "nome": "Rocket", "idade": 5, "tipo": "Mamífero", "raça": "Furão", "peso": 1.3 },
    { "nome": "Gus", "idade": 1, "tipo": "Roedor", "raça": "Gerbil", "peso": 0.1 },
    { "nome": "Pernalonga", "idade": 3, "tipo": "Mamífero", "raça": "Coelho Angorá", "peso": 2.8 },
    { "nome": "Mimo", "idade": 2, "tipo": "Roedor", "raça": "Hamster Anão Russo", "peso": 0.04 },
    { "nome": "Dumbo", "idade": 1, "tipo": "Roedor", "raça": "Rato Dumbo", "peso": 0.5 },
    { "nome": "Oreo", "idade": 2, "tipo": "Mamífero", "raça": "Coelho Holandês", "peso": 2.2 },
    // Animais Aquáticos
    { "nome": "Nemo", "idade": 2, "tipo": "Peixe", "raça": "Peixe-palhaço", "peso": 0.01 },
    { "nome": "Dory", "idade": 3, "tipo": "Peixe", "raça": "Cirurgião Patela", "peso": 0.15 },
    { "nome": "Poseidon", "idade": 5, "tipo": "Peixe", "raça": "Betta", "peso": 0.005 },
    { "nome": "Midas", "idade": 4, "tipo": "Peixe", "raça": "Kinguio", "peso": 0.3 },
    { "nome": "Zeus", "idade": 6, "tipo": "Peixe", "raça": "Acará-disco", "peso": 0.2 },
    { "nome": "Glimmer", "idade": 1, "tipo": "Peixe", "raça": "Guppy", "peso": 0.002 },
    { "nome": "Sombra", "idade": 7, "tipo": "Peixe", "raça": "Cascudo", "peso": 0.5 },
    { "nome": "Coral", "idade": 2, "tipo": "Peixe", "raça": "Platy", "peso": 0.006 },
    { "nome": "Willy", "idade": 10, "tipo": "Peixe", "raça": "Oscar", "peso": 1.6 },
    { "nome": "Bubbles", "idade": 3, "tipo": "Peixe", "raça": "Molinésia", "peso": 0.012 },
    // Mais nomes criativos e variados
    { "nome": "Cronos", "idade": 11, "tipo": "Cachorro", "raça": "Fila Brasileiro", "peso": 70.0 },
    { "nome": "Atena", "idade": 3, "tipo": "Gato", "raça": "Sagrado da Birmânia", "peso": 4.8 },
    { "nome": "Hércules", "idade": 6, "tipo": "Cachorro", "raça": "Mastim Inglês", "peso": 95.0 },
    { "nome": "Calipso", "idade": 4, "tipo": "Pássaro", "raça": "Canário da Terra", "peso": 0.025 },
    { "nome": "Atlas", "idade": 30, "tipo": "Réptil", "raça": "Tartaruga-gigante-de-galápagos", "peso": 250.0 },
    { "nome": "Pandora", "idade": 2, "tipo": "Gato", "raça": "Vira-lata", "peso": 3.9 },
    { "nome": "Loki", "idade": 5, "tipo": "Cachorro", "raça": "Weimaraner", "peso": 38.5 },
    { "nome": "Freya", "idade": 4, "tipo": "Gato", "raça": "Chartreux", "peso": 6.1 },
    { "nome": "Apolo", "idade": 3, "tipo": "Cachorro", "raça": "Dálmata", "peso": 27.8 },
    { "nome": "Gaia", "idade": 9, "tipo": "Cachorro", "raça": "Terra Nova", "peso": 65.0 },
    { "nome": "Merlin", "idade": 13, "tipo": "Gato", "raça": "Exótico", "peso": 5.3 },
    { "nome": "Nyx", "idade": 2, "tipo": "Gato", "raça": "Pelo Curto Americano", "peso": 4.7 },
    { "nome": "Odin", "idade": 7, "tipo": "Cachorro", "raça": "Elkhound Norueguês", "peso": 23.0 },
    { "nome": "Perséfone", "idade": 1, "tipo": "Coelho", "raça": "Mini Lop", "peso": 1.5 },
    { "nome": "Titã", "idade": 5, "tipo": "Cachorro", "raça": "Dogue Alemão", "peso": 80.0 },
    { "nome": "Vênus", "idade": 6, "tipo": "Pássaro", "raça": "Agapornis Roseicollis", "peso": 0.055 },
    { "nome": "Zephyr", "idade": 3, "tipo": "Cavalo", "raça": "Puro Sangue Lusitano", "peso": 500.0 },
    { "nome": "Avalanche", "idade": 4, "tipo": "Cachorro", "raça": "Samoieda", "peso": 25.5 },
    { "nome": "Basil", "idade": 2, "tipo": "Roedor", "raça": "Rato de Laboratório", "peso": 0.45 },
    { "nome": "Cínder", "idade": 5, "tipo": "Gato", "raça": "Korat", "peso": 4.3 },
    { "nome": "Domino", "idade": 3, "tipo": "Cachorro", "raça": "Setter Irlandês", "peso": 30.1 },
    { "nome": "Eco", "idade": 2, "tipo": "Pássaro", "raça": "Papagaio Ecletus", "peso": 0.45 },
    { "nome": "Fable", "idade": 6, "tipo": "Gato", "raça": "Tonquinês", "peso": 5.2 },
    { "nome": "Gizmo", "idade": 1, "tipo": "Cachorro", "raça": "Griffon de Bruxelas", "peso": 4.1 },
    { "nome": "Havoc", "idade": 4, "tipo": "Cachorro", "raça": "Malinois Belga", "peso": 29.0 },
    { "nome": "Iggy", "idade": 7, "tipo": "Réptil", "raça": "Uromastyx", "peso": 0.7 },
    { "nome": "Jagger", "idade": 5, "tipo": "Cachorro", "raça": "Boxer", "peso": 32.0 },
    { "nome": "Kahlua", "idade": 3, "tipo": "Gato", "raça": "Havana Brown", "peso": 4.0 },
    { "nome": "Lancelot", "idade": 8, "tipo": "Cavalo", "raça": "Andaluz", "peso": 550.0 },
    { "nome": "Morpheus", "idade": 10, "tipo": "Gato", "raça": "Nebelung", "peso": 6.5 },
    { "nome": "Nimbus", "idade": 2, "tipo": "Chinchila", "raça": "Padrão", "peso": 0.7 },
    { "nome": "Obsidian", "idade": 6, "tipo": "Cachorro", "raça": "Cane Corso", "peso": 48.0 },
    { "nome": "Pippin", "idade": 1, "tipo": "Furão", "raça": "Sable", "peso": 1.2 },
    { "nome": "Quest", "idade": 3, "tipo": "Cachorro", "raça": "Vizsla", "peso": 24.0 },
    { "nome": "Rhapsody", "idade": 7, "tipo": "Gato", "raça": "Balinês", "peso": 4.1 },
    { "nome": "Solstice", "idade": 4, "tipo": "Cachorro", "raça": "Malamute do Alasca", "peso": 40.0 },
    { "nome": "Tango", "idade": 5, "tipo": "Peixe", "raça": "Tetra Neon", "peso": 0.001 },
    { "nome": "Ursa", "idade": 9, "tipo": "Cachorro", "raça": "Bernese", "peso": 45.0 },
    { "nome": "Vesper", "idade": 2, "tipo": "Gato", "raça": "Ocicat", "peso": 5.8 },
    { "nome": "Whisper", "idade": 6, "tipo": "Cavalo", "raça": "Árabe", "peso": 450.0 },
    { "nome": "Xena", "idade": 4, "tipo": "Cachorro", "raça": "American Pit Bull Terrier", "peso": 26.0 },
    { "nome": "Yara", "idade": 3, "tipo": "Gato", "raça": "Bobtail Japonês", "peso": 3.5 },
    { "nome": "Zenith", "idade": 11, "tipo": "Pássaro", "raça": "Ararajuba", "peso": 0.25 },
    { "nome": "Alvin", "idade": 1, "tipo": "Esquilo", "raça": "Esquilo-da-mongólia", "peso": 0.12 },
    { "nome": "Brutus", "idade": 6, "tipo": "Cachorro", "raça": "Buldogue Inglês", "peso": 24.0 },
    { "nome": "Cleo", "idade": 8, "tipo": "Gato", "raça": "Abissínio", "peso": 4.4 },
    { "nome": "Dexter", "idade": 3, "tipo": "Cachorro", "raça": "Jack Russell Terrier", "peso": 7.5 },
    { "nome": "Elara", "idade": 2, "tipo": "Gato", "raça": "Singapura", "peso": 2.8 },
    { "nome": "Ferdinand", "idade": 5, "tipo": "Touro", "raça": "Miura", "peso": 580.0 },
    { "nome": "Goliath", "idade": 7, "tipo": "Sapo", "raça": "Sapo-boi", "peso": 1.0 },
    { "nome": "Hedwig", "idade": 4, "tipo": "Coruja", "raça": "Coruja-das-neves", "peso": 2.0 },
    { "nome": "Icarus", "idade": 3, "tipo": "Hamster", "raça": "Roborovski", "peso": 0.025 },
    { "nome": "Juno", "idade": 5, "tipo": "Cachorro", "raça": "Pastor Australiano", "peso": 22.0 },
    { "nome": "Kobe", "idade": 8, "tipo": "Réptil", "raça": "Píton-real", "peso": 2.5 },
    { "nome": "Luna", "idade": 2, "tipo": "Gato", "raça": "Vira-lata", "peso": 4.1 },
    { "nome": "Milo", "idade": 4, "tipo": "Cachorro", "raça": "Pug", "peso": 8.0 },
    { "nome": "Nala", "idade": 3, "tipo": "Gato", "raça": "Savannah", "peso": 7.0 },
    { "nome": "Oliver", "idade": 6, "tipo": "Cachorro", "raça": "Cocker Spaniel", "peso": 14.0 },
    { "nome": "Penelope", "idade": 2, "tipo": "Porco", "raça": "Mini Porco", "peso": 40.0 },
    { "nome": "Quincy", "idade": 7, "tipo": "Cachorro", "raça": "Airedale Terrier", "peso": 28.0 },
    { "nome": "Rocky", "idade": 9, "tipo": "Cachorro", "raça": "Staffordshire Bull Terrier", "peso": 17.0 },
    { "nome": "Simba", "idade": 5, "tipo": "Gato", "raça": "Chausie", "peso": 9.5 },
    { "nome": "Triton", "idade": 4, "tipo": "Anfíbio", "raça": "Axolote", "peso": 0.22 },
    { "nome": "Ulysses", "idade": 12, "tipo": "Cachorro", "raça": "Basset Hound", "peso": 29.0 },
    { "nome": "Violet", "idade": 3, "tipo": "Gato", "raça": "LaPerm", "peso": 3.7 },
    { "nome": "Winston", "idade": 8, "tipo": "Cachorro", "raça": "Galgo Inglês", "peso": 33.0 },
    { "nome": "Xerxes", "idade": 15, "tipo": "Pássaro", "raça": "Corvo", "peso": 1.4 },
    { "nome": "Yuki", "idade": 2, "tipo": "Cachorro", "raça": "Spitz Japonês", "peso": 6.0 },
    { "nome": "Zola", "idade": 4, "tipo": "Gato", "raça": "Sokoke", "peso": 4.6 }
]);
// donos
db.createCollection("dono");

db.dono.insertMany([
    {
        "id": 1,
        "nome": "João Silva",
        "telefone": "5511987654321",
        "endereço": "Rua das Flores, 123",
        "animais": ["Biscoito", "Amora", "Mochi"]
    },
    {
        "id": 2,
        "nome": "Maria Souza",
        "telefone": "5511991234567",
        "endereço": "Avenida Paulista, 456",
        "animais": ["Paçoca", "Thor", "Lilith"]
    },
    {
        "id": 3,
        "nome": "Carlos Oliveira",
        "telefone": "5511988776655",
        "endereço": "Rua do Comércio, 789",
        "animais": ["Zelda", "Fígaro", "Salem"]
    },
    {
        "id": 4,
        "nome": "Ana Costa",
        "telefone": "5511987651234",
        "endereço": "Alameda dos Anjos, 101",
        "animais": ["Costela", "Sirius", "Cosmo", "Pixel"]
    },
    {
        "id": 5,
        "nome": "Pedro Santos",
        "telefone": "5511999887766",
        "endereço": "Travessa da Paz, 202",
        "animais": ["Pudim", "Bacon", "Gatsby", "Íris"]
    },
    {
        "id": 6,
        "nome": "Juliana Lima",
        "telefone": "5511981234567",
        "endereço": "Praça da Liberdade, 303",
        "animais": ["Nébula", "Sushi", "Ozzy"]
    },
    {
        "id": 7,
        "nome": "Fernanda Ribeiro",
        "telefone": "5511999998888",
        "endereço": "Estrada Velha, 404",
        "animais": ["Gandalf", "Pipoca", "Zazu", "Crush"]
    },
    {
        "id": 8,
        "nome": "Lucas Gomes",
        "telefone": "5511977776666",
        "endereço": "Rua Nova, 505",
        "animais": ["Ragnar", "Kiwi", "Maestro", "Nagini"]
    },
    {
        "id": 9,
        "nome": "Patrícia Almeida",
        "telefone": "5511966665555",
        "endereço": "Avenida do Sol, 606",
        "animais": ["Tofu", "Jinx", "Orion", "Stuart", "Remi"]
    },
    {
        "id": 10,
        "nome": "Rafael Martins",
        "telefone": "5511955554444",
        "endereço": "Rua da Harmonia, 707",
        "animais": ["Yoda", "Hades", "Nugget", "Donatello", "Pernalonga"]
    },
    {
        "id": 11,
        "nome": "Camila Fernandes",
        "telefone": "5511944443333",
        "endereço": "Ladeira da Esperança, 808",
        "animais": ["Ravi", "Ambar", "Galileu"]
    },
    {
        "id": 12,
        "nome": "Thiago Pereira",
        "telefone": "5511933332222",
        "endereço": "Vila das Águas, 909",
        "animais": ["Pascal", "Rango", "Godzilla", "Oreo"]
    },
    {
        "id": 13,
        "nome": "Amanda Costa",
        "telefone": "5511922221111",
        "endereço": "Condomínio do Lago, 1010",
        "animais": ["Saphira", "Draco", "Voldemort", "Spike"]
    },
    {
        "id": 14,
        "nome": "Gustavo Ferreira",
        "telefone": "5511911110000",
        "endereço": "Rua da Amizade, 1111",
        "animais": ["Nibs", "Faisca", "Rocket", "Gus", "Nemo", "Dory"]
    },
    {
        "id": 15,
        "nome": "Larissa Barbosa",
        "telefone": "5511900009999",
        "endereço": "Avenida Central, 1212",
        "animais": ["Poseidon", "Midas", "Zeus", "Glimmer", "Sombra", "Coral", "Willy", "Bubbles"]
    },
    {
        "id": 16,
        "nome": "Daniel Rocha",
        "telefone": "5511987654322",
        "endereço": "Rua dos Coqueiros, 1313",
        "animais": ["Cronos", "Hércules", "Gaia"]
    },
    {
        "id": 17,
        "nome": "Sandra Dias",
        "telefone": "5511991234568",
        "endereço": "Praça da Alegria, 1414",
        "animais": ["Atena", "Pandora", "Freya", "Merlin", "Nyx", "Yara", "Zola"]
    },
    {
        "id": 18,
        "nome": "Ricardo Pereira",
        "telefone": "5511988776656",
        "endereço": "Avenida da Boa Viagem, 1515",
        "animais": ["Loki", "Apolo", "Odin"]
    },
    {
        "id": 19,
        "nome": "Marina Oliveira",
        "telefone": "5511987651235",
        "endereço": "Rua da Serra, 1616",
        "animais": ["Perséfone", "Titã", "Avalanche"]
    },
    {
        "id": 20,
        "nome": "Guilherme Souza",
        "telefone": "5511999887767",
        "endereço": "Alameda dos Pássaros, 1717",
        "animais": ["Vênus", "Zenith", "Calipso"]
    },
    {
        "id": 21,
        "nome": "Carolina Fernandes",
        "telefone": "5511981234568",
        "endereço": "Rua do Bosque, 1818",
        "animais": ["Zephyr", "Lancelot", "Whisper"]
    },
    {
        "id": 22,
        "nome": "Vitor Lima",
        "telefone": "5511999998889",
        "endereço": "Praça da Amizade, 1919",
        "animais": ["Cínder", "Fable", "Kahlua", "Rhapsody", "Vesper"]
    },
    {
        "id": 23,
        "nome": "Letícia Ramos",
        "telefone": "5511977776667",
        "endereço": "Avenida das Palmeiras, 2020",
        "animais": ["Domino", "Jagger", "Obsidian"]
    },
    {
        "id": 24,
        "nome": "Felipe Santos",
        "telefone": "5511966665556",
        "endereço": "Rua dos Girassóis, 2121",
        "animais": ["Eco", "Gizmo", "Pippin"]
    },
    {
        "id": 25,
        "nome": "Beatriz Castro",
        "telefone": "5511955554445",
        "endereço": "Vila das Artes, 2222",
        "animais": ["Iggy", "Xena", "Yuki"]
    },
    {
        "id": 26,
        "nome": "Mateus Costa",
        "telefone": "5511944443334",
        "endereço": "Rua do Sabiá, 2323",
        "animais": ["Quest", "Solstice", "Tango"]
    },
    {
        "id": 27,
        "nome": "Isabela Almeida",
        "telefone": "5511933332223",
        "endereço": "Alameda das Hortênsias, 2424",
        "animais": ["Ursa", "Avalanche"]
    },
    {
        "id": 28,
        "nome": "Leonardo Ribeiro",
        "telefone": "5511922221112",
        "endereço": "Rua da Primavera, 2525",
        "animais": ["Alvin", "Basil", "Icarus", "Nimbus"]
    },
    {
        "id": 29,
        "nome": "Clara Gomes",
        "telefone": "5511911110001",
        "endereço": "Praça dos Sonhos, 2626",
        "animais": ["Brutus", "Dexter", "Juno", "Oliver", "Quincy", "Rocky", "Ulysses", "Winston"]
    },
    {
        "id": 30,
        "nome": "José Martins",
        "telefone": "5511900009990",
        "endereço": "Avenida da Saudade, 2727",
        "animais": ["Cleo", "Elara", "Milo", "Nala", "Simba", "Violet"]
    },
    {
        "id": 31,
        "nome": "Mariana Barreto",
        "telefone": "5511987654323",
        "endereço": "Rua dos Pinheiros, 2828",
        "animais": ["Ferdinand", "Goliath", "Hedwig", "Kobe", "Penelope", "Triton", "Xerxes"]
    },
    {
        "id": 32,
        "nome": "Gabriel Nogueira",
        "telefone": "5511991234569",
        "endereço": "Avenida dos Ventos, 2929",
        "animais": ["Luna"]
    }
]);

// agendamentos
db.createCollection("agendamento");

db.agendamento.insertMany([
  {
    "id": 1,
    "id_animal": "Biscoito",
    "data_agendamento": "2025-09-05T10:00:00Z",
    "serviço": "Banho e Tosa"
  },
  {
    "id": 2,
    "id_animal": "Paçoca",
    "data_agendamento": "2025-09-05T11:30:00Z",
    "serviço": "Vacinação"
  },
  {
    "id": 3,
    "id_animal": "Salem",
    "data_agendamento": "2025-09-06T14:00:00Z",
    "serviço": "Consulta Veterinária"
  },
  {
    "id": 4,
    "id_animal": "Amora",
    "data_agendamento": "2025-09-06T10:30:00Z",
    "serviço": "Tosa"
  },
  {
    "id": 5,
    "id_animal": "Zazu",
    "data_agendamento": "2025-09-07T09:00:00Z",
    "serviço": "Corte de Unhas"
  },
  {
    "id": 6,
    "id_animal": "Crush",
    "data_agendamento": "2025-09-07T16:00:00Z",
    "serviço": "Revisão de Habitat"
  },
  {
    "id": 7,
    "id_animal": "Fígaro",
    "data_agendamento": "2025-09-08T15:00:00Z",
    "serviço": "Banho"
  },
  {
    "id": 8,
    "id_animal": "Tofu",
    "data_agendamento": "2025-09-08T11:00:00Z",
    "serviço": "Banho e Tosa"
  },
  {
    "id": 9,
    "id_animal": "Sirius",
    "data_agendamento": "2025-09-09T09:30:00Z",
    "serviço": "Adestramento"
  },
  {
    "id": 10,
    "id_animal": "Nemo",
    "data_agendamento": "2025-09-09T17:00:00Z",
    "serviço": "Limpeza de Aquário"
  },
  {
    "id": 11,
    "id_animal": "Jinx",
    "data_agendamento": "2025-09-10T14:30:00Z",
    "serviço": "Vacinação"
  },
  {
    "id": 12,
    "id_animal": "Oreo",
    "data_agendamento": "2025-09-10T10:00:00Z",
    "serviço": "Banho e Tosa"
  },
  {
    "id": 13,
    "id_animal": "Zephyr",
    "data_agendamento": "2025-09-11T09:00:00Z",
    "serviço": "Consulta Veterinária"
  },
  {
    "id": 14,
    "id_animal": "Avalanche",
    "data_agendamento": "2025-09-11T13:00:00Z",
    "serviço": "Banho e Tosa"
  },
  {
    "id": 15,
    "id_animal": "Nala",
    "data_agendamento": "2025-09-12T10:00:00Z",
    "serviço": "Corte de Unhas"
  },
  {
    "id": 16,
    "id_animal": "Rocky",
    "data_agendamento": "2025-09-12T14:00:00Z",
    "serviço": "Vacinação"
  },
  {
    "id": 17,
    "id_animal": "Hércules",
    "data_agendamento": "2025-09-13T11:00:00Z",
    "serviço": "Banho"
  },
  {
    "id": 18,
    "id_animal": "Simba",
    "data_agendamento": "2025-09-13T15:30:00Z",
    "serviço": "Banho e Tosa"
  },
  {
    "id": 19,
    "id_animal": "Pipoca",
    "data_agendamento": "2025-09-14T10:00:00Z",
    "serviço": "Consulta Veterinária"
  },
  {
    "id": 20,
    "id_animal": "Triton",
    "data_agendamento": "2025-09-14T16:00:00Z",
    "serviço": "Revisão de Habitat"
  }
]);