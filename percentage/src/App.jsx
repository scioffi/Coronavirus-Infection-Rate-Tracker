import React from "react";
import moment from "moment";
import { Table} from "react-bootstrap";
import { MDBDataTable } from 'mdbreact';
import BootstrapTable from 'react-bootstrap-table-next';

import listOfStates from "./utils/states.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataset: [],
      mdbTable: null
    };
  }

  async componentDidMount() {
    let apiData;
    
    try {
      apiData = await fetch("https://api.covidtracking.com/v1/states/current.json");
    } catch (e) {
      console.log(e);
    }

    apiData = await apiData.json();
    this.parseData(apiData);
  }

  parseData = ((api) => {
    const dataset = [];
    let totalCases = 0;

    api.forEach((covidState) => {
      const obj = {};
      const state = listOfStates[covidState.state];

      if (state !== undefined && state !== null) {
        obj.state = covidState.state;
        obj.stateName = state.name;
        obj.population = state.population;
        
        obj.date = covidState.lastUpdateEt;
        obj.cleanDate = moment(covidState.lastUpdateEt, "MM/DD/YYYY HH:mm").format("MMM Do");
        obj.newCases = covidState.positiveIncrease;
        obj.newTests = covidState.totalTestResultsIncrease;
        obj.totalCases = covidState.positive;

        const popPerMil = (state.population / 1000000).toFixed(0);
        const newPerMil = (covidState.positiveIncrease / popPerMil).toFixed(0);
        const totPerMil = (covidState.positive / popPerMil).toFixed(0);

        obj.newPerMil = newPerMil;
        obj.totPerMil = totPerMil;
        
        totalCases += obj.newCases;
        dataset.push(obj);
      } else {
        console.log("No State info for: " + covidState.state);
      }
      
    });


    // Generate Table thingy
    const headerStyle = {
      "fontWeight": "bold"
    };

    const formatter = (cell) => {
      return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    }

    const mdbTable = {
      columns: [
        {
          text: "State",
          dataField: "stateName",
          sort: true,
          style: headerStyle,
          headerStyle
        },
        {
          text: "Last Updated",
          dataField: "cleanDate",
          headerStyle
        },
        {
          text: "New Cases",
          dataField: "newCases",
          sort: true,
          headerStyle,
          formatter
        },
        {
          text: "Total Cases",
          dataField: "totalCases",
          sort: true,
          headerStyle,
          formatter
        },
        {
          text: "New Cases per 1 Million",
          dataField: "newPerMil",
          sort: true,
          headerStyle,
          formatter
        },
        {
          text: "Total Cases per 1 Million",
          dataField: "totPerMil",
          sort: true,
          headerStyle,
          formatter
        },
        {
          text: "Population",
          dataField: "population",
          sort: true,
          headerStyle,
          formatter
        }
      ],
      rows: dataset
    };

    this.setState({
      dataset,
      mdbTable,
      totalCases
    });
  });

  render() {
    return(
      <React.Fragment>
        <header>
          <h1>Some interesting COVID stats</h1>
        </header>
        <section>
          {this.state.dataset.length === 0 && (
            <div>
              <h3>Crunching the latest numbers...</h3>
            </div>
          )}

          {this.state.dataset.length > 0 && 1 == 2 && (
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>State</th>
                    <th>Lastest Update</th>
                    <th>New Cases</th>
                    <th>Total Cases</th>
                    <th>New Cases per 1 Million</th>
                    <th>Total Cases per 1 Million</th>
                    <th>Population</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.dataset.map((row, index) => {

                    return (
                      <tr key={index}>
                        <td>{row.stateName}</td>
                        <td>{row.cleanDate}</td>
                        <td>{row.newCases}</td>
                        <td>{row.totalCases}</td>
                        <td>{row.newPerMil}</td>
                        <td>{row.totPerMil}</td>
                        <td>{row.population}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )}

          {this.state.mdbTable !== null && 1 == 2 && (
            <MDBDataTable striped bordered hover sortable paging={false} data={this.state.mdbTable} />
          )}

          {this.state.mdbTable !== null && (
            <div>
              New Cases Today: {this.state.totalCases}
              <BootstrapTable keyField='stateName' data={ this.state.mdbTable.rows } columns={ this.state.mdbTable.columns } />
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
