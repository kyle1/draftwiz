import React, { Component } from 'react';
import styled from 'styled-components';
import Team from './Team.js';

const TeamsListStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 10px;
`;

class TeamsList extends Component {
    render() {
        console.log(this.props.teamToDraftNext);
        var teamComponents = [];

        for (let i = 0; i < this.props.teams.length; i++) {
            if (i === this.props.teamThatDrafted-1) {
                //add player to the team that just picked
                teamComponents.push(
                    <Team
                        key={i}
                        name={this.props.teams[i]}
                        teamThatDrafted={this.props.teamThatDrafted}
                        pickedPlayer={this.props.pickedPlayer}
                        focus={i === (this.props.teamToDraftNext - 1) ? true : false}
                    />
                )
            } else {
                teamComponents.push(
                    <Team
                        key={i}
                        name={this.props.teams[i]}
                        focus={i === (this.props.teamToDraftNext - 1) ? true : false}
                    />
                );
            }
        }

        return (
            <TeamsListStyle>
                {teamComponents}
            </TeamsListStyle>
        );
    }
}

// PropTypes
TeamsList.propTypes = {
    
}

export default TeamsList;
