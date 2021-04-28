import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Carousel from 'nuka-carousel';
import Card from '../../components/Card';
import portJson from "../../portfolio.json";


function Portfolio() {
    const [portfolio, setPortfolio] = useState([])
    
    useEffect(() => {
        setPortfolio(portJson)
    }, []);

    return (
        <div>
            <Helmet>
                <title>Portfolio | Duy Nguyen</title>
            </Helmet>
            <div className="col-md-12 mt-5">
                <section>
                    <h1>Portfolio</h1>
                    <hr />
                    <div className="row">
                        <Carousel>
                            {portfolio.map(port => (
                                <Card 
                                    key={port.id}
                                    img={port.img}
                                    name={port.name}
                                    demo={port.demo}
                                    git={port.git}
                                />
                            ))}
                        </Carousel>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Portfolio;