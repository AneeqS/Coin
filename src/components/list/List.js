/**
 * Created by AneeqShah on 2/26/19.
 */

import React from 'react';

class List extends React.Component{

    constructor(){
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null,
        };
    }

    componentWillMount(){

        this.setState({loading: true});

        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                this.setState({
                    currencies: data.currencies,
                    loading:false,
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                });
            });

    }

    render(){


        if(this.state.loading){
            return <div>Loading....</div>;
        }


        return (
            <div>
                text
            </div>
        );
    }

}

export default List;