import React from 'react';
import MenuLogging from './Menu-Logging/logging-index';
import MenuLogged from './Menu-Start/start';

export default (props)=>{
    
        if (props.isLogged === true) {
            return <MenuLogged/>
        } else{
            return <MenuLogging/>;
        }
}