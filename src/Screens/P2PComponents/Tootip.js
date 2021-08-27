import React, {useContext} from 'react';
import {Tooltip} from 'react-bootstrap';
import {ToolTipMainContext} from "../../Contexts/ToolTipContext";

const renderTooltip = (props) => {

    return (

        <Tooltip id="button-tooltip" {...props}>
            'BAnk Transfer'
        </Tooltip>
    )
};

export default renderTooltip