import LogoTitle from '../../assets/images/k-logo.png';
import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1> Hi, <br/> I'm
        <img src={LogoTitle} alt="developer" />
        ane
        <br/>
        Junior Software Developer
        </h1>
        <h2> Fully trained junior full-stack developer / ex Data Analyst</h2>
        <Link to='/contact' className='flat-button'> Contact Me </Link>
      </div>
    </div>
  );
}

export default Home;
