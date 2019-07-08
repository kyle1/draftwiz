import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import TeamsList from './TeamsList';
import Draftboard from './Draftboard';

const DraftStyle = styled.div`
    font-family: "Segoe UI"
`;

const TeamsListDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 250px;
`;

const teamList = [
    'Team 1',
    'Team 2',
    'Team 3',
    'Team 4',
    'Team 5',
    'Team 6',
    'Team 7',
    'Team 8',
    'Team 9',
    'Team 10',
    'Team 11',
    'Team 12',
    // 'Team 13',
    // 'Team 14' 
]

var round = 1;
var pickNum = 1;
var pickedPlayer = [];
var teamThatDrafted = 0;
var teamToDraftNext = 1;

class Draft extends Component {
    constructor(props) {
        super(props);
        this.handleDraftPick = this.handleDraftPick.bind(this);
        this.state = { teamToDraftNext: teamToDraftNext }
        this.state = { pickedPlayer: pickedPlayer };
      }

    handleDraftPick(player) {

        if (round % 2 === 0) {
            teamThatDrafted = (round * 12) - pickNum + 1;
        } else {
            teamThatDrafted = ((1-round) * 12) + pickNum;
        }

        if (pickNum % 12 === 0) {
            round += 1;
        }
        
        pickNum += 1;
        if (round % 2 === 0) {
            teamToDraftNext = (round * 12) - pickNum + 1;
        } else {
            teamToDraftNext = ((1-round) * 12) + pickNum;
        }
        // console.log("Team that just drafted is: " + teamThatDrafted);
        // console.log("Team to draft next is: " + teamToDraftNext);

        pickedPlayer = player;
        this.setState({ teamToDraftNext })
        this.setState({ pickedPlayer })
    }

    render() {
        return (
            <div>
                <DraftStyle>
                    {/* <Header /> */}
                    <Draftboard onDraftPick={this.handleDraftPick}/>
                    <TeamsListDiv>
                        <TeamsList
                            teams={teamList}
                            teamThatDrafted={teamThatDrafted}
                            teamToDraftNext={teamToDraftNext}
                            pickedPlayer={pickedPlayer} />
                    </TeamsListDiv>
                </DraftStyle>
            </div>
        );
    }
}

// PropTypes
Draft.propTypes = {
    
}

export default Draft;
