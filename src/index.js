// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Daniela', nota: 9 },
    { nome: 'Eduardo', nota: 4 }
];

// Função que retorna alunos com nota maior ou igual a 6
const filtrarAlunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

// Testando a função
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
