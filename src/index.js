import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';

const App = () => {
    const title = 'React Coin';
    return (
        <div>

            <Header/>


            <h1>{title}</h1>
            <p>Crypto Currencies Financial Data</p>

        </div>
    );
};

ReactDOM.render(

    <App />,
    document.getElementById('root')
);