import React from 'react';
import {FaLinkedin, FaInstagram, FaFacebookSquare} from 'react-icons/fa';
import '../assets/css/contatos.css';
const Contatos = () => {
    return (
      <main>
      <div className="container">
        <div className="row secao align-items-center">
          <div className="col-12">
          <h4 className="display-5 text-center topoContatos">
              Contact me!
            </h4>
          </div>
          <div className='col-md-4 col-sm-12 text-center' >
              <a className="linkNome" href='https://www.instagram.com/pepedroo__/'><FaInstagram size={"150px"}/> </a>
              <p>Instagram</p>
          </div>
          <div className='col-md-4 col-sm-12 text-center'>
          <a className="linkNome" href='https://www.linkedin.com/in/pedro-henrique-sudario-da-silva-804721214/'><FaLinkedin size={"150px"}/></a>
              <p>LinkedIn</p>
          </div>
          <div className='col-md-4 col-sm-12 text-center'>
          <a className="linkNome" href='https://www.facebook.com/sudariodinho'><FaFacebookSquare size={"150px"}/> </a>
              <p>Facebook</p>
          </div>
        </div>
      </div>
    </main>
    )
}

export default Contatos;