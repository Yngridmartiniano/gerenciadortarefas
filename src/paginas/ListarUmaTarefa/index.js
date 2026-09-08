

import './index.css';
import { useParams } from 'react-router-dom';

import tarefas from '../../mook/tarefas';


function ListarUmaTarefa(){
    const tarefa = tarefas.find((item) => String(item.id) === String(id));
    if (!tarefa) {
        return <p>Tarefa não encontrada.</p>
    }

    const {id,titulo, descricao, responsavel} = tarefa;
    return(

        <section>
            <header>
            <p>Listar Tarefa</p>
            </header>
            <div>
                <h2>#{id} - {titulo}</h2>
                <p>Responsável: {responsavel}</p>
                <p>{descricao}</p>
            </div>
        </section>
       
    )
}

export default ListarUmaTarefa