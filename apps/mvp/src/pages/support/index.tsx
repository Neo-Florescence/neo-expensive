import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BellRinging from '../../images/pages/support/bell-ringing.svg';
import Truck from '../../images/pages/support/truck.svg';
import ActiveSupport from '../../images/pages/support/undraw_active_support.svg';
import Coin from '../../images/pages/support/coin.svg';
import ShoppingBagOpen from '../../images/pages/support/shopping-bag-open.svg';

function Support() {
  useEffect(() => {
    const allModalWrapperButtons = document.querySelectorAll<HTMLButtonElement>('.support--card--button');

    const closeModal = (modal: HTMLElement, overlay: HTMLElement, body: HTMLElement) => {
      overlay.style.display = 'none';
      body.style.overflow = 'auto';
      modal.classList.remove('show');
    };

    allModalWrapperButtons.forEach((button) => {
      button.onclick = () => {
        const modal = button.nextElementSibling! as HTMLElement;
        const body = document.querySelector('body')!;
        const overlay = document.querySelector<HTMLElement>('.overlay')!;
        const closeButton = modal.querySelector<HTMLButtonElement>('.closeAccordion')!;

        /* spawn overlay */
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
        modal.classList.add('show');

        /* close when close button clicked */
        closeButton.onclick = () => {
          closeModal(modal, overlay, body);
        };

        /* stop another modal from being opened */

        /* close when click anywhere on window */
        window.onclick = ({ target }) => {
          if (target == overlay) {
            /* hide modal */
            console.log('hide modal');
            closeModal(modal, overlay, body);
          }
        };
      };
    });
  }, []);

  useEffect(() => {
    const accordions = document.querySelectorAll<HTMLElement>('.accordion');

    accordions.forEach((accordion) => {
      accordion.onclick = () => {
        accordion.classList.toggle('active');

        var panel = accordion.nextElementSibling as HTMLElement;

        if (panel.style.maxHeight) {
          // @ts-ignore
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
      };
    });
  }, []);

  return (
    <React.Fragment>
      <main className="support--main">
        <div className="support--header">
          <section className="support--section--left">
            <div className="support--needhelp--wrapper">
              <h1 className="support--section--title align-left">Precisa de Ajuda?</h1>
              <p className="support--section--paragraph max-width">
                Saiba que sempre estaremos aqui <span>para você</span>
              </p>
              <input type="text" className="support--section--left--input" />
            </div>
          </section>

          <section className="support--section--right">
            <div className="support--section--image--wrapper">
              <img src={ActiveSupport} alt="" className="support--section--image" />
            </div>
          </section>
        </div>
        <section className="support--section--card--wrapper">
          <div className="support--section--card">
            <h1 className="support--card--h1">Pedidos</h1>
            <button className="support--card--button openAccordionPedidos">
              <img src={BellRinging} alt="" className="support--card--svg" />
            </button>

            <div className="modalWrapper modalWrapperPedidos">
              <article className="modal--article">
                <button className="accordion">"Posso Alterar O Destino Do Produto Depois Do Objeto Em Transporte"</button>
                <div className="panel">
                  <p>
                    Quando seu pedido já estiver em transporte, infelizmente não será possível alterar o endereço de entrega. <br />
                    No entanto, você poderá nos contatar para verificar a possibilidade de solicitarmos o retorno do pedido ao KaBuM!, para assim efetuarmos a alteração do endereço.
                  </p>
                </div>

                <button className="accordion">"Quero Trocar O Meu Pedido"</button>
                <div className="panel">
                  <p>
                    As trocas podem ser feitas em pedidos processados via boleto ou Pix. Para pedidos via cartão não é possível fazer a alteração dos itens. <br />
                    Caso seu pedido seja no Pix, basta entrar em contato conosco via ticket e informar o link do item que deseja trocar para que possamos dar prosseguimento a alteração.
                  </p>
                </div>

                <button className="closeAccordion closeAccordionPedidos" tabIndex={0}>
                  Fechar
                </button>
              </article>
            </div>
          </div>

          <div className="support--section--card">
            <h1 className="support--card--h1">Garantia</h1>
            <button className="support--card--button openAccordionGarantia">
              <img src={ShoppingBagOpen} alt="" className="support--card--svg" />
            </button>

            <div className="modalWrapper modalWrapperGarantia">
              <article className="modal--article">
                <button className="accordion">"Preciso Acionar A Minha Garantia!"</button>
                <div className="panel">
                  <p>
                    1º - Faça o login em nosso site, usando seu e-mail e senha; <br />
                    2º - Entre em seu{' '}
                    <Link className="support--link" to="/profile">
                      Perfil
                    </Link>
                    ; <br />
                    3º - Depois, você irá localizar o pedido referente ao item que deseja acionar a garantia; selecione 'Detalhes do pedido'. <br />
                    4º - Clique em 'Precisa de ajuda?' e, em seguida, selecione 'Garantia' e 'Continuar'; <br />
                    5º - Marque o quadradinho referente ao produto que deseja acionar a garantia e clique em 'Próximo'; <br />
                    6º - Preencha o formulário e conclua a solicitação. <br />O prazo para retorno do protocolo é de até 48 horas úteis.
                  </p>
                </div>
                <button className="accordion">"Quero Acionar Meu Direito De Arrependimento"</button>
                <div className="panel">
                  <p>
                    O Direito de Arrependimento só pode ser acionado após o recebimento da compra em sua casa, no prazo de até 7 dias corridos. Nesse caso, siga o passo a passo abaixo: <br />
                    1º - Faça o login em nosso site, usando seu e-mail e senha; <br />
                    2º - Entre em seu{' '}
                    <Link to="/profile" className="support--link">
                      Perfil
                    </Link>
                    ; <br />
                    3º - Depois, você irá localizar o pedido referente ao item que deseja acionar o direito de arrependimento e deverá selecionar 'Detalhes do pedido'. <br />
                    4º - Clique em 'Precisa de ajuda?' e, em seguida, selecione 'Arrependimento' e 'Continuar'; <br />
                    5º - Marque o quadradinho referente ao produto que deseja devolver e clique em 'Próximo'; <br />
                    6º - Preencha o formulário e conclua a solicitação. <br />O prazo para retorno do protocolo é de até 48 horas úteis.
                  </p>
                </div>

                <button className="closeAccordion" tabIndex={0}>
                  Fechar
                </button>
              </article>
            </div>
          </div>

          <div className="support--section--card">
            <h1 className="support--card--h1">Entregas</h1>
            <button className="support--card--button openAccordionEntregas">
              <img src={Truck} alt="" className="support--card--svg" />
            </button>

            <div className="modalWrapper modalWrapperEntregas">
              <article className="modal--article">
                <button className="accordion">"Como Realizar Rastreio Nos Correrios?"</button>
                <div className="panel">
                  <p>
                    1º - Acesse:{' '}
                    <a href="http://www.correios.com.br" className="support--link">
                      Correios
                    </a>
                    ; <br />
                    2º - Vá até 'Acompanhe seu objeto' e informe o protocolo de rastreio do seu pedido (enviado no e-mail de cadastro); <br />
                    3º - Pressione o ícone da lupa, à direita na barra. <br />
                    OBS: O prazo para atualização do rastreio é de até 3 dias úteis.
                  </p>
                </div>
                <button className="accordion">"Como Rastrear Seu Objeto Na Brasspress"</button>
                <div className="panel">
                  <p>
                    Para o rastreio via transportadora Braspress acesse o seguinte link:{' '}
                    <a href="https://www.braspress.com/rastreie-sua-encomenda/" className="support--link">
                      Brasspress
                    </a>{' '}
                    <br />
                    No campo "Rastreie sua encomenda" pesquise digitando seu CPF. <br />
                    Para maiores detalhes do trajeto clique na "lupinha" que estará localizada no lado esquerdo de sua tela. <br />
                    OBS: O prazo para constar o rastreio no sistema da transportadora são de até 48hrs úteis.
                  </p>
                </div>

                <button className="closeAccordion" tabIndex={0}>
                  Fechar
                </button>
              </article>
            </div>
          </div>

          <div className="support--section--card">
            <h1 className="support--card--h1">Pagamentos</h1>
            <button className="support--card--button openAccordionPagamentos">
              <img src={Coin} alt="" className="support--card--svg" />
            </button>

            <div className="modalWrapper modalWrapperPagamentos">
              <article className="modal--article">
                <button className="accordion">"Qual Os Prazos Dos Tipos De Pagamentos?"</button>
                <div className="panel">
                  <p>
                    Pagamentos efetuados via Cartão de Crédito têm um prazo de 1 a 2 dias úteis para confirmação; <br />
                    Já para pagamentos via PIX, o prazo de confirmação é de até 30 minutos. <br />
                    Se esse período for expirado e o pagamento de seu pedido permanecer indicado como pendente, será necessário entrar em contato com o nosso Atendimento.
                  </p>
                </div>
                <button className="accordion">"Valor Foi Descontado Mas Ainda Está Em Análise"</button>
                <div className="panel">
                  <p>
                    Esse valor que foi descontado fica reservado para que o pedido entre na fase de análise. <br />
                    Isso significa que estamos verificando os dados para garantir que terceiros sem autorização não possam usar seu cartão, evitando fraudes. <br />
                    Nesse meio tempo a financeira pode entrar em contato e solicitar dados do cartão para confirmação da compra.
                  </p>
                </div>

                <button className="closeAccordion" tabIndex={0}>
                  Fechar
                </button>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <section className="footer--aboutus">
          <h2 className="footer--title">Sobre Nós</h2>

          <p className="footer--paragraph">A Neo Expertise, empresa de venda dos mais diversos hardwares foi criada para satisfazer suas necessidades e lhe entregar produtos com o comprometimento de oferecê-los com a maior qualidade possível.</p>

          <div className="footer--social--icons">
            <a href="https://www.facebook.com/neo-expertise-102995498833851/" aria-label="Facebook">
              <svg className="footer--social--svg" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 43.75C35.3553 43.75 43.75 35.3553 43.75 25C43.75 14.6447 35.3553 6.25 25 6.25C14.6447 6.25 6.25 14.6447 6.25 25C6.25 35.3553 14.6447 43.75 25 43.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.8125 17.1877H29.6875C28.4443 17.1877 27.252 17.6816 26.3729 18.5607C25.4939 19.4398 25 20.632 25 21.8752V43.7502" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.75 28.1252H31.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="https://www.instagram.com/neo_expensive/" aria-label="Instagram">
              <svg className="footer--social--svg" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 32.8125C29.3147 32.8125 32.8125 29.3147 32.8125 25C32.8125 20.6853 29.3147 17.1875 25 17.1875C20.6853 17.1875 17.1875 20.6853 17.1875 25C17.1875 29.3147 20.6853 32.8125 25 32.8125Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                <path
                  d="M33.5938 7.03125H16.4062C11.2286 7.03125 7.03125 11.2286 7.03125 16.4062V33.5938C7.03125 38.7714 11.2286 42.9688 16.4062 42.9688H33.5938C38.7714 42.9688 42.9688 38.7714 42.9688 33.5938V16.4062C42.9688 11.2286 38.7714 7.03125 33.5938 7.03125Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="https://twitter.com/ExpensiveNeo" aria-label="Twitter">
              <svg className="footer--social--svg" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.37502 39.0625C9.37502 39.0625 17.1875 37.5 18.75 32.8125C18.75 32.8125 6.25002 28.125 9.37502 10.9375C9.37502 10.9375 15.625 18.75 25 20.3125V17.1881C25.0002 15.3931 25.6184 13.6529 26.7506 12.26C27.8829 10.8672 29.4602 9.90661 31.2173 9.53985C32.9744 9.17309 34.8043 9.42249 36.3991 10.2461C37.994 11.0697 39.2567 12.4174 39.9749 14.0624L46.875 14.0625L40.625 20.3125C40.625 31.25 32.8125 42.1875 18.75 42.1875C12.5 42.1875 9.37502 39.0625 9.37502 39.0625Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>

        <section className="footer--contact-us">
          <h2 className="footer--title">Contato</h2>

          <ul className="footer--contact-list">
            <li>
              <a href="https://github.com/VitorGouveia" rel="noopener" target="_blank">
                Vitor Gouveia
              </a>
              <br />
            </li>
            <li>
              <a href="https://github.com/Espalmer" rel="noopener" target="_blank">
                Vinicius Aquino
              </a>
              <br />
            </li>
            <li>
              <a href="https://github.com/AtomicFeasT" rel="noopener" target="_blank">
                Thiago Lisboa
              </a>
            </li>
          </ul>
        </section>

        <section className="footer--quicklinks">
          <h2 className="footer--title">Links Úteis</h2>

          <ul className="footer--links-list">
            <li>
              <a href="#">Dúvidas Frequentes</a>
            </li>

            <li>
              <a href="#">Termos de Uso</a>
            </li>

            <li>
              <a href="#">Ajuda</a>
            </li>
          </ul>
        </section>

        <div className="footer--logo">
          <a className="footer--logo-anchor" href="#" aria-label="NeoLogo">
            <svg className="footer--logo--svg" width="307" height="94" viewBox="0 0 307 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="xPensive"
                d="M81.1674 71.6726L87.386 64.9473C88.1833 64.0851 88.1833 62.6742 87.386 61.812L81.5878 55.5413C80.7905 54.6791 79.4859 54.6791 78.6886 55.5413L72.47 62.2666C72.2815 62.4704 72.1656 62.7526 72.1801 63.0505L72.1801 70.8888C72.1801 71.5159 72.6294 72.0018 73.2093 72.0018L80.4571 72.0018C80.718 72.0018 80.9645 71.8921 81.1674 71.6726V71.6726ZM67.5124 62.2666L61.2938 55.5413C60.4965 54.6791 59.1919 54.6791 58.3947 55.5413L52.5964 61.812C51.7991 62.6742 51.7991 64.0851 52.5964 64.9473L58.815 71.6726C59.0035 71.8764 59.2644 72.0018 59.5398 71.9862L66.7877 71.9862C67.3675 71.9862 67.8169 71.5002 67.8169 70.8731L67.8169 63.0348C67.8169 62.7526 67.7154 62.4861 67.5124 62.2666ZM58.815 77.034L52.5964 83.7593C51.7991 84.6215 51.7991 86.0324 52.5964 86.8947L58.3947 93.1653C59.1919 94.0275 60.4965 94.0275 61.2938 93.1653L67.5124 86.44C67.7009 86.2362 67.8169 85.9541 67.8024 85.6562L67.8024 77.8179C67.8024 77.1908 67.353 76.7048 66.7732 76.7048L59.5253 76.7048C59.2644 76.7048 59.018 76.8146 58.815 77.034ZM80.4281 76.7048H73.1803C72.6004 76.7048 72.1511 77.1908 72.1511 77.8179L72.1511 85.6562C72.1511 85.9384 72.2525 86.2362 72.441 86.44L78.6741 93.181C79.4714 94.0432 80.776 94.0432 81.5733 93.181L87.3716 86.9103C88.1688 86.0481 88.1688 84.6372 87.3716 83.775L81.1529 77.0497C80.9645 76.8146 80.718 76.7048 80.4281 76.7048V76.7048Z"
                fill="#8B46A3"
              />
              <path
                d="M47 83.76V90H20.984V56.4H46.376V62.64H28.712V69.936H44.312V75.984H28.712V83.76H47ZM108.512 56.4C111.488 56.4 114.064 56.896 116.24 57.888C118.448 58.88 120.144 60.288 121.328 62.112C122.512 63.936 123.104 66.096 123.104 68.592C123.104 71.056 122.512 73.216 121.328 75.072C120.144 76.896 118.448 78.304 116.24 79.296C114.064 80.256 111.488 80.736 108.512 80.736H101.744V90H93.9684V56.4H108.512ZM108.08 74.4C110.416 74.4 112.192 73.904 113.408 72.912C114.624 71.888 115.232 70.448 115.232 68.592C115.232 66.704 114.624 65.264 113.408 64.272C112.192 63.248 110.416 62.736 108.08 62.736H101.744V74.4H108.08ZM154.672 83.76V90H128.656V56.4H154.048V62.64H136.384V69.936H151.984V75.984H136.384V83.76H154.672ZM191.675 56.4V90H185.291L168.539 69.6V90H160.859V56.4H167.291L183.995 76.8V56.4H191.675ZM210.665 90.576C208.009 90.576 205.433 90.224 202.937 89.52C200.473 88.784 198.489 87.84 196.985 86.688L199.625 80.832C201.065 81.888 202.777 82.736 204.761 83.376C206.745 84.016 208.729 84.336 210.713 84.336C212.921 84.336 214.553 84.016 215.609 83.376C216.665 82.704 217.193 81.824 217.193 80.736C217.193 79.936 216.873 79.28 216.233 78.768C215.625 78.224 214.825 77.792 213.833 77.472C212.873 77.152 211.561 76.8 209.897 76.416C207.337 75.808 205.241 75.2 203.609 74.592C201.977 73.984 200.569 73.008 199.385 71.664C198.233 70.32 197.657 68.528 197.657 66.288C197.657 64.336 198.185 62.576 199.241 61.008C200.297 59.408 201.881 58.144 203.993 57.216C206.137 56.288 208.745 55.824 211.817 55.824C213.961 55.824 216.057 56.08 218.105 56.592C220.153 57.104 221.945 57.84 223.481 58.8L221.081 64.704C217.977 62.944 214.873 62.064 211.769 62.064C209.593 62.064 207.977 62.416 206.921 63.12C205.897 63.824 205.385 64.752 205.385 65.904C205.385 67.056 205.977 67.92 207.161 68.496C208.377 69.04 210.217 69.584 212.681 70.128C215.241 70.736 217.337 71.344 218.969 71.952C220.601 72.56 221.993 73.52 223.145 74.832C224.329 76.144 224.921 77.92 224.921 80.16C224.921 82.08 224.377 83.84 223.289 85.44C222.233 87.008 220.633 88.256 218.489 89.184C216.345 90.112 213.737 90.576 210.665 90.576ZM230.234 56.4H238.01V90H230.234V56.4ZM278.101 56.4L263.557 90H255.877L241.38 56.4H249.781L260.005 80.4L270.373 56.4H278.101ZM306.922 83.76V90H280.906V56.4H306.298V62.64H288.634V69.936H304.234V75.984H288.634V83.76H306.922Z"
                fill="white"
              />
              <path
                d="M38.955 49.105L3.4 9.065L3.465 48H0.345V0.874998H0.54L36.095 41.24L36.03 1.85H39.085V49.105H38.955ZM53.7923 1.85H82.2623V4.905H56.9773V23.235H79.7273V26.29H56.9773V44.945H83.1723V48H53.7923V1.85ZM92.3809 24.99C92.3809 21.74 92.9876 18.7067 94.2009 15.89C95.4143 13.03 97.1043 10.5167 99.2709 8.35C101.438 6.14 103.929 4.42833 106.746 3.215C109.606 1.95833 112.661 1.33 115.911 1.33C119.161 1.33 122.216 1.95833 125.076 3.215C127.936 4.42833 130.449 6.14 132.616 8.35C134.783 10.5167 136.473 13.03 137.686 15.89C138.943 18.7067 139.571 21.74 139.571 24.99C139.571 28.24 138.943 31.295 137.686 34.155C136.473 36.9717 134.783 39.4633 132.616 41.63C130.449 43.7967 127.936 45.4867 125.076 46.7C122.216 47.9133 119.161 48.52 115.911 48.52C112.661 48.52 109.606 47.935 106.746 46.765C103.929 45.595 101.438 43.9483 99.2709 41.825C97.1043 39.7017 95.4143 37.21 94.2009 34.35C92.9876 31.49 92.3809 28.37 92.3809 24.99ZM95.6309 25.055C95.6309 27.8717 96.1509 30.515 97.1909 32.985C98.2309 35.455 99.6826 37.6217 101.546 39.485C103.409 41.3483 105.554 42.8217 107.981 43.905C110.451 44.945 113.073 45.465 115.846 45.465C118.706 45.465 121.371 44.945 123.841 43.905C126.311 42.8217 128.478 41.3483 130.341 39.485C132.204 37.6217 133.656 35.455 134.696 32.985C135.779 30.515 136.321 27.85 136.321 24.99C136.321 22.1733 135.779 19.53 134.696 17.06C133.656 14.5467 132.204 12.3583 130.341 10.495C128.478 8.58833 126.311 7.09333 123.841 6.01C121.371 4.92667 118.728 4.385 115.911 4.385C113.051 4.385 110.386 4.94833 107.916 6.075C105.446 7.15833 103.279 8.65333 101.416 10.56C99.5959 12.4667 98.1659 14.6767 97.1259 17.19C96.1293 19.66 95.6309 22.2817 95.6309 25.055Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div className="footer--copyright">
          <p className="footer--copyright--text">Copyright © 2021 NeoExpertise All Rights Reserved™</p>
        </div>
      </footer>

      <div className="overlay"></div>
    </React.Fragment>
  );
}

export default memo(Support);
