import React from "react";
import { Helmet } from "react-helmet";
import gitImg from "../../images/icons/git.png";
import inImg from "../../images/icons/in.png";
import profilePic from "../../images/face2.jpg";

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home | Duy Nguyen</title>
            </Helmet>
            <div className="col-md-8 mt-5">
                <section>
                    <div className="row">
                        <div className="col-md-12">
                            <h1>About Me</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <a href="https://github.com/LinosM">
                                <img src={gitImg} alt="github" width="40" height="40" />        
                            </a>
                            <a href="https://www.linkedin.com/in/duy-nguyen-b979b01b7/">
                                <img src={inImg} alt="linkedin" width="40" height="40" />
                            </a>
                        </div>
                    </div>
                    
                    <hr/>
                    <img className="rounded float-left mr-4 img-fluid" src={profilePic} alt="placeholder" width="200" height="200" />
                    <p>
                        I am a Full-Stack web developer with a certificate from The Coding Boot Camp at UNC-Chapel Hill.
                    </p>
                    <p>
                        I specialize in React, Node.js, Express.js, MongoDB, jQuery, Bootstrap, & Bulma. I also have experience with HTML, CSS, Heroku, MySQL, APIs, JSON, AJAX.
                    </p>

                    <p>
                        My family originated from Vietnam, but I was born in Maryland and raised in North Carolina most of my life. My hobbies have been spent mostly around technology, which helped started my passion for programming.
                    </p>
                    <p>
                        I've taken intro courses for C++, Java, & Python in Wake Tech Community College before I took the UNC Bootcamp.
                    </p>
                </section>
            </div>
        </div>

    )
}

export default Home;