const frisby = require('frisby');

const message = 'Hello World!';

test('verifica se retorna o json e status corretos ao acesssar /welcome', () => {
  frisby.get('http://localhost:3333/welcome')
    .expect('status', 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(result.message).toBe(message);
    });
});
