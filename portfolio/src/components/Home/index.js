import LogoTitle from '../../assets/images/k-logo.png';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
//import Logo from '../Logo'
import Loader from 'react-loaders'


const Home = () => {

const[letterClass, setLetterClass] = useState('text-animate');
const nameArray = ['a', 'n', 'e','.'];
const jobArray = ['J', 'u', 'n','i','o','r',' ','S','o', 'f','t','w','a','r','e', ' ', 'D','e','v','e','l','o','p','e','r','.']

useEffect(() => {
   setTimeout (()=> {
    setLetterClass('text-animate-hover')
  }, 4000)
}, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
      
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          
         <br/>
         <span className={`${letterClass} _13`}>I</span>
         <span className={`${letterClass} _14`}>'m</span>

        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass} 
        strArray={nameArray} 
        idx={15} />
        <br/>
        <AnimatedLetters letterClass={letterClass} 
        strArray={jobArray} 
        idx={10} />
        </h1>
        <h2> Fully trained junior full-stack developer / ex Data Analyst</h2>
        <Link to='/contact' className='flat-button'> Contact Me </Link>
      </div>
      {/* <Logo/> */}
    </div>
    <Loader type='pacman'/>
    </>
    
  );
}

export default Home;
