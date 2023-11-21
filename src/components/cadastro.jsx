import { useState } from "react";

function Cadastro({ addTarefa }) {
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const handleAddanimal = (e) => {
    e.preventDefault();
    if (descricao.trim() !== '' && imagem.trim() !== '') {
      addTarefa(descricao, imagem);
      setDescricao('');
      setImagem('');
    }
  };

  return (
    <>
      <h2 className="cadastrinho">Oii aumigo, como está? Seu dog está perdido? Ou, você encontrou um dog? Escreva as informações dele aqui que iremos te ajudar!</h2>
      <div className="cadastrar">
        <form onSubmit={handleAddanimal}>
          <label htmlFor="descricao">Coloque o nome dele</label>
          <input type="text" value={descricao} id="descricao" onChange={(e) => setDescricao(e.target.value)} />

          <label className="imagens" htmlFor="imagem">Adicione uma foto do seu animalzinho</label>
          <input type="text" value={imagem} id="imagem" onChange={(e) => setImagem(e.target.value)} />
          
          <button className="botaoCadastro" type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}

export default Cadastro;

