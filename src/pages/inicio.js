import React from "react";
import { FaReact, FaPencilAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import "../assets/css/inicio.css";

const Inicio = () => {
  return (
    <main>
      <div className="container" id="topo">
        <div className="row justify-content-center">
          <div className="col-12 align-self-center">
            <h4 className="display-5 text-center">
              Aspiring front-end developer.
            </h4>
            <h5 className="display-5 text-center">Improving everyday!</h5>
          </div>
          <div className="col-12 align-self-center">
            <p id="topo" className="display-7 text-center">
              I am Peter. 3 years of developing websites, and looking forward to
              grow even more!
            </p>
          </div>
          
          <div className="container-sm" id="explicando-icones">
            <div className="row">
              <div className="col-md-12 col-lg-4 text-center " id="divIcons">
                <MdPhoneIphone size={"60%"} />
                <p className="display-6 text-center">Front-end</p>
                <p className="text-center">
                  Responsive websites and cool functional interactions for
                  better user experience.
                </p>
              </div>
              <div className="col-md-12 col-lg-4 text-center" id="divIcons">
                <FaReact size={"60%"} />
                <p className="display-6 text-center">ReactJS</p>
                <p className="text-center">
                  Applications made with one of the best libraries on the
                  moment, for easy management and developing by professionals.
                </p>
              </div>
              <div className="col-md-12 col-lg-4 text-center" id="divIcons">
                <FaPencilAlt size={"60%"} />
                <p className="display-6 text-center">Design</p>
                <p className="text-center">
                  Modern designs to make customers feel comfortable while
                  browsing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inicio;
