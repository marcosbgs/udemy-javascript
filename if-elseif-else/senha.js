// Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
// pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
// seguintes	mensagens:	
// ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
// ACESSO	NEGADO	caso	a	senha	seja	inválida.

const senhaValida = '1234';

let senhaUsuario = prompt('Digite a senha: ');

const validacaoSenha = senhaUsuario === senhaValida ? 'ACESSO PERMITIDO. SENHA CORRESPONDENTE' : 'ACESSO NEGADO. SENHA INCORRETA';
alert(validacaoSenha);