# Hello, Semana 10!

Como você está lidando com esse processo de transição? 

Aprender a aprender pode ser muito doloroso, mas eu te garanto uma coisa: é libertador! Chegamos na décima semana! E vocês estão voandooo!  🚀

* Vamos começar com um momento só nosso ❤️
* Depois vamos revisar alguns dos conceitos estudados nas últimas semanas
* De assunto novo veremos somente a implementação de 2 verbos do protocolo HTTP (PUT e PATCH)
* E de quebra teremos bastante treino!

---

## Revisão

Essa revisão vai te ajudar a relembrar conceitos e modelos para estabelecer o seu mapa mental de aprendizdo! 😃

### Node.js

É um interpretador Javascript que não depende do navegador. 

Ele é formado pelo V8, motor interpretador de Javascript criado pelo Google, e pela libuv, uma biblioteca que deu características de linguagem back-end para o node.

Node.js revolucionou a forma de programar em Javascript, pois a linguagem evoluiu de uma forma de dar vida aos elementos no navegador para uma linguagem capaz de rodar sistemas em computadores/servidores.

### HTTP

É o protocolo de transferência de hipertexto. 

O principal protocolo de comunicação entre computadores utilzados na internet.

Ele cria as regras para enviar e receber informações na internet.

Ele é responsável pelo o que acontece por debaixo dos panos quando usamos a internet.

#### Verbos ou métodos

Para além de GET e POST, temos também no nosso leque de principais métodos o PUT, DELETE e PATCH.

É simples de entender:

* GET: para consultas
* POST: para criação de recursos
* DELETE: para remoção de recursos
* PUT e PATCH: para atualização de recursos


### API

Interface entre aplicativos e programação.

Se uma interface de um sistema é criado para o usuário final, a API é desenvolvida para que um sistema possa usar as funcionalidades de outro sistema.

Interface ideal para que um sistema se comunique com outro sistema.

### REST e RESTful

Rest é uma abstração(forma de usar as regras) do protocolo HTTP para simplificar a construção de um web service, ou seja quem cria uma API com as restrições e regras do modelo Rest está criando na verdade API Restful.

O grande objetivo desse modelo é fazer com que os recursos estejam disponíveis através de URLs.

#### Algumas das regras: 

* Adotar convenção de URLs
* Basear em recursos
* Usar os verbos HTTP para indicar ações
* Ser stateless, ou seja, toda requisição é autossuficiente/independente

### MVC


#### Server.js
> Aqui no server que você vai chamar o app para escutar a porta e disponibilizar toda a aplicação a partir do localhost

#### App.js
> Aqui no app que você vai usar a rota raiz 

#### 📂Routes
>  Aqui nas rotas você vai usar os verbos para  executar os controllers 

#### 📂Controller
> Aqui no controller você vai acessar os dados do seu model a partir das requisições e enviar respostas

#### 📂Model
> Por enquanto estamos apenas guardando nosso JSON aqui, mas no futuro será o lugar onde você irá modelar os esquemas de dados para o banco. Não fique ansiosa! Acredite no processo, ele funciona!

#### 📂View
> Aqui você não precisa fazer nada, mas é onde a dev front-end cria as telas bonitonas para usar os dados que você trata e disponibiliza.


---

## Verbos do dia: PUT e PATCH

Os verbos `PUT` e `PATCH` servem para atualização de um recurso.

Mas quando escolher um ou outro? Não fique confusa! O `PUT`serve para atualização do recurso inteiro enquanto o `PATCH` é uma atualização de um ou mais campos daquele recurso.

**Verbo PUT:**

* Geralmente usado com parâmetro
* Deve passar todos os dados do recurso preenchidos, independente de quais dados você de fato editou. 

Por exemplo, digamos que seu model músicas possui os atributos nome e artista – e você editou apenas o nome. A documentação indica que você deve passar ambos os atributos preenchidos para o serviço (mesmo só tendo editado o nome).

Para resolver isso de forma elegante a adote por convenção, um quinto verbo HTTP: PATCH.

**Verbo PATCH:**

* Use para editar o recurso sem a necessidade de enviar todos as chaves e valores do seu model
* Envia de fato o que foi alterado 
* Além também de dizer qual o ID como parâmetro, para que o serviço saiba o que vai ser alterado.

Tem material de **Apoio** pra estudar em casa! A [documentação está disponível aqui](https://www.).


---

## Tarefinhas

**Exemplos:**

| Recurso | Descrição |
| --- | --- |
| `/albuns` | A partir de um parâmetro para escolher um determinado album, vamos alterar o dado de name, usando o verbo PUT|

| Recurso | Descrição |
| --- | --- |
| `/albuns` |  A partir de um parâmetro para escolher um determinado album, vamos alterar o dado de name, usando o verbo PATCH|

| Recurso | Descrição |
| --- | --- |
| `/músicas` | A partir do parâmetro ID para escolher uma determinada música, vamos alterar todos os dados dessa música usando o PUT, tornando uma música completamente nova no model|

| Recurso | Descrição |
| --- | --- |
| `/músicas` | A partir de um parâmetro para escolher uma determinada música, usando o PATCH vamos alterar apenas a imagem(vms pegar no Google) e o artista(vms trocar pelo nome de batismo)|

---
**Desafio:**
#### Calma! É só mais um dever de casa e tá na pastinha desafio!

Já estamos treinando com nossos exemplos em aula, já já será a vez de você brilhar no mundo e chamar as migas tudo no grupo pra estudar juntas! haha

## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [blog](https://simaraconceicao.com/blog)
- email: contato@simaraconceicao.com
