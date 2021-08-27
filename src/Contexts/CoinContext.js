import React, {createContext, useState} from 'react';

export const CoinMainContext = createContext();

function CoinContext(props) {

    const [coinArray, setCoinArray] = useState([
        {id:1, name:'Bitcoin', symbol:'BTC'},
        {id:2,name:'Ethereum', symbol:'ETH'},
        {id:3,name:'Bitcoin Cash', symbol:'BCH'},
        {id:4,name:'Litecoin', symbol:'LTC'},
        {id:5,name:'USD Tether', symbol:'USDT'},
        {id:6,name:'Cardano', symbol:'ADA'},
        {id:7,name:'Binance USD', symbol:'BUSD'}
    ]);

    const deleteCoin = (id) => {
        let newArray = coinArray.filter( coin => coin.id !== id );
        let count = 0;
        newArray.map(eachValue => eachValue.id = count++);
        setCoinArray(newArray);
    }

    const setACoinArray = (coinObject) => {
        let prevObjectlenght = Object.keys(coinArray).length;
        let newId = parseFloat(prevObjectlenght) + parseFloat(1);
        setCoinArray([...coinArray, {...coinObject, id:newId}]);
    }

    return (
        <CoinMainContext.Provider value={{coinArray, setACoinArray, deleteCoin}}>
            {props.children}
        </CoinMainContext.Provider>
    );
}

export default CoinContext;