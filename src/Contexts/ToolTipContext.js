import React, {createContext, useState} from 'react';

export const ToolTipMainContext = createContext();

function ToolTipContext(props) {

    const [toolTip, setToolTip] = useState('Bank Transfer');

    const ResetToolTip = () => {
        setToolTip('Bank Transfer');
    }

    const setTheToolTip = (text) => {
        setToolTip(text);
    }

    return (
        <ToolTipMainContext.Provider value={{toolTip, ResetToolTip, setTheToolTip}}>
            {props.children}
        </ToolTipMainContext.Provider>
    );
}

export default ToolTipContext;