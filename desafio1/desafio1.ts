
interface Funcionario { 
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}

function listar(lista: string) {
    for (const item of lista) {
        console.log(item)
    }
}

listar(funcionarioObj.nome)


