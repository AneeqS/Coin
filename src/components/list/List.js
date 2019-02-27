/**
 * Created by AneeqShah on 2/26/19.
 */

import React from 'react';
import {handleResponse} from '../../helpers';
import {API_URL} from '../../config';
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination';

class List extends React.Component{

    constructor(){
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1,
        };

        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }

    componentWillMount(){
        this.fetch();
    }

    fetch(){

        this.setState({loading: true});

        const {page} = this.state;

        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)
            .then((data) => {
                const {totalPages, currencies} = data;

                this.setState({
                    currencies,
                    totalPages,
                    loading:false,

                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                });
            })
    }



    handlePaginationClick(direction){

        let nextPage = this.state.page;

        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

        this.setState({page: nextPage}, () => {
            this.fetch();
        });

    }

    render(){


        const {loading, error, currencies, page, totalPages} = this.state;

        //render when loading data from API
        if(loading){
            return <div className="loading-container"><Loading/></div>;
        }

        //render when error getting data from API
        if(error){
            return <div className="error">{error}</div>
        }


        return (

        <div>

            <Table
                currencies={currencies}
            />

            <Pagination

                totalPages = {totalPages}
                page = {page}
                handlePaginationClick = {this.handlePaginationClick}
            />

        </div>

        );
    }

}

export default List;