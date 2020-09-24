import React, { Component } from 'react';
import PropTypes from "prop-types";

class FourthExample extends Component {
    render() {

        const { name, avatar, email, isLoading } = this.props;

        const userDetails = (
            <div>
              <h4 className="mb-0">{name}</h4>
              <span className="text-muted">{email}</span>
            </div>
          );

        const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

        return (
            <div>
                <div className="card mx-auto mt-4 text-center p-5"
                     style={{ maxWidth: "300px", minHeight: "250px" }}>
                     
                     {isLoading ? loadingMessage : userDetails}

                </div>
            </div>
        );
    }
}

FourthExample.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    email: PropTypes.string,
    isLoading: PropTypes.bool
  };

export default FourthExample;