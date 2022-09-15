// Have split what was originally 'reservations.jsx' into two seperate .jsx files
//
// 'MakeReservation.jsx'        and         'reservations.jsx'
//
// The purpose of THIS file [MakeReservation.jsx] is to handle all of the 
// function associated with booking/reserving of new flights. 
//      [Purpose of 'reservations.jsx' is now to act as a quick referral
//      for the user to view existing bookings]

import React from 'react';
import './reservation.css'
import axios from 'axios';


function Square(props) {
   return (
        // This is a HTML format
        <button className="square" id={props.seatNumber} onClick={() => props.handleClickSeat(props.seatNumber)}>
            {/* {props.seatNumber} */}
        </button>
    );

}


class MakeReservation extends React.Component {

    state = {
        square: '',
        selectedSeat: '',
        occupiedPositions: [],
        loading: true,
        error: null,
        airplane:null,
        flight:null,
        user:null
    };

    componentDidMount() {

    console.log(this.props.match.params.flightNumber);
    this.fetchBookings(this.props.match.params.flightNumber)
    setInterval(()=>this.fetchBookings(this.props.match.params.flightNumber),1000)
    }


    fetchBookings = async (flightID) => {
        try {
            const response = await axios.get(`http://localhost:3000/bob/reservations/${flightID}`);
            console.log(`response`, response.data);
            this.setState({
                occupiedPositions: response.data.bookedArr,
                airplane: response.data.airplane,
                flight:response.data.flight,
                user:response.data.user,
                loading: false
            })


        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })  //  this.setState
        }       //  catch
    }           //  fetchBookings()

    handleClickSeat = (seatNumber) => {
        console.log(seatNumber)
        this.setState({
            selectedSeat: seatNumber
        })


    }


    renderSquare = (rowNumber, columnLetter) => {
        const rowAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
        const columnNumber = rowAlphabet.findIndex(ele => ele === columnLetter)

        // two check nested arrays as include. doesnt work on nested arrays
        function arrayAlreadyHasArray(arr, testArr){
            for(var i = 0; i<arr.length; i++){
                let checker = []
                for(var j = 0; j<arr[i].length; j++){
                    if(arr[i][j] === testArr[j]){
                        checker.push(true)
                    } else {
                        checker.push(false)
                    }
                }
                if (checker.every(check => check === true)){
                    return true
                }
            }
            return false
        }

        const seatNumber = rowNumber + columnLetter
        // const highlight = this.props.highlight
        // console.log(seatNumber);

        // console.log([rowNumber, columnNumber],this.state.occupiedPositions,this.state.occupiedPositions.includes([rowNumber, columnNumber]));

      
      

        // const cell = (this.state.selectedSeat === seatNumber || arrayAlreadyHasArray(this.state.occupiedPositions,[rowNumber, columnNumber]))
        //     ?
        //     <div className='filled'></div>
        //     :
        //     <Square
        //         key={seatNumber}
        //         seatNumber={seatNumber}
        //         handleClickSeat={this.handleClickSeat}
        //     />


        const cell = ()=>{
            if (arrayAlreadyHasArray(this.state.occupiedPositions,[rowNumber, columnNumber])) {
                return <div className='filled'></div>
            }else if(this.state.selectedSeat === seatNumber){
                return <div className='select'></div>
            }else{
                return <Square
                        key={seatNumber}
                        seatNumber={seatNumber}
                        handleClickSeat={this.handleClickSeat}
                    />
            }
        }


        return cell()
    }

    // square to make xx rows
    renderRows = (numOfRows, columnLetter) => {
        let row = [];
        /* 
        row = [
            <square key=0/>
            <square key=1/>
            <square key=2/>
        ]
        */
        for (let rowNum = 1; rowNum < numOfRows + 1; rowNum++) {
            row.push(this.renderSquare(rowNum, columnLetter));
            // row.push(<square key=0/>)
        }
        return (
            <div>{row}</div>
        )
    }

    // use renderRows to loop through 
    renderCols = (numOfCol, numOfRow) => {
        const col = []
        const rowAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

        for (let i = 0; i < numOfCol; i++) {

            col.push(this.renderRows(numOfRow, rowAlphabet[i]));
        }

        return (
            <div>{col}</div>
        )
    }

    postBooking= async (selectedSeat) => {
        const colLetter = selectedSeat.slice(-1)
        const row = Number(selectedSeat.slice(0,-1))
        const rowAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

        const col = Number(rowAlphabet.findIndex(ele => ele === colLetter))

        console.log([row,col]);

        try{
            const response = await axios.post(`http://localhost:3000/bob/reservations/${this.state.flight.flight_number}`,{
                user_id:this.state.user.id,
                flight_id:this.state.flight.id,
                row:row,
                col:col
            });

            console.log(response);
        }catch(err){
            this.setState({
                loading: false,
                error: err
            })  
        }


    }


    render(){
        return (
            <div>

                <h1>Booking for the flight of {this.props.match.params.flightNumber}</h1>
                {
                    this.state.loading
                    ?
                    <p>Loading....</p>
                    :
                   this.renderCols(this.state.airplane.seating_column, this.state.airplane.seating_row)
                }
                <button onClick={()=>this.postBooking(this.state.selectedSeat)}>Book</button>
            </div>
        )
    }

} // class MakeReservation


export default MakeReservation;
