let {livros ,quantidadeDeLivros} = require('../banco de dados/livros')


const listarLivros = (req, res)=>{

    return res.status(200).json(livros)
}
const selecionarLivro = (req, res)=>{
    const { id } = req.params;

    const livroSelecionado = livros.find((livro)=>{
        return livro.id == id;
    });
    if (!livroSelecionado) {
        return res.status(404).json({
            "mensagem": "Não existe livro para o ID informado."
          });
    }

    return res.status(200).json(livroSelecionado);
}
const adicionarLivro = (req, res)=>{
    const {id} = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(404).json()
    }

    let novoLivro = {
        id : quantidadeDeLivros++,
        titulo,
        autor,
        ano,
        numPaginas,
    }
    console.log(quantidadeDeLivros);
    livros.push(novoLivro);
    res.status(201).json(novoLivro);

}
const substituirLivro = (req, res)=>{
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;
    if (!id) {
        return res.status(404).json({
            "mensagem": "Não existe livro a ser substituído para o ID informado."
          });;
    }
    
    let posicaoDoLivro = livros.indexOf((livro)=>{
        return livro.id == id;
    })

    livroSubstituto = {

        titulo,
        autor,
        ano,
        numPaginas,
    }

    livros.splice(posicaoDoLivro,1,livroSubstituto)
    return res.status(200).json({
        "mensagem": "Livro substituído."
      });
}
const alterarLivro = (req, res)=>{
    const {id} = req.params;
    let { titulo, autor, ano, numPaginas } = req.body;

    let posicaoDoLivro = livros.indexOf((livro)=>{
        return livro.id == id;
    });
    let livroSubstituto  = livros.filter((livro)=>{
        return livro.id == id;
    })

    if (!posicaoDoLivro) {
        return res.status(404).json({
            "mensagem": "Não existe livro a ser substituído para o ID informado."
          });
    }

    if (titulo == undefined) {
        titulo = livroSubstituto[0].titulo
    }
    
    if (autor == undefined) {
        autor = livroSubstituto[0].autor
        console.log(autor);
    }
    if (ano == undefined) {
        ano = livroSubstituto[0].ano
    }
    if (numPaginas == undefined) {
        numPaginas = livroSubstituto[0].numPaginas
    }
  
    livroSubstituto = {
        titulo, 
        autor,
        ano,
        numPaginas,     
    }

    livros.splice(posicaoDoLivro, 1, livroSubstituto)
    return res.status(200).json({
        "mensagem": "Livro alterado."
      });

}
const deletarLivro = (req, res)=>{
    const {id} = req.params;
    let posicaoDoLivro = livros.indexOf((livro)=>{
        return livro.id == id;
    })
    if (!posicaoDoLivro) {
        return res.status(400).json({
            "mensagem": "Não existe livro a ser removido para o ID informado."
          })
    }
    livros.splice(posicaoDoLivro,1)
    return res.status(200).json({
        "mensagem": "Livro removido."
      });

}

module.exports = {
    listarLivros,
    selecionarLivro,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    deletarLivro

}

