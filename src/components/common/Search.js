/**
 * Created by AneeqShah on 2/27/19.
 */

import React from 'react';
import {withRouter} from 'react-router-dom';
import Loading from './Loading';
import {API_URL} from '../../config';
import {handleResponse} from '../../helpers';
import './Search.css';


class Search extends React.Component {

    constructor(){

        super();
        this.state={
            searchResult: [],
            searchQuery: '',
            loading: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);


    }


    handleChange(event){

        const searchQuery = event.target.value;

        this.setState({searchQuery});

        if(!searchQuery){
            return '';
        }

        this.setState({loading: true});


        fetch(`${API_URL}/autocomplete/?searchQuery=${searchQuery}`)
            .then(handleResponse)
            .then((result) => {

                this.setState({
                    loading: false,
                    searchResult: result,
                });

            })
            .catch((error) => {

            })

    }


    handleRedirect(id){

        this.setState({
            searchQuery: '',
            searchResult: [],
        });

        this.props.history.push(`/currency/${id}`);
    }


    renderSearchResult(){

        const {searchResult, searchQuery, loading} = this.state;


        if(!searchQuery){
            return  ''
        }

        if(searchResult.length > 0){
            return(
                <div className="Search-result-container">
                    {searchResult.map(result => (
                        <div
                            key={result.id}
                            className="Search-result"
                            onClick={() => this.handleRedirect(result.id)}
                        >
                            {result.name} ({result.symbol})

                        </div>
                    ))}
                </div>
            )
        }

        if(!loading){

            return(
                <div className="Search-result-container">
                    <div className="Search-no-result">No Results found.</div>
                </div>
            );

        }



    }

    render(){

        const {loading, searchQuery} = this.state;

        return(
            <div className="Search">
                <span className="Search-icon"/>
                <input
                    className="Search-input"
                    type="text"
                    placeholder="Currency Name"
                    onChange={this.handleChange}
                    value={searchQuery}
                />

                {loading &&
                    <div className="Search-loading">
                        <Loading
                            width="12px"
                            height="12px"
                        />
                    </div>
                }

                {this.renderSearchResult()}

            </div>
        );
    }
}

export default withRouter(Search);