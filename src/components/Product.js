import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Loading from './Loading';
// import produit from '../images/produit.jpg';
export default class Product extends React.Component{
    
    constructor(){
        super();
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    
    componentDidMount(){
        // http://127.0.0.1:777/api/ApiTest
        // https://api.github.com/search/users?q=Dan
        fetch('https://api.github.com/search/users?q=Dan')
        .then(res => res.json())
        .then(result => {
            // console.log(result.items)
            /* When the data is fetched */
            /* result variable contains the data returned */
            this.setState({
                isLoaded: true,
                items: result.items
            })
            console.log(result)
        })
        .catch(function(err) {
            console.log(err)
        });
    }
    render(){
        if(this.state.isLoaded === false){
            return (
                <Loading/>
            )
        } else {

            return(
    
                <p>
                    <ReactBootstrap.Container>
                    
                    <ReactBootstrap.Row>
                       
                        {this.state.items.map((item,i)=> 
                            <ReactBootstrap.Col md={4}>
                                <ReactBootstrap.Card style={{ width: '18rem' }}>
                                    <ReactBootstrap.Card.Img variant="top"src={item.avatar_url} />
                                    <ReactBootstrap.Card.Body>
                                        <ReactBootstrap.Card.Title>{item.nom}</ReactBootstrap.Card.Title>
                                        <ReactBootstrap.Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </ReactBootstrap.Card.Text>
                                        <ReactBootstrap.Button variant="primary">Go somewhere</ReactBootstrap.Button>
                                    </ReactBootstrap.Card.Body>
                                </ReactBootstrap.Card>
                            </ReactBootstrap.Col>  
                         )}
                    </ReactBootstrap.Row>
                </ReactBootstrap.Container>
                </p>
                
                
            )
        }
    }
}