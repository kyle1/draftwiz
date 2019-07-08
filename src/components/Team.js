import React, { Component } from 'react';
import styled from 'styled-components';
import TeamsList from './TeamsList';
import constants from '../constants';

// const TeamStyle = styled.div`
//     padding-right: 100px !important;
//     font-size: 11px !important;

//     .focused-team {
//         color: red;
//     }
// `;

const TeamStyle = styled.div`
    font-size: 12px !important;
    width: 150px;

    .focused-team {
        color: #00b300;
    }

    .th {
        color: pink;
    }

    .lineup-row {
        padding-left: 10px !important;
    }
`;

class Team extends Component {

    state = {
        team: []
    };

    getRowColor(pos) {
        if (pos) {
            if (pos.includes("RB")) {
                return constants.colorRed;
            } else if (pos.includes("WR")) {
                return constants.colorBlue;
            } else if (pos.includes("TE")) {
                return constants.colorYellow;
            } else if (pos.includes("QB")) {
                return constants.colorGreen;
            } else if (pos.includes("K")) {
                return constants.colorPink;
            } else if (pos.includes("DST")) {
                return constants.colorPurple;
            }
        } else {
            return;
        }
    }

    render() {
        if (this.props.pickedPlayer) {
            this.state.team.push(this.props.pickedPlayer);
        }
        
        return (
            <TeamStyle>
                {/* <div className={this.props.focus ? "focused-team" : ""}> */}
                    <table className="table" style={{ width: '100%', border: '1px', borderStyle: 'solid', borderCollapse: "collapse"}}>
                        <tbody>
                            <th className={this.props.focus ? "focused-team" : ""} style={{fontWeight: 'bold'}}>{this.props.name}</th>
                            {
                                this.state.team.map((player) => {
                                    return (
                                        <tr className={"lineup-row"} style={{backgroundColor: this.getRowColor(player.Pos), marginLeft: "10px", paddingLeft: "10px"}}>{player.Overall}</tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                {/* </div> */}
            </TeamStyle>
        );
    }
}

// PropTypes
Team.propTypes = {
    
}

export default Team;
