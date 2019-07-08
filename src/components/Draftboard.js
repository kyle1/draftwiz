import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import styled from 'styled-components';
import '../Draftboard.css';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import constants from '../constants';

const DraftboardStyle = styled.div`
    // min-height: 100vh;
    height: 600px;
    text-align: center;
    padding-left: 31%;
    padding-right: 31%;

    .rt-tr {
      text-align: left;
      height: 3.2em;
      font-size: 12px
      font-family: "Segoe UI"
    }

    .rt-tr:hover {
      font-weight: bold !important
    }
`;

class Draftboard extends Component {

  state = {
    columns: [],
    players: []
  }

  importData = (data, file) => {
    var cols = data[0];
    var rows = data.slice(1, 302);
    var formatted = [];
    var len = cols.length;

    // convert 2d array into json object
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var obj = {};
      for (var j = 0; j < len; j++) {
        if (isNaN(row[j])) {
          obj[cols[j]] = row[j];
        } else {
          obj[cols[j]] = parseFloat(row[j]);
        }
      }
      formatted.push(obj);
    }
    
    var columns = [];
    for (var k = 0; k < cols.length; k++) {
      cols[k] = cols[k].replace('.', '');
      var columnObj = {};
      if (cols[k] === "Overall") {
        columnObj = { "Header": cols[k], "accessor": cols[k], "width": 150 };
      } else if (cols[k] === "Pos") {
        columnObj = {
          "Header": cols[k],
          "accessor": cols[k],
          "width": 78,
          filterMethod: (filter, row) => {
            if (!row[filter.id]) return;
            if (filter.value === "All") {
              return true;
            } else if (filter.value === "FLEX") {
              return row[filter.id].includes("RB") || row[filter.id].includes("WR") || row[filter.id].includes("TE");
            } else {
              return row[filter.id].includes(filter.value);
            }
          },
          Filter: ({ filter, onChange }) =>
            <select
              onChange={event => onChange(event.target.value)}
              style={{ width: "100%" }}
              value={filter ? filter.value : "All"}
            >
              <option value="All">All</option>
              <option value="RB">RB</option>
              <option value="WR">WR</option>
              <option value="TE">TE</option>
              <option value="FLEX">FLEX</option>
              <option value="QB">QB</option>
              <option value="DEF">DEF</option>
              <option value="K">K</option>
            </select>
        }
      } else {
        columnObj = { "Header": cols[k], "accessor": cols[k], "width": 58 };
      }
      columns.push(columnObj);
    }
    this.setState({ columns: columns });
    this.setState({ players: formatted });
  }

  getTrProps = (state, rowInfo, instance) => {
    if (rowInfo.row.Pos) {
      var pos = rowInfo.row.Pos;
      var bgColor = "white"; //default

      if (pos.includes("RB")) {
        bgColor = constants.colorRed;
      } else if (pos.includes("WR")) {
        bgColor = constants.colorBlue;
      } else if (pos.includes("QB")) {
        bgColor = constants.colorGreen;
      } else if (pos.includes("TE")) {
        bgColor = constants.colorYellow;
      } else if (pos.includes("K")) {
        bgColor = constants.colorPink;
      } else {
        bgColor = constants.colorPurple;
      }
      return {
        style: { background: bgColor, height: "25px", fontSize: "12px" },
        className: 'test-tr',
        onClick: (e, t) => { this.onRowClick(e, t, rowInfo) }
      }
    }
    return {};
  }

  onRowClick(e, t, rowInfo) {
    this.props.onDraftPick(rowInfo.row);
    const arrayCopy = this.state.players.filter((x) => x.Rank !== rowInfo.row.Rank);
    this.setState({ players: arrayCopy });
  }

  render() {
    return (
      <DraftboardStyle>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <CSVReader
          cssClass='react-csv-input'
          label='Import rankings   '
          onFileLoaded={this.importData}
          inputStyle={{ textAlign: 'center', margin: 'auto' }} />
        <br/>
        <ReactTable
          data={this.state.players}
          columns={this.state.columns}
          filterable
          showPagination={false}
          pageSize={-1}
          style={{ height: "548px" }}
          highlightOnHover={true}
          getTrProps={this.getTrProps}
          className="-highlight"
        />

      </DraftboardStyle>
    );
  }
}

export default Draftboard;
