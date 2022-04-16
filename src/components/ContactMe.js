import React from 'react';

const ContactMe = () => {

    return (
        <div>
            <section id="contacts" className="columns section">
                <aside className="column is-one-fifth-tablet level">
                    <span className="title is-1 level-right">Contacts</span>
                </aside>
                <div className="column box">
                    <ul className="container my-no-underline">
                        <li>
                            <span className="row ">Email: </span> <a href="mailto:ekahiyang@gmail.com" target="_blank"
                                className="my-no-underline" rel="noopener noreferrer">
                                ekahiyang@gmail.com</a>
                        </li>
                        <li>
                            <span className="row">Github: </span> <a href="https://github.com/Eugene32" target="_blank"
                                className="my-no-underline" rel="noopener noreferrer">https://github.com/Eugene32 </a>
                        </li>
                        <li>
                            <span clasNames="row">LinkedIn: </span><a
                                href="https://www.linkedin.com/in/reynan-k-2a525032/" target="_blank"
                                rel="noopener noreferrer" class="my-no-underline">LinkedIn:
                                https://www.linkedin.com/in/reynan-k-2a525032/ </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ContactMe;