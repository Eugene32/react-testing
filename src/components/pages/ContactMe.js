import React from 'react';


const ContactMe = (props) => {

    return (
        <form>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="username"
                    type="text"
                    className="form-control w-20"
                    placeholder="Username"
                    id="search"
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="email"
                    type="text"
                    className="form-control w-20"
                    placeholder="Email"
                    id="email"
                />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="message"
                    type="text"
                    className="form-control"
                    placeholder="Type your message here"
                    id="message"
                />
                <br />
                <button
                    onClick={props.handleFormSubmit}
                    className="btn btn-primary"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactMe;