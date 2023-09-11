let {quantidadeDeAlunos, dadosAlunos} = require('../dados/alunos')


const visualizarDados = (req, res)=>{
    return res.status(200).json(dadosAlunos)
}
const obterDados = (req, res)=>{
    const { id } = req.params;
    
    const verificadorDeAluno = dadosAlunos.find((aluno)=>{
        return aluno.id == id;
        
    });
    console.log(verificadorDeAluno)
    
    if (!verificadorDeAluno) {
        return res.status(404).json({"mensagem":"ID deve ser um número válido"})

    }else{
        res.status(200).json(verificadorDeAluno);
    }
}
const adicionarAluno = (req, res)=>{
    console.log(req.body);
    const {nome, sobrenome, idade, curso } = req.body;

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({"mensagem":" Falta adicionar o nome"});
    }
   
    if (idade <= 18) {
        return res.status(400).json({"mensagem":"Falta adicionar o curso"});
    }
    if (nome == '' || nome == ' ' || sobrenome == '' || sobrenome == ' ' || curso == '' || curso == ' ') {
        
        return res.status(400).json({"mensagem":"Foi adicionado um dado invalido"});

    }

    const alunoNovo = {
        id : quantidadeDeAlunos++,
        nome,
        sobrenome,
        idade,
        curso
    }
 
    dadosAlunos.push(alunoNovo)

    return res.status(201).json(dadosAlunos)

};
const deletarAluno = (req, res) => {
    const { id } = req.params;
    


    const posicaoDoAluno = dadosAlunos.findIndex((aluno) => {
        return aluno.id == id;
    });

    if (posicaoDoAluno === -1) {
        return res.status(404).json();
    }
    
    quantidadeDeAlunos --;
    dadosAlunos.splice(posicaoDoAluno, 1);

    return res.status(200).json();
};


module.exports = {

    visualizarDados,
    obterDados,
    adicionarAluno,
    deletarAluno

}