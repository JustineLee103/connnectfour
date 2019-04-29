import React, {Component} from 'react'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            player1: 0, 
            player2: 0, 
            board: [
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
            ]
        }
    }

    render(){
        return (
            <div>
                <table>
                  {this.state.board.map((row, index) => (
                      <Row key={index} row={row}/>
                  ))}
                </table>
            </div>
        )
    }
}

const Row = ({row}) => {
    return ( 
        <div>
            <tr>
                {row.map((cell, index) => <Cell key={index}/>)}
            </tr>
        </div>
    )
}

const Cell = () => {

    return (
        <td>
            <div className="cell">
                <div className="white" />
            </div>
        </td>
    )
}



export default Board
