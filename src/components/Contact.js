import React from 'react';
import * as MDBR from "mdbreact";
import Loading from './Loading';
// import produit from '../images/produit.jpg';
export default class Product extends React.Component{
    
    constructor(){
        super()
        this.state = {
            isLoaded: false
        }
    }
    componentDidMount(){
        this.setState({
            isLoaded: true
        })
    }
    render(){
        if(this.state.isLoaded === false){
            return (
                <Loading/>
            )
        } else {

            return(
                <MDBR.MDBRow>
                    <MDBR.MDBCol lg="4" className="lg-0 mb-4"/>
    
                    <MDBR.MDBCol lg="4" className="lg-0 mb-4">
                  <MDBR.MDBCard>
                    <MDBR.MDBCardBody>
                      <div className="form-header blue accent-1">
                        <h3 className="mt-2">
                          <MDBR.MDBIcon icon="envelope" /> Write to us:
                        </h3>
                      </div>
                      <p className="dark-grey-text">
                        We'll write rarely, but only the best content.
                      </p>
                      <div className="md-form">
                        <MDBR.MDBInput
                          icon="user"
                          label="Your name"
                          iconClass="grey-text"
                          type="text"
                          id="form-name"
                        />
                      </div>
                      <div className="md-form">
                        <MDBR.MDBInput
                          icon="envelope"
                          label="Your email"
                          iconClass="grey-text"
                          type="text"
                          id="form-email"
                        />
                      </div>
                      <div className="md-form">
                        <MDBR.MDBInput
                          icon="tag"
                          label="Subject"
                          iconClass="grey-text"
                          type="text"
                          id="form-subject"
                        />
                      </div>
                      <div className="md-form">
                        <MDBR.MDBInput
                          icon="pencil-alt"
                          label="Icon Prefix"
                          iconClass="grey-text"
                          type="textarea"
                          id="form-text"
                        />
                      </div>
                      <div className="text-center">
                        <MDBR.MDBBtn color="light-blue">Submit</MDBR.MDBBtn>
                      </div>
                    </MDBR.MDBCardBody>
                  </MDBR.MDBCard>
                </MDBR.MDBCol>  
                </MDBR.MDBRow>  
            )
        }
    }
}