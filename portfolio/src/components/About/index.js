import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useState, useEffect} from 'react'
import {
    faPython,
    faNode,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faNodeJs,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import Loader from 'react-loaders'

const About = () =>{
    const[letterClass, setLetterClass] = useState('text-animate');
    
    
    useEffect(() => {
        setTimeout (()=> {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])



    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}/>
            </h1>
            <p>
            I am a highly motivated and enthusiastic junior software engineer who is currently seeking my first role in the industry. With a solid foundation in computer science principles and a passion for solving complex problems through code, I am eager to apply my skills and knowledge to real-world projects and gain hands-on experience in a professional setting.
            </p>
            <p>
            An ex Data Analyst and graduate from Birmingham City Univerity with a First Class Honours in Economics
            </p>
            </div>

            <div className="stage-cube-cont">
            <div className="cubespinner">

            <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#00ffff"/>
            </div>
            <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
            </div>
            <div className="face3">
            <FontAwesomeIcon icon={faNode} color="#006400"/>
            </div>
            <div className="face4">
            <FontAwesomeIcon icon={faPython} color="#235789"/>
            </div>
            <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#F1D302"/>
            </div>
            <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#DD0031"/>
            </div>

            </div>
            </div>
            <Loader type="pacman" />
            </div>
            </>
    )
}

export default About; 