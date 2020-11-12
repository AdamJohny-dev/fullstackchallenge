import './App.css';
import React from "react";
import Modal from './components/modals/infosDoProduto';
import FormProduto from './Pages/Form';
import Routes from './routes';



class App extends React.Component {

  
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

 
 

  render() {
    return (


      <container>
       
        <section class="principal-container">
          <div class="titulo-da-pesquisa">
            <h1>Lista de Produtos</h1>
            <ul>
              <li><td class="link"><a href={"http://localhost:5000/products"}>Ir para sistema Web CRON</a></td></li>
              <li><td class="link"><a href={"http://localhost:3030/estados"}>Ir para lista de produtos</a></td></li>
            </ul>
            
          </div>
          <div class="produto-1">
            <FormProduto />


          </div>
          <div class="produto-2">
           <FormProduto />
          </div>
        </section>
        <section class="imagens-secao">
          <h1 class="titulo-imagens">Produtos</h1>
          <div class="split left">
            <div class="centered">
              <img src="/chiclete-bigbig.jpg" alt="bigbig" />
              <h2>Chiclete</h2>
              <p>Comestível, R$ 5,00</p>

              <button
                class="toggle-button"
                id="centered-toggle-button"
                onClick={e => {
                  this.showModal(e);
                }}
              >
                {" "}
          Ver detalhes{" "}
              </button>

              <Modal onClose={this.showModal} show={this.state.show}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
                fuga omnis a sed impedit explicabo accusantium nihil doloremque
                consequuntur.
        </Modal>
            </div>
          </div>

          <div class="split right">
            <div class="centered">
              <img src="/salgadinho-cheetos.jpg" alt="cheetos" />
              <h2>Salgadinho</h2>
              <p>Bebida, R$ 5,00</p>
              <button
                class="toggle-button"
                id="centered-toggle-button"
                onClick={e => {
                  this.showModal(e);
                }}
              >
                {" "}
          Ver detalhes{" "}
              </button>

              <Modal onClose={this.showModal} show={this.state.show}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
                fuga omnis a sed impedit explicabo accusantium nihil doloremque
                consequuntur.
        </Modal>
            </div>
          </div>

        </section>

        <Routes />
        
      </container>


    );
  }
}
export default App;
