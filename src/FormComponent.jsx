import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.initialiseState = {
            'flightName': '',
            'seatCount': '',
        }
        this.state = this.initialiseState;
    }
    handleFormChange = event => {
        const {name, value} = event.target
        this.setState({
            [name] : value,
        })   
    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialiseState);
    }
    render() {

        const { flightName, seatCount } = this.state;

        return (<form><label>Flight Name </label>
        <input type="text" name= "flightName" value={flightName} onChange = {this.handleFormChange} />
        <label>Seat Count </label>
        <input type="text" name= "seatCount" value={seatCount} onChange = {this.handleFormChange}/>
        <input type="button" onClick={this.submitForm} value="Submit" />
        </form>
        )
    }
}
export default Form;