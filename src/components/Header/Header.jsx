import React from "react";
import Button from "../Button/button";
const Header = () => {
    return (
        <div className={'header'}>
            <Button>Close</Button>
            <span className={'username'}></span>
        </div>


    );

};

export default Header;