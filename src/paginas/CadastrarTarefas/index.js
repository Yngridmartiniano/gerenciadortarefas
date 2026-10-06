import { useState } from 'react';
import {useNavigate } from 'react-router-dom';


import './index.css';

import tarefas from '../../mook/tarefas';

function CadastrarTarefa() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();

    function cadastrarTarefa(e) {
        e.preventDefault()

        if (!titulo.trim()) {
            setError("O campo TITULO não pode estar vazio!!!");
            return;
        }
        if (!descricao.trim()) {
            setError("O campo DESCRÇÃO não pode estar vazio!!!");
            return;
        }
        if (!responsavel.trim()) {
            setError("O campo RESPONSÁVEL não pode estar vazio!!!");
            return;
        }

        try {

            console.log("Tarefa: " + titulo)
            console.log("Responsável: " + responsavel)
            console.log("Descrição: " + descricao)

            const addTarefa = {
                'id': tarefas.length + 1,
                'titulo': titulo,
                'descricao': descricao,
                'responsavel': responsavel
            }
            tarefas.push(addTarefa);
            setTitulo("");
            setResponsavel("");
            setDescricao("");

            navigate(-1)
        } catch (error) {
            console.log("Erro ao cadastrar tarefa" + error)
        }
    }

    return (
        <main>
            <header>
                <h1>Nova Tarefa</h1>
            </header>
            <section>
                <h2>Formulário para cadastro de tarefas</h2>
                <p>Entre com todos os campos!!!</p>
                {
                    error && (
                        <div className='error'>
                            <p>{error}</p>
                        </div>
                    )
                }
                <div className='formulario'>
                    <form onSubmit={cadastrarTarefa}>
                        <label>Nome da Tarefa</label>
                        <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />

                        <label>Descrição</label>
                        <textarea value={descricao} onChange={e => setDescricao(e.target.value)} ></textarea>

                        <label>Responsável</label>
                        <input type="text" value={responsavel} onChange={e => setResponsavel(e.target.value)} />

                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default CadastrarTarefa;