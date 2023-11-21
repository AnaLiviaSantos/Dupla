import { useState } from 'react';
import './App.css';
import Cadastrar from './components/cadastro.jsx';
import Tarefa from './components/tarefa.jsx'; 
import Filtrar from './components/filtrar';

function App() {
  const [listaTarefas, setListaTarefas] = useState([
    { id: 1, descricao: "Théo", imagem: "https://www.abtpet.org.br/wp-content/uploads/2021/06/leish.jpg", isFinalizado: false },
    { id: 2, descricao: "Lia", imagem: "https://www.petelegante.com.br/media/dicas/cachorro-feliz-com-corrente-de-a%C3%A7o.jpg", isFinalizado: true },
    { id: 3, descricao: "Luna", imagem: "https://webcachorros.com.br/wp-content/uploads/2014/03/cao-disperso-com-os-olhos-espertos-muito-tristes-triste_75817-703.jpg", isFinalizado: false },
  ]);

  const addTarefa = (txtDescricao, txtImagem) => {
    const newTarefas = [
      ...listaTarefas,
      {
        id: Math.floor(Math.random() * 10000000),
        descricao: txtDescricao,
        imagem: txtImagem,
        isFinalizado: false,
      }
    ];

    setListaTarefas(newTarefas);
  }

  const concluirTarefa = (id) => {
    const newTarefas = listaTarefas.map((item) => {
      if (item.id === id) {
        return { ...item, isFinalizado: !item.isFinalizado };
      }
      return item;
    });

    setListaTarefas(newTarefas);
  }

  const removerTarefa = (id) => {
    const newTarefas = listaTarefas.filter(item => item.id !== id);
    setListaTarefas(newTarefas);
  }

  const [filtrar, setFiltrar] = useState('Todos');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  return (
    <>
      <div className="app">
        <Cadastrar addTarefa={addTarefa} />
        <Filtrar filtrar={filtrar} setFiltrar={setFiltrar}  
          search={search} setSearch={setSearch}  
          setSort={setSort}/>
        <div className='listaTarefas'>
          {
            listaTarefas
              .filter(item => {
                if (item.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                  return item;
                }
              })
              .filter(item => filtrar === "Todos" ? true :
                filtrar === "Concluidas" ? item.isFinalizado == true :
                  item.isFinalizado == false)
              .sort((a, b) => sort === 'Crescente' ? a.descricao.localeCompare(b.descricao) :
                sort === 'Decrescente' ? b.descricao.localeCompare(a.descricao) : false)
              .map((item) => (
                <Tarefa key={item.id} item={item}
                  concluirTarefa={concluirTarefa}
                  removerTarefa={removerTarefa} />
              ))
          }
        </div>
      </div>
    </>
  )
}

export default App;

