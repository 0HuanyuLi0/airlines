import React from 'react';
import './reservation.css'

function Square(props) {
  return (
    // This is a HTML format
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


class Reservation extends React.Component {

    state = {
        Square:'',
    };

    renderSquare(id) {
        // const highlight = this.props.highlight
        return (
            <Square
                key={id}
                // highlight={highlight ? highlight.includes(i):false}
                // value={this.props.squares[i]}
                // onClick={() => this.props.onClick(i)}
            />
        );
    }

    
    // square to make xx rows
    renderRows(numOfRow) {
        let row = [];
        /* 
        row = [
            <square key=0/>
            <square key=1/>
            <square key=2/>
        ]
        */
        for(let i = 0; i < numOfRow; i++) {
            row.push(this.renderSquare(i));
            // row.push(<square key=0/>)
        }
        return(
            <div>{row}</div>
        )
    }

    // use renderRows to loop through 
    renderCols(numOfCol, numOfRow) {
        const col = []
        for (let i = 0; i < numOfCol ; i++) {
            col.push(this.renderRows(numOfRow));
        }
        return(
            <div>{col}</div>
        )
    }

    render(){
<<<<<<< HEAD
        return (
            <div> {this.renderRows()} </div>
=======
        return(
            <div> 
                {this.renderCols(6,10)} 
            </div>
            
>>>>>>> af4c4f44b401d56f12d70dcf2a9c26cd9c23a199
        )
    }
} // class Reservation


export default Reservation; 