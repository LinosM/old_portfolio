import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact | Duy Nguyen</title>
            </Helmet>
            <section>
                <h1>Contact</h1>
                <hr />
                <p>If you wish to contact me, you can reach me via email or the following links below:</p>
                <br />
                <p><a href="mailto:NguyenDuy768@gmail.com">NguyenDuy768@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/LinosM">https://github.com/LinosM</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/duy-nguyen-b979b01b7/">https://www.linkedin.com/in/duy-nguyen-b979b01b7/</a></p>
            </section>
        </div>
       
    )
}

export default Contact;