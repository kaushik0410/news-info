// import React, {Component} from 'react'; //for class based component
import React from 'react';
import Loading from './Loading.jpg';

// export class Spinner extends Component { //for class based component
//     render() { //for class based component
const Spinner = () => { //for function based component
    return (
        <div className='text-center'>
            <img src={Loading} alt="Loading" style={{ width: '200px', height: '150px' }}></img>
        </div>
    )
    // } //for class based component
}

export default Spinner;