import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Carousel from 'nuka-carousel';
import Card from '../../components/Card';
import portJson from "../../portfolio.json";


function Portfolio() {
    const [portfolio, setPortfolio] = useState([
        {
            about: ""
        }
    ]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        setPortfolio(portJson)
    }, []);

    function onChange(value) {
        setValue(value);
        console.log(value);
    }

    return (
        <div>
            <Helmet>
                <title>Portfolio | Duy Nguyen</title>
            </Helmet>
            <div className="col-md-12 mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <section style={{ maxHeight: "900px", maxWidth: "800px" }}>
                            <h1>Portfolio</h1>
                            <hr />
                            <div className="row">
                                <Carousel
                                    slideIndex={value}
                                    afterSlide={onChange}
                                >
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
                    <div className="col-md-4">
                        <section>
                            <h1>About</h1>
                            <hr />
                            {portJson[value].about}
                            <h3 className="mt-3">Technology Used</h3>
                            <hr />
                            
                            <ul>
                                {portJson[value].tech.map(tech => (
                                    <li>{tech}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;