import React from 'react'
import ButtonLink from '../../../components/ButtonLink';

function Menu(props) {
    return (
        <div>
            <ul style={props.style}>
                <li style={{ margin: '0 20px' }}><a href="#home" style={{ color: '#FFF' }}>Inicio</a></li>
                <li style={{ margin: '0 20px' }}><a href="#about" style={{ color: '#FFF' }}>Acerca de</a></li>
                <li style={{ margin: '0 20px' }}><a href="#features" style={{ color: '#FFF' }}>Servicios</a></li>
                <li style={{ margin: '0 20px' }}><a href="#contact" style={{ color: '#FFF' }}>Contacto</a></li>
                <li><ButtonLink text="Iniciar sesión" href="/Login"></ButtonLink></li>
            </ul>
        </div>
    )
}

export default Menu