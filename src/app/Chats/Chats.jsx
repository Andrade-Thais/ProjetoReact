import React, { useState } from 'react';
import { Menu } from '../../site/Components/menu';
import './styles.css';
import Ketlyn from './assets/Perfil.png';

export default function Chats() {
  const [conteudoPedido, setConteudoPedido] = useState([]);
  const [mostrarProximasOpcoes, setMostrarProximasOpcoes] = useState(false);
  const [opcoesDesejadas, setOpcoesDesejadas] = useState([]);
  const [ultimaOpcaoDesejada, setUltimaOpcaoDesejada] = useState('');
  

  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };


  function handleOpcao(opcaoDesejada) {
    setUltimaOpcaoDesejada(opcaoDesejada);
    setOpcoesDesejadas([...opcoesDesejadas, opcaoDesejada]);
    setMostrarProximasOpcoes(true);

  }

  function handleSelecao(opcaoSelecionada) {
    setConteudoPedido([...conteudoPedido, opcaoSelecionada]);
  }

  function handleVoltar() {
    setUltimaOpcaoDesejada('')

    setMostrarProximasOpcoes(false)
  }

  function handleOpcoes(event) {
    event.preventDefault();
    const opcoesSelecionadas = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    setOpcoesDesejadas([...opcoesDesejadas, ...opcoesSelecionadas]);
    setConteudoPedido([...conteudoPedido, ...opcoesSelecionadas]);
    setMostrarProximasOpcoes(true);
    console.log(opcoesSelecionadas);
  }


  function handleOpcoesSelecionadas() {
    const opcoesSelecionadas = Array.from(opcoesSelecionadas).map((opcao) => opcao.name)

  }

  


  return (
    <>
      <Menu />
      <h1 className="title">Novo pedido</h1>
      <div className="container">
        <div className="menu_opcoes">
          <div className="intro">
            <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
            <p className="text">
              Olá, seja bem-vindo(a)! selecione o que deseja adicionar ao seu pedido!
            </p>
          </div>

          <div className="btn__opcoes">
            <button className="opcao" onClick={() => handleOpcao('Bolos')}>
              Bolos
            </button>
            <button className="opcao" onClick={() => handleOpcao('Doces')}>
              Doces
            </button>
            <button className="opcao" onClick={() => handleOpcao('Salgados')}>
              Salgados
            </button>
            <button className="opcao" onClick={() => handleOpcao('Mini Lanches')}>
              Mini Lanches
            </button>
            <button className="opcao" onClick={() => handleOpcao('Serviços de Buffet')}>
              Serviços de Buffet
            </button>

          </div>
          <button className="voltar" onClick={handleVoltar} >
            <i className="icone fa-solid fa-rotate-left fa-2xl" style={{ color: '#ffffff' }}></i>
          </button>
        </div>
      </div>

      <div className="container">
        {ultimaOpcaoDesejada === 'Bolos' && mostrarProximasOpcoes === true && (
          <div className="menu_opcoes">
            <div className="intro">
              <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
              <p className="text">
                Você escolheu Bolos. Confeitamos bolos personalizados com personagens ou flores com papelaria de luxo. Confira as opções abaixo!</p>
            </div>
            <div name="opcoes" className="btn__opcoes">
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao1"
                  onChange={() => handleSelecao('Bolo Personalizado')}
                />
                <label className="opcao labels" htmlFor="opcao1">
                  Bolo Personalizado
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao2"
                  onChange={() => handleSelecao('Bolo Comum')}
                />
                <label className="opcao labels" htmlFor="opcao2">
                  Bolo Comum
                </label>
              </div>

            </div>
              <div className='quantidade-container'>
                <p>Escolha a quantidade:</p>
                <div>
                  <button className="btnDiminuir" onClick={diminuirQuantidade}>-</button>
                  <span>{quantidade}</span>
                  <button className="btnAumentar" onClick={aumentarQuantidade}>+</button>
                </div>
                {/* Outro conteúdo relacionado aos bolos */}
              </div>

              <div className="send">
              <button className="voltar" onClick={handleVoltar}>
                <i className="icone fa-solid fa-rotate-left fa-2xl" style={{ color: '#ffffff' }}></i>
              </button>
              <button
                type="submit"
                className="opcao"
                onClick={handleOpcoes}
              >
                Próximo
              </button>

            </div>

          </div>
        )}
      </div>

      <div className="container">
        {ultimaOpcaoDesejada === 'Doces' && mostrarProximasOpcoes === true && (
          <div className="menu_opcoes">
            <div className="intro">
              <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
              <p className="text">
                Você escolheu Doces. São doces de 10g que compõem de htmlForma deliciosa a hora do Parabéns!!! Temos as opções abaixo, clique e escolha: </p>            </div>
            <div name="opcoes" className="btn__opcoes">
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao1"
                  onChange={() => handleSelecao('Brigadeiro')}
                />
                <label className="opcao labels" htmlFor="opcao1">
                  Brigadeiro
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao2"
                  onChange={() => handleSelecao('Beijinho')}
                />
                <label className="opcao labels" htmlFor="opcao2">
                  Beijinho
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao3"
                  onChange={() => handleSelecao('Cajuzinho')}
                />
                <label className="opcao labels" htmlFor="opcao3">
                  Cajuzinho
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao4"
                  onChange={() => handleSelecao('Brigadeiro de Nutella')}
                />
                <label className="opcao labels" htmlFor="opcao4">
                  Brigadeiro de Nutella
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao5"
                  onChange={() => handleSelecao('Brigadeiro de Paçoca')}
                />
                <label className="opcao labels" htmlFor="opcao5">
                  Brigadeiro de Paçoca
                </label>
              </div>
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao7"
                  onChange={() => handleSelecao('Bicho de pé')}
                />
                <label className="opcao labels" htmlFor="opcao7">
                  Bicho de Pé
                </label>
              </div>
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao9"
                  onChange={() => handleSelecao('Cascata de Chocolate')}
                />
                <label className="opcao labels" htmlFor="opcao7">
                  Cascata de Chocolate
                </label>
              </div>
            </div>
            <button className="voltar" onClick={handleVoltar}>
              <i className="icone fa-solid fa-rotate-left fa-2xl" style={{ color: '#ffffff' }}></i>
            </button>
            <button
              type="submit"
              className="opcao"
              onClick={handleOpcoes}
            >
              Próximo
            </button>
          </div>
        )}
      </div>

      <div className="container">
        {ultimaOpcaoDesejada === 'Salgados' && mostrarProximasOpcoes === true && (
          <div className="menu_opcoes">
            <div className="intro">
              <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
              <p className="text">
                "Feitos com os melhores ingredientes, nossos salgados são a escolha ideal para uma explosão de sabores na sua festa. Clique agora e mergulhe nessa deliciosa seleção!"</p>            </div>
            <div name="opcoes" className="btn__opcoes">
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao1"
                  onChange={() => handleSelecao('Coxinha')}
                />
                <label className="opcao labels" htmlFor="opcao1">
                  Coxinha
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao2"
                  onChange={() => handleSelecao('Bolinho de Queijo')}
                />
                <label className="opcao labels" htmlFor="opcao2">
                  Bolinhos de Queijo
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao3"
                  onChange={() => handleSelecao('Bolinho de carne')}
                />
                <label className="opcao labels" htmlFor="opcao3">
                  Bolinho de Carne
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao4"
                  onChange={() => handleSelecao('Esfiha de Calabresa')}
                />
                <label className="opcao labels" htmlFor="opcao4">
                  Esfiha de Calabresa
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao5"
                  onChange={() => handleSelecao('Esfiha de Carnd')}
                />
                <label className="opcao labels" htmlFor="opcao5">
                  Esfiha de Carne
                </label>
              </div>
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao7"
                  onChange={() => handleSelecao('Risole')}
                />
                <label className="opcao labels" htmlFor="opcao7">
                  Risole
                </label>
              </div>
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao8"
                  onChange={() => handleSelecao('Kibe')}
                />
                <label className="opcao labels" htmlFor="opcao8">
                  Kibe
                </label>
              </div>
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao9"
                  onChange={() => handleSelecao('Esfiha de Frango')}
                />
                <label className="opcao labels" htmlFor="opcao9">
                  Esfiha de Frango
                </label>
              </div>
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao10"
                  onChange={() => handleSelecao('Crepe Suiço')}
                />
                <label className="opcao labels" htmlFor="opcao10">
                  Crepe Suíço
                </label>
              </div>

            </div>
            <button className="voltar" onClick={handleVoltar}>
              <i className="icone fa-solid fa-rotate-left fa-2xl" style={{ color: '#ffffff' }}></i>
            </button>
            <button
              type="submit"
              className="opcao"
              onClick={handleOpcoes}
            >
              Próximo
            </button>
          </div>
        )}
      </div>


      <div className="container">
        {ultimaOpcaoDesejada === 'Mini Lanches' && mostrarProximasOpcoes === true && (
          <div className="menu_opcoes">
            <div className="intro">
              <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
              <p className="text">
                Feitos com os melhores ingredientes, nossos mini lanches darão uma turbinada na sua festa. Clique e escolha a melhor opção para sua comemoração.</p>
            </div>

            <div name="opcoes" className="btn__opcoes">
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao1"
                  onChange={() => handleSelecao('Mini Dog')}
                />
                <label className="opcao labels" htmlFor="opcao1">
                  Mini HotDog
                </label>
              </div>

              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao2"
                  onChange={() => handleSelecao('Mini Hamburguer')}
                />
                <label className="opcao labels" htmlFor="opcao2">
                  Mini Hamburguer
                </label>
              </div>

            </div>
            <button className="voltar">
              <i className="icone fa-solid fa-rotate-left fa-2xl" style={{ color: '#ffffff' }}></i>
            </button>
            <button
              type="submit"
              className="opcao"
              onClick={handleOpcoes}
            >
              Próximo
            </button>

          </div>
        )}
      </div>

      <div className="container">
        {ultimaOpcaoDesejada === 'Serviços de Buffet' && mostrarProximasOpcoes === true && (
          <div className="menu_opcoes">
            <div className="intro">
              <img src={Ketlyn} alt="Ketlyn" className="img__perfil" />
              <p className="text">
                Nosso Buffet completo oferece Doces, salgados, Bolo, Mini Lanches e muito mais! Para adquirir esse pacote de serviços entre em contato!</p>
            </div>
            <div name="opcoes" className="btn__opcoes">
              <div className="btn__opcao">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="opcao1"
                  onChange={() => handleSelecao('Mini Dog')}
                />
                <label className="opcao labels" htmlFor="opcao1">
                  Buffet Completo
                </label>
              </div>


            </div>
            <button className="voltar" onClick={handleVoltar}>
              <i className="icone fa-solid fa-rotate-left fa-2xl" style={{ color: '#ffffff' }}></i>
            </button>
            <button
              type="submit"
              className="opcao"
              onClick={handleOpcoes}
            >
              Próximo
            </button>

          </div>
        )}
      </div>


    </>
  );
}

