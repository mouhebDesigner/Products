import React from 'react'
import { Spinner } from 'react-bootstrap';
export default class Loading extends React.Component{
    render(){
        return(
            <div style={{
                height: '100vh',
                
            }}>

            <div style={{
                position: 'relative',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>

                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
            </div>
        )
    }
}