import React from "react";
import { DiBootstrap, DiCss3, DiHtml5, DiReact } from "react-icons/di";
import {FaJsSquare} from "react-icons/fa"
import {SiTypescript} from "react-icons/si"


import perfil from "../assets/img/perfil.png";
import "../assets/css/sobre.css";

const Sobre = () => {
  return (
    <main>
      <div className="container perfil-sobre">
        <h1 className="display-5 text-center">About Peter</h1>
        <div className="row secao">
          <div className="col-12 align-self-center">
            <img
              src={perfil}
              style={{
                width: "120px",
                height: "120px",
                float: "left",
                marginRight: "0.6rem",
              }}
              alt=""
              className="img-thumbnail"
            />
            <p>
              I am Pedro Henrique Sudario da Silva. Aspiring front-end developer
              with 3 years of experience (average time of a technician course,
              where i spent those 3 years). I create ReactJS based websites.{" "}
              <br></br> I like to do modern designs. They are fast, beautiful to
              the eyes and do not generate problems during developing.<br></br>
              If we spoke about area experience, my main experience it's the
              front-end area, but i also seek to be a fullstack developer.
              Designing is one of my passions too.<br></br>
            </p>
          </div>
        </div>
        <h1 className="display-6 text-center">Skills</h1>
        <div className="row secao justify-content-center" id="skills">
          <div className="col-4 text-center">
                <p>
                  The main languages that i work with are: JavaScript, CSS3, HTML5 and TypeScript.
                  <br></br><br></br>

                  My developing tools are: ReactJS and Bootstrap 5.
                </p>

          </div>
          <div className="col-8 col-sm-6 text-center">
                <DiHtml5 size={"150px"}/>
                <DiCss3 size={"150px"}/>
                <FaJsSquare size={"150px"}/>
                <DiReact size={"150px"}/>
                <DiBootstrap size={"150px"}/>
                <SiTypescript size={"120px"}/>
                </div>
        </div>
      </div>
    </main>
  );
};

export default Sobre;
