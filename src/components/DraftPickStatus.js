import React, { Component } from 'react';
import styled from 'styled-components';
import TeamsList from './TeamsList';
import constants from '../constants';

const DraftPickStatusStyle = styled.div`

`;

class DraftPickStatus extends Component {

    render() {
        
        return (
            <div>
            <div>Round: {this.props.round}</div>
            <div>Pick: {this.props.pick}</div>
            <div>On the clock: {this.props.teamNameToDraftNext}</div>
            </div>
        );
    }
}

// PropTypes
DraftPickStatus.propTypes = {
    
}

export default DraftPickStatus;
