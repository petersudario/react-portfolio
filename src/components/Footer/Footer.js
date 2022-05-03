import React from "react";
import styled from "styled-components";
import "../Footer/Footer.css"

const Footer = () =>{
    return(
        <Foot>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <p className="text-center" id="copyright">Copyright © 2022 - Petersu</p>
                    </div>
                </div>
            </div>
        </Foot>
    )
}

const Foot = styled.footer`

    padding: 15px;
    background-color: white;
    bottom: 0;
`



export default Footer