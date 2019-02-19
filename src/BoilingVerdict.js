import React from 'react';

function BoilingVerdict(props){
    if(props.temperature >=100){
        return (
            <h1>The water is boiling</h1>
        )
    }
    return(
        <h1>Boil!!!</h1>
    )
}
export default BoilingVerdict;