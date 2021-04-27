import React from "react";
import { Helmet } from "react-helmet";
import Carousel from 'nuka-carousel';
import Card from '../../components/Card';
import subtracker from "../../images/subtracker.PNG";
import portJson from "../../portfolio.json";


function Portfolio() {
    return (
        <div>
            <Helmet>
                <title>Portfolio | Duy Nguyen</title>
            </Helmet>

            <div className="col-md-12 mt-5">
                <section>
                    <div className="row">
                        <Carousel>
                            {portJson.map(port => (
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