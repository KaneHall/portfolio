import React from 'react';
import './index.scss';
import LogoK from '../../assets/images/logo-k.png'
import {useRef} from 'react';

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoK} alt="K" />
            <svg
            width="559pt"
            height="897pt"
            version="1.0"
            viewBox="0 0 559 897"
            xmlns="http://localhost:3000/"/>
            <g
            className="svg-container"
            transform="translate(0 457) scale(.1 -.1)"
            fill="none">
            </g>

        </div>
    );
};

export default Logo;
