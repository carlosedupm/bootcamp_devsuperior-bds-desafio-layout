import { ReactComponent as MainImage } from 'assets/images/topcar.svg';
import ButtonIcon from 'components/ButtonIcon';
import NavBar from 'components/NavBar';

import './styles.css';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
      <div className="btn-content-container">
          <ButtonIcon />
        <p>Comece agora a navegar</p>
      </div>
      
      
    </>
  );
};

export default Home;
