import React from "react";
import { Helmet } from "react-helmet";
import gitImg from "../../images/icons/git.png";
import inImg from "../../images/icons/in.png";
import profilePic from "../../images/face.png";

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
                                <img src={gitImg} width="40" height="40" />        
                            </a>
                            <a href="https://www.linkedin.com/in/duy-nguyen-b979b01b7/">
                                <img src={inImg} width="40" height="40" />
                            </a>
                        </div>
                    </div>
                    
                    <hr/>
                    <img className="rounded float-left mr-4 img-fluid" src={profilePic} alt="placeholder" width="200" height="200" />
                    <p>
                        Nunc tristique magna a ligula faucibus facilisis at vitae urna. Praesent ultrices nunc eget ex sodales eleifend. Mauris eu nisl urna. Sed porttitor gravida orci, id dignissim mauris vestibulum at. Sed sagittis porta nulla eu mattis. Aliquam pellentesque sagittis imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer et rhoncus arcu, id elementum purus. Cras rutrum eros sed felis rhoncus egestas. Donec gravida vitae justo a blandit. Donec eros erat, pellentesque et mattis vitae, varius ac odio. Sed feugiat et quam vitae tincidunt. Aenean id purus est. Cras molestie ipsum quis tincidunt pretium.
                    </p>

                    <p>
                        Phasellus erat eros, convallis non dictum a, venenatis a massa. Nullam consequat vel dolor nec malesuada. Sed quis augue non orci rhoncus iaculis. Donec id tortor ullamcorper, venenatis felis sit amet, placerat ex. Aenean eu eros in eros efficitur eleifend in nec lacus. Etiam id viverra elit, ut lacinia sem. In sit amet viverra ipsum, auctor viverra dui. Suspendisse ex dolor, lobortis ac commodo eget, sodales vitae libero. Praesent quis mollis risus, nec aliquam neque. Sed ultrices quam sit amet egestas vestibulum. Donec tincidunt, enim et facilisis semper, tellus libero fermentum risus, eu rhoncus libero orci vel nisl. Aliquam nec venenatis nisi. Proin sollicitudin vitae dui id scelerisque. Vivamus vitae bibendum nisi, ac efficitur mauris.
                    </p>
                </section>
            </div>
        </div>

    )
}

export default Home;