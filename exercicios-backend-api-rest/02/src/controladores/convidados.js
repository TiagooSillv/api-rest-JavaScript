let listaDeConvidados = require ('../bancoDeDados/listaDeConvidados')

const convidados = (req, res)=>{
    const {nome} = req.query;

    if (!nome) {
        
       return res.status(200).json(listaDeConvidados);
    }
    for (const nomeDeConvidado of listaDeConvidados) {
        if (nomeDeConvidado == nome){
            return res.status(200).json({"mensagem":"Liberado"})
        }
    }
    return res.status(400).json({"mensagem":"O nome informado não está na lista"})
}
const adicionarConvidado = (req, res)=>{
    const {nome} = req.body;

    if (!nome) {
        return res.status(200).json({"mensagem":"Favor adicionar o nome"});
    }
    for (const nomeDeConvidado of listaDeConvidados) {
        if (nomeDeConvidado == nome){
            return res.status(200).json({
                "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
            })
        }
    }
    listaDeConvidados.push(nome);
    return res.status(200).json({
        "mensagem": "Convidado adicionado."
    })    
} 
const deletarConvidado = (req, res) => {
    const {nome} = req.body;

    if (!nome) {
        return res.status(404).json({"mensagem":"Favor adicionar o nome"})
    }
    const posicaoDoNome = listaDeConvidados.findIndex((convidado)=>{
        return convidado == nome;
    })
    if (posicaoDoNome == -1) {
        return res.status(404).json({
            "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
        })
    }

    listaDeConvidados.splice(posicaoDoNome,1)
    return res.status(200).json({"mensagem":"O convidado foi removido"})
}
module.exports = {
    convidados,
    adicionarConvidado,
    deletarConvidado
};
