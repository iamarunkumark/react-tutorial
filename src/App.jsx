import React, {Component} from 'react';
import Table from './TableComponent'
import Form from './FormComponent'

class App extends Component {
    state = {
        flightData: []
        /*
         header: [{
            "column" : "Flight Name"
        }, {
            "column" : "Seat Count"
        }],
        data: [
            {
                "flightName": "A300",
                "seatCount": 20
            },
            {
                "flightName": "A330",
                "seatCount": 30
            },
            {
                "flightName": "A350",
                "seatCount": 50
            }
        ]*/
    };
    handleSubmit = (data) =>     
    { 
        this.setState({
            flightData: [...this.state.flightData,data ]
        });
    }
    removeArrayElement = index => {
        const {flightData} = this.state;
        this.setState({
            flightData: flightData.filter((flightData, i) => {
                return i !== index;
            })
        })
    }
    render () {
        const header= [{
            "column" : "Flight Name"
        }, {
            "column" : "Seat Count"
        }];
        return (<div className="App">
        <Form handleSubmit={this.handleSubmit} />
        <Table tableHeader={header} tableData = {this.state.flightData} removeArrayElement = {this.removeArrayElement}/>
        </div>)
    }
}

export default App;