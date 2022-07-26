enum profissao {
    Atriz,
    Padeiro
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: profissao
}

let pessoa1: pessoa = {
    nome: "maria",    
    idade: 29,
    profissao: profissao.Atriz
}

let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro
}

let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
}

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
}

