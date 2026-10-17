const livro = {
    titulo: "O senhor dos Anéis",
    autor: "J. R. R. Tolkien",
    ano: 1954,
    disponivel: true

     // O método já nasce aqui dentro
    ,emprestar() {
        this.disponivel = !this.disponivel; // Aqui o 'this' funciona 100% das vezes
        console.log(`Status de disponibilidade atualizado: ${this.disponivel}`);
    }
};

 console.log(livro);

 console.log('O livro', livro.titulo, "foi escrito pelo autor", livro.autor, 'no ano de',livro.ano);

 livro.disponivel = false;

 console.log(livro.disponivel);

 livro.preco = 49.90;

 console.log(livro.preco);

 // Adicionando o método por fora (Note o uso do = em vez de :)
livro.emprestar = function() {
    livro.disponivel = !livro.disponivel; // Aponta diretamente para o objeto correto
    console.log(`Status de disponibilidade atualizado: ${livro.disponivel}`);
};

// Testando o método:
livro.emprestar(); // Exibe: Status de disponibilidade atualizado: false

delete livro.autor;

console.log(livro);