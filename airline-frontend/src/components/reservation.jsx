import React from 'react';
import './reservation.css'

function Square(props) {
  return (
    // This is a HTML format
    <button className="square" id={props.seatNumber} onClick={() => props.handleClickSeat(props.seatNumber)}>
      {/* {props.seatNumber} */}
    </button>
  );
  
}


class Reservation extends React.Component {

    state = {
        square:'',
        selectedSeat:'' 
    };

    handleClickSeat = (seatNumber) => {
        // console.log(seatId)
        this.setState({
            selectedSeat: seatNumber
        })
    }

    renderSquare = (rowNumber,columnLetter) => {
        const seatNumber = rowNumber + columnLetter
        // const highlight = this.props.highlight
        return (
            <Square
                key={seatNumber}
                seatNumber={seatNumber}
                handleClickSeat = {this.handleClickSeat}
                // highlight={highlight ? highlight.includes(i):false}
                // value={this.props.squares[i]}
                // onClick={() => this.props.onClick(i)}
            />
        );
    }
    
    // square to make xx rows
    renderRows = (numOfRows,columnLetter) => {
        let row = [];
        /* 
        row = [
            <square key=0/>
            <square key=1/>
            <square key=2/>
        ]
        */
        for(let rowNum = 1; rowNum < numOfRows + 1; rowNum++) {
            row.push(this.renderSquare(rowNum,columnLetter));
            // row.push(<square key=0/>)
        }
        return(
            <div>{row}</div>
        )
    }

    // use renderRows to loop through 
    renderCols = (numOfCol, numOfRow) => {
        const col = []
        const rowAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
        
        for (let i = 0; i < numOfCol ; i++) {
            col.push(this.renderRows(numOfRow, rowAlphabet[i]));
        }
       
        return(
            <div>{col}</div>
        )
    }

    render(){
        return(
            <div> 
                {this.renderCols(6,10)} 
            </div>
        )
    }
} // class Reservation


export default Reservation; 



//1. indicators rows and columns
//5. 