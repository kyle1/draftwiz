import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const HomeStyle = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 200px;
    padding-left: 40%;
    padding-right: 40%;
    background-color: #34495E;

    a {
        color: white;
    }
`;

const draftTypeOptions = [
    { value: 'snake', label: 'Snake' },
    { value: 'linear', label: 'Linear' },
    { value: 'auction', label: 'Auction' }
];

const teamCountOptions = [
    { value: 10, label: 10 },
    { value: 12, label: 12 },
    { value: 14, label: 14 }
];

const draftPositionOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
];

class Home extends Component {

    state = {
        selectedDraftType: null,
        selectedTeamCount: null,
        selectedDraftPosition: null
    };

    changedDraftType = selectedDraftType => {
        this.setState({ selectedDraftType });
        console.log('Draft type selected:', selectedDraftType);
    };

    changedTeamCount = selectedTeamCount => {
        this.setState({ selectedTeamCount });
        console.log('Team count selected:', selectedTeamCount);
    };

    changedDraftPosition = selectedDraftPosition => {
        this.setState({ selectedDraftPosition });
        console.log('Draft position selected:', selectedDraftPosition);
    };

    render() {
        const { selectedDraftType } = this.state;
        const { selectedTeamCount } = this.state;
        const { selectedDraftPosition } = this.state;

        return (
            <HomeStyle>
                <Select
                    placeholder="Draft type"
                    styles={{width: '50%'}}
                    value={selectedDraftType}
                    onChange={this.changedDraftType}
                    options={draftTypeOptions}
                />
                <br/>
                <Select
                    placeholder="Team count"
                    styles={{width: '50%'}}
                    value={selectedTeamCount}
                    onChange={this.changedTeamCount}
                    options={teamCountOptions}
                />
                <br/>
                <Select
                    placeholder="Draft position"
                    styles={{width: '50%'}}
                    value={selectedDraftPosition}
                    onChange={this.changedDraftPosition}
                    options={draftPositionOptions}
                />
                <br/><br/><br/>
                <Link to="/draft">
                    <h1>Draft</h1>
                </Link>
            </HomeStyle>
        );
    }
}

// PropTypes
Home.propTypes = {
    
}

export default Home;
