# Controle Logístico

[![GitHub](https://img.shields.io/github/license/rwellingtonr/Logistica?color=blue)](https://github.com/rwellingtonr/Logistica/blob/main/LICENSE.md) ![GitHub last commit](https://img.shields.io/github/last-commit/rwellingtonr/Logistica) ![GitHub repo size](https://img.shields.io/github/repo-size/rwellingtonr/Logistica) ![GitHub top language](https://img.shields.io/github/languages/top/rwellingtonr/Logistica)

<!-- Anchors -->
<h1 style="padding-top: 0.5em">Tópicos</h1>
<ul style="font-size: large">
  <li ><a href="#Running_Locally">Instalação</a></li>
  <li ><a href="#Use_Cases">Utilização</a>
  <ul>
        <li><a href="#Cadastro">Cadastro de Item</a></li>
        <li><a href="#Venda">Venda</a></li>
        <li><a href="#Atualizacao">Atualização</a></li>
        <li><a href="#Requisicao">Requisição</a></li>
        <li><a href="#Deletar">Deletar Item</a></li>
    </ul>
  </li>
  <li ><a href="#Components">Componentes</a>

  </li>
  <li ><a href="#Technologies">Tecnologias</a></li>
</ul>

<h1 id="Running_Locally" style=" padding-top: 0.5em">Instalação</h1>

```bash
git clone https://github.com/rwellingtonr/Logistica.git

# open the folder
cd Logistica

#open the text editor
code .

#install the dependencies
npm i || yarn

# start the app on a new terminal window
npm run dev || yarn dev
```

<div id="Use_Cases" style="align: left; padding-top: 0.5em; text-align: justify; font-size: 1.1em ">
  <h1>Utilização</h1>
  <p>A fim de testar esta aplicação, será necessário a utilição de um software do tipo API Client, como, por exemplo, o Postman ou Insomnia.</p>

  <div style="text-align: justify; font-size: 1.1em">
  <h2 id="Cadastro" >Cadastro de Item</h2>
  <p>Para cadastrar um novo produto, realize uma requisição  no método POST ao servidor. Favor, siga os seguintes passos:</p>
  <ol>
  <li>Ajuste o método para POST e direcione à rota http://localhost:3000/cadastro-de-produto</li>
  <li>Passe os seguinte parâmetros:</li>
   <strong style="color: lightgreen">{
 "tipo": "texto",
  "item": "texto",
  "descricao": "texto",
  "quantidade": número inteiro positivo,
 "custo_unitario": número real positivo,
  "margem_de_lucro": número real positivo
}</strong>
  <li>Substitua os valores, como, texto pelo respectiva informação</li>
  <li>Submeta a requisição ao servidor.</li>
  <li>A API ira cadastrar o devido produto e realizará o cálculo de custo de venda (custo final) e sua respectiva receita líquida (lucro)</li>
  <li>Assim que cadastrado o item, o sistema retornará as informações que foram cadastradas no banco de dados</li>
  </ol>
  </div>

<div style="text-align: justify; font-size: 1.1em">
  <h2 id="Venda" >Vendas</h2>
  <p ></p>
<p>Para vender um determinado produto, realize uma requisição do método POST ao servidor. Favor, siga os seguintes passos:</p>
  <ol>
    <li>Ajuste o método para POST e direcione à rota http://localhost:3000/venda</li>
    <li>Passe os seguinte parâmetros:</li>
   <strong style="color: lightgreen">{
"client_name": "nome do cliente",
  "item": "item a ser vendido",
 "qtdProduto": número inteiro positivo
}</strong></li>
    <li>Submeta a requisição ao servidor.</li>
    <li>A API irá vender o determinado item e irá decrementar a quantidade vendida do valor total</li>
    <li>Ao finalizar a operação, o servidor irá retornar os dados da venda</li>
  </ol>
</div>

<div id="Atualizacao" style="text-align: justify; font-size: 1.1em">
  <h2  > Atualização</h2>
  <p>A fim atualizar a quantidade do produto no estoque, realize uma requisição do método PUT ao servidor. Favor, siga os seguintes passos:</p>
 <ol>
    <li>Ajuste o método para PUT e direcione à rota http://localhost:3000/update-quantidade</li>
    <li>Passe os seguinte parâmetros:</li>
    <strong style="color: lightgreen">{
"item": "item à ser atualizado",
"qtdProduto": número inteiro
}</strong>
    <li>O valor do número real realizara o incremento ou decremento da quantidade do item em estoque</li>
    <li>Ao término, o sistema retornará as informações do item atualizado</li>
  </ol>
</div>

<div id="Requisicao" style="text-align: justify; font-size: 1.1em">
  <h2  >Requisição </h2>
  <p>Listagem de todos os itens existentes no banco de dados e suas respectivas informações, como: id, tipo, preço de venda, quantidade, ...</p>
  <p>Segue, abaixo, o passo-a-passo:</p>
  <ol>
    <li>Ajuste o método para GET e direcione à rota http://localhost:3000/itens-cadastrados</li>
    <li>Envie esta requisição ao servidor</li>
    <li>O sistema listará todos os itens cadastrados previamente</li>
  </ol>
</div>

<div id="Deletar" style="text-align: justify; font-size: 1.1em">
  <h2>Deletar Item</h2>
  <p>A fim deletar um item do banco de dados (estoque), realize uma requisição do método DELETE ao servidor. Favor, siga os seguintes passos:</p>
  <ol>
    <li>Ajuste o método para DELETE e direcione à rota http://localhost:3000/deletar-item</li>
    <li>Passe os seguinte parâmetros:</li>
    <strong style="color: lightgreen">{
 "item": "item à ser excluido do sistema"
}</strong>
    <li>Envie esta requisição</li>
    <li>Ao término, o sistema mostrará as respectivas informações do item excluido</li>
  </ol>
</div>

<div id="Components" style="text-align: justify;padding-top: 0.5em; font-size: 1.1em">
  <h1>Componentes</h1>
  <p>O código está separado por pasta onde cada uma representa uma função no desenvolver do sistema, sendo:</p>
  <ul>
    <li><strong style="color:lightblue">Controller:</strong> Realizam o controle dos Services. Estruturam os dados a serem enviados aos respectivos serviços (Services)</li>  
    <li><strong style="color:lightblue">Services: </strong>Realizam os serviços de criar, atualizar, procurar e deletar itens do banco de dados</li>
    <li><strong style="color:lightblue">Connection: </strong>Armazenado o arquivo que realiza a conexão com o servidor</li>  
    <li><strong style="color:lightblue">@Types: </strong>Adiciona tipagem à API do express</li>
    <li><strong style="color:lightblue">Job: </strong>Realiza as regras de negócio. Implementada a conta de receita bruta e receita líquida</li>
    <li><strong style="color:lightblue">Middleware: </strong>Autentica os dados passados para a função de atualização e venda de itens</li>
    <li><strong style="color:lightblue">Routes: </strong>Organiza as rotas utilizadas no sistema</li>
  </ul>
</div>

<h1 id="Technologies" style="padding-top: 0.5em">Tecnologias</h1>

| Back-End  | Database |   Test   |
| :-------: | :------: | :------: |
|  NodeJS   |  SQLite  | Insomnia |
| ExpressJS |  Prisma  |
|   Cors    |
