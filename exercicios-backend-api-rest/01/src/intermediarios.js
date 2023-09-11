const cursos = require('./dados/cursos')

const validarSenha = (req, res, next)=>{
    
    const {senha} = req.query;
    
    if (!senha) {
        res.status(401).json({"mensagem":"A senha não foi inserida tente novamente"})
    }else{
        if (senha == "cubos123") {
            
            next();

        }else{
            
            res.status(401).json({"mensagem":"A senha está incorreta tente novamente"})
        }

    }
};
const validarCurso = (req, res, next)=>{
    const {curso} = req.body;
    
    if (!curso) {
        return res.status(404).json({"mensagem":"curso não foi inserido"});
    }
    for (const cursoSelecionado of cursos) {
        if (cursoSelecionado == curso) {
            next();
        }
    }
    return res.status(404).json({"mensagem":"O curso informado não é valido"});

}
module.exports = {
    validarSenha,
    validarCurso
}