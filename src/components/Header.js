import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <h1><Link to="/">&lt;&lt;</Link></h1>
            </div>
        );
    }
}

// PropTypes
Header.propTypes = {
    
}

export default Header;
