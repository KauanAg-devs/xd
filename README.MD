use estes comandos para rodar o código: 
npm install 
npm run test


funcionalidade:

a pasta INTERFACES é responsável pelas interfaces da aplicação. No caso das rotas, a interface da classe Routes é: 

interface RoutesUI {
  routes(): Router;
  startServer(): http.Server,
}

 quando eu uso `class Routes implements RoutesUI {}`, eu to dizendo que essa classe IMPLEMENTA a interface e portanto, a função `routes()` deve retornar Router, enquanto `startServer()` da classe `StartServer` deve retornar http.Server, que é o tipo de `app.listen()`. 

 O nome deste formato de design é DESIGN ORIENTADO POR CONTRATO, um design pattern. Os princípios de SOLID estão fortes neste lugar.
