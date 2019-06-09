import React, {Component} from 'react';
import Button from './ButtonComponent';

//const TableHeader = () => { return (<thead><th><td>Flight Name</td><td>Seat Count</td></th></thead>) };
const TableBody = (props) => {
    const rows = props.tableData.map((row,index) => {
        return (
            <tr key={index}>
                <td> {row.flightName}</td>
                <td> {row.seatCount}</td>
                <td>
                    <button onClick= {() => props.removeArrayElement(index)}> Delete </button>
                </td>
            </tr>
        )
    })
    return (<tbody>{rows}</tbody>)
}

class TableHeader extends Component {
    render() {
        const headerFields = this.props.tableHeader;
        const rows = headerFields.map((row, index) => {
            return <th key={index}>{row.column}</th>
        })
        return (<thead> 
        <tr>{rows}</tr>
             </thead>)
        
    }
}

class Table extends Component {
    
    render () {
    const {tableData} = this.props;
    const {tableHeader} = this.props;
    const {removeArrayElement} = this.props;
    return (<table>
        <TableHeader tableHeader = {tableHeader} removeArrayElement = {removeArrayElement} />
        <TableBody tableData={tableData}  removeArrayElement = {removeArrayElement} />
        </table>)
    }
}

export default Table;