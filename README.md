# Teste - TTWGroup

## Instruções

1. Deve se fazer fork deste repositório

2. Criar um branch com o seu user github

2. Efetuar commit a cada funcionalidade implementada

3. npm install para configurar as dependências do projeto

4. Ao finalizar as atividades efetuar pull request da sua branch para a branch de mesmo nome no repositório original

## Backend

1. Criar um banco de dados no mongo chamado ttwgroup

2. Importar a coleção de hotel (/data/hotels.json)

3. Implementar funções de persistência da coleção hotel (remove hotel, update hotel, insert hotel, find hotel by id, list all hotels)

4. Implementar API hotel(delete hotel, update hotel, post hotel, get hotel by id, get all hotels, validar parametros, tratar possíveis erros de servidor)

## Frontend

1. Usando AngularJS 1.x, criar um rota "/admin" para acesso ao crud

2. Implementar o hotel controller e service para consumir a api

3. Criar as funcionalidades de CRUD api através da rota "/admin"

4. A partir da rota inicial "/" devem ser renderizados, de forma aleatória 3 hotéis

---

## Resultado esperado

1. pull request com as devidas implementações

2. atualizar os 3 documentos iniciais do mongo, através da aplicação

3. remover 3 hoteis iniciais da coleção mongo

4. criar 3 novos documentos na coleção hotel

5. exportar a coleção hotel e substituir o arquivo /data/hotels.json

## Diferencias

- Utilização de promises
- Utilização de bootstrap(sem modificar o core)
- Testes unitários(frontend e/ou backend)

## Observações

- Em caso de dúvidas ou bug abra uma issue

---

## Exemplo de hotel

```javascript
{
  hotel: 'Hotel',
  resort: 'Resort',
  latitude: 63.3,
  longitude: 89.0,
  stars: 10,
  tags: ['hotel','10 estrelas','melhor hotel'],
  description: {
    overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rooms: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    amenities: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
}
```
