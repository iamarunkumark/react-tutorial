import React, {Component} from 'react';

class Button extends Component{
    render () {
        const { clickEvent} = this.props;
        const buttonName = this.props;
        return <button onClick = {clickEvent} > {buttonName}</button>
    }
}

export default Button;