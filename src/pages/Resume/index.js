import React from "react";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <div>
            <Helmet>
                <title>Resume | Duy Nguyen</title>
            </Helmet>
            <div className="col-md">
                <section>
                    <div>
                        <h1>Resume</h1>
                        <hr />
                        <iframe
                            src="https://docs.google.com/document/d/e/2PACX-1vT6S2XpMEjJY3fZqJ8W8_9PPqwyjh1pe1rW9peEdWM4SkmLPoYb4j69Djm5dOibsM0X02ZD8CL9HGwm/pub?embedded=true"
                            className="col-md"
                            style={{ height: "1000px" }}
                        >
                        </iframe>
                    </div>

                </section>
            </div>
        </div>

    )
}

export default Home;