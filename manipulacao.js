const usuario = {
  nome: "Carlos",
  idade: 28
};

console.log(usuario.nome); // Saída: Carlos
console.log(usuario['nome']); // Saída: Carlos (também)

// Modificando uma propriedade existente
usuario.idade = 29; 

// Adicionando uma nova propriedade que não existia
usuario.cidade = "São Paulo"; 

console.log(usuario.cidade);

delete usuario.idade; // A chave 'idade' deixa de existir no objeto

/*• Object.keys(objeto): Devolve uma lista (array) com todas as chaves do objeto.
• Object.values(objeto): Devolve uma lista (array) com todos os valores do objeto.
• Object.entries(objeto): Devolve uma lista de listas, contendo [chave, valor]. Muito útil para usar com loops. */