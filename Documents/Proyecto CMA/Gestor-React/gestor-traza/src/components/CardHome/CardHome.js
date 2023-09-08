import React from "react";
import Container from "react-bootstrap/esm/Container";
import './CardHome.css'
import { Link } from "react-router-dom";


const CardHome =({data})=> {
    return(
        <>
            <Container fluid>
                <div className="card__size" key={data.id}>
                    <Link to={data.link}>
                        <p className="card__text">{data.proyectos}</p>
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default CardHome;