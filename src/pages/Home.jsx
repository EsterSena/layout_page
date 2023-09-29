import Header from "../components/Header";
import Menu from "../components/Header";
import { Paragra, Title, Container } from "../contexts/UseContext";
import { useEffect, useState } from 'react';

function Home() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [tempo, setTempo] = useState('')
  const [profissao, setProfissao] = useState('')

  function sendForm() {

  }
  return (
    <>
      <Header name={nome}></Header>
      <Container>
        <form className="form" onSubmit={sendForm}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="idade">Idade</label>
            <input
              type="text"
              id="idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Sua idade"
            />
          </div>
          <div className="form-group">
            <label htmlFor="profissao">Profissão</label>
            <input
              type="text"
              id="profissao"
              placeholder="Sua profissão"
              onChange={(e) => setProfissao(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tempo">Tempo de Empresa</label>
            <input
              type="text"
              id="tempo"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
              placeholder="Tempo na empresa"
            />
          </div>

        </form>
        <div className="info">
          <p>Informações:</p>
          <p>Idade: {idade}</p>
          <p>Profissão: {profissao}</p>
          <p>Tempo de empresa: {tempo}</p>
        </div>
      </Container>

    </>
  );
}

export default Home;