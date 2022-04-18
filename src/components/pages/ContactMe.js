import React from 'react';

const ContactMe = (props) => {

    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Username:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    id="search"
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