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

                    <hr />
                    <img className="rounded float-left mr-4 img-fluid" src={profilePic} alt="placeholder" width="200" height="200" />
                    <p>
                        A self-motivated full-stack web developer with primarily back-end experience but some front-end as well. Recently earned a certificate in full-stack development from The Coding Boot Camp at UNC-Chapel Hill, with newly developed skills in JavaScript, HTML, CSS, React.js, and responsive web design, as well as strong skills and ability in writing clean and efficient code. 
                    </p>
                    <p>
                        With each project, the goal is to improve upon previous ones to ensure a better engaging experience for the end-user. On a recent project, I worked with a team of four to develop a MERN app for users and teams to manage and track various projects and tasks with over 170 personal commits within a month. I’m hoping to utilize my skill set with a future team to build better experiences on the web.
                    </p>
                    <p>
                        I specialize in React, Node.js, Express.js, MongoDB, jQuery, Bootstrap, & Bulma. I also have experience with HTML, CSS, Heroku, MySQL, APIs, JSON, AJAX.
                    </p>
                    <p>
                        I've taken intro courses for C++, Java, & Python in Wake Tech Community College before I took the UNC Bootcamp.
                    </p>
                    <p>
                        My family originated from Vietnam, but I was born in Maryland and raised in North Carolina most of my life. My hobbies have been spent mostly around technology, which helped started my passion for programming.
                    </p>
                </section>
            </div>
        </div>

    )
}

export default Home;