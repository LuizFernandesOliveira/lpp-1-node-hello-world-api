# #1 Hello World:  Minimum API

<img src="https://raw.githubusercontent.com/robsonkades/vscode-express-snippets/master/images/node.png" alt="linguagem" width="80px"/>

### **Problemática**
criar uma API que rode na porta 3333, que tenha a rota GET /welcome e retorne um status 200 e um JSON com a seguinte estrutura:

```json
{
	"message": "Hello World"
}
```
### **Screenshot**

![screenshot](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd890d65-032e-4e7b-8940-5599fd14d606/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210528T154622Z&X-Amz-Expires=86400&X-Amz-Signature=16265f74630c781cae195bce3fa4075df69401d6a896f3d91b187df5052a21c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)


### **Starting**

- instalar dependencias do projeto
	```shellscript
	yarn install
	```
- inicializar aplicação
  ```shellscript
	node index.js
	```
- testar  aplicação
  ```shellscript
	yarn jest --runInBand
	```