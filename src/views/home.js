import '../scss/home.scss';
import euro_3d_floating from '../images/euro_3d_floating.png';
import HeaderHome from './components/header-home';
import FooterHome from './components/footer-home';

function Home() {
  return (
    <div>
      <HeaderHome />
      <div>GORS TESTZEFAZRZAR</div>
      <div className="container slide-top">
        <h1>Votre temps c'est de l'argent.</h1>
        <h3>Planifiez vos dépenses, définissez des objectifs d'épargne et suivez votre progression avec des graphiques clairs et simples. InTime vous permet de visualiser instantanément vos dépenses en temps réel.</h3>  
        <img id="euro_floating" src={euro_3d_floating} alt="euro_floating" className="euro_floating"/>
      </div>
      <FooterHome />
    </div>
  );
}

export default Home;



