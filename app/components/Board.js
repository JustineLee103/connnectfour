import React, {Component} from 'react'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            player1: 1, 
            player2: 2, 
            currentplayer: 1,
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
        this.play = this.play.bind(this)
        this.togglePlayer = this.togglePlayer.bind(this)
    }

    togglePlayer(){
        return (this.state.currentplayer === this.state.player1) ? this.state.player2 : this.state.player1
    }

    play(column){
        const boardCopy = this.state.board.slice()
        for (let i = 6; i >= 0; i--){
            if (!boardCopy[i][column]){
                boardCopy[i][column] = this.state.currentplayer
                this.setState({
                    board: boardCopy,
                    currentplayer: this.togglePlayer()
                })
                break;
                }
            }
    }

    render(){
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.board.map((row, index) => (
                            <Row key={index} row={row} play={this.play}/>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const Row = (props) => {
    const row = props.row
    const play = props.play
    return ( 
            <tr>
                {row.map((cell, index) => 
                <Cell key={index} value={cell} column={index} play={play} />
                )}
            </tr>
    )
}

const Cell = (props) => {
    const value = props.value
    const column = props.column
    const play = props.play
    let color = 'white'
    if (value === 1){
        color = 'gold'
    } else if (value === 2){
        color = 'orange'
    }

    return (
        <td>
            <div className="cell" onClick={()=>{play(column)}}>
                <div className={color}  />
            </div>
        </td>
    )
}



export default Board
