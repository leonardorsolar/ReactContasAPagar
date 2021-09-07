/*
Imagine que você acabou de gerar uma aplicação com o CLI: Create React App.
A aplicação terá um arquivo src/App.js com uma estrutura HTML(JSX)
O teste está dentro do arquivo src/App.test.js
*/

//Estamos importando os métodos render e screen.
/*
render é o método que permitirá renderizarmos nosso componente.
Imagine que você tem uma página vazia, logo, qualquer comando de teste rodado vai dar erro, correto?
Então, quando o render é chamado, ele renderiza o componente dentro desta página e estamos prontos para iniciar o teste.

screen é um método que possui queries dentro dele.
Isso quer dizer que usaremos funções/métodos que estão dentro de screen para capturar as informações que queremos.
Já vamos chegar lá nas próximas linhas.
*/
import { render, screen } from '@testing-library/react';
//Importando nosso componente.
import App from './App';


/*test - que também pode ser encontrado como it -, 
é o método que nos permite escrever um texto descrevendo o 
que um teste bem sucedido deve fazer. No nosso exemplo, renderiza o link "learn react"*/
test('renders learn react link', () => {
//Renderizando o componente App.
  render(<App />);
/*
Atribuindo à constante linkElement a query(método) 
getByText que deve encontrar o elemento que possui o texto /learn react/i.
O trecho /learn react/i é um padrão regex que desabilita o case-sensitive, 
ou seja, ignora a diferença entre letras maiúsculas e minúsculas. Puro Javascript.*/
  const linkElement = screen.getByText(/learn react/i);
/*expect é um comando que faz asserções. O que é isso?
Uma asserção pega um valor booleano (true || false) e 
sempre espera que o retorno seja true. Se o evento retornar falso, o teste falha.*/
  expect(linkElement).toBeInTheDocument();
});
/*Para exemplificar melhor, a linha acima também poderia ser escrita assim:
expect(screen.getByText(/learn react/i)).toBeInTheDocument();*/

/*toBeInTheDocument() é um matcher. O que é isso?
É uma função cujo valor resultante deve ser true em 
relação ao que está testando do expect. Neste caso é estarNoDocumento.*/
// lista de matchers acesse: https://jestjs.io/docs/expect
// https://www.fx.dev.br/iniciando-testes-automatizados-create-react-app/

// segunto teste

//simulação teste ação do usuário de um click:

//Para que esse teste rode com sucesso é necessário importar o userEvent:
import userEvent from  '@testing-library/user-event';
/*O user-event é uma biblioteca complementar que nos permite executar 
ações mais avançadas. A testing library fornece o método fireEvent 
integrado que também nos permite executar algumas simulações, porém o 
mais recomendável para isso é o user-event.*/

test('renders checkbox test', () => {
 render(<App  />);
 userEvent.click(screen.getByText('Check'))
 expect(screen.getByLabelText('Check')).toBeChecked()

});

/*
E já terá um teste dentro do arquivo src/App.test.js. É importante explicar 
aqui que o nome do componente + .test dentro do mesmo diretório é uma 
convenção/boa prática pois a localização do teste fica mais intuitiva e 
não temos problemas de paths enormes em nossos imports.
Exemplificando, se você tem uma pasta chamada UI e dentro dela o componente 
Header.js seu teste será Header.test.js.
Outro uso comum seria ter uma pasta chamada Header e dentro dela o arquivo index.js, 
nesse caso seu arquivo de teste continuaria sendo Header.test.js, só mudaria o caminho do import;
*/