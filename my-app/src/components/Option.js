import { React } from "react"

const Option = ({optName, currOpt, clickFunc}) => {
    return (
        <div 
            className="col-box noselect clickable"
            id={currOpt === optName ? "selected" : "" } 
            onClick={() => clickFunc(optName)} >
                <div className="cat-name">{optName}</div>
                {/* <div>{current}</div> */}
        </div>
    );
}

export default Option;
