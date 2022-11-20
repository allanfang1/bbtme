import { React } from "react"

function changeBackground(e, color) {
        e.target.style.background = color;
}

const Option = ({optName, currOpt, clickFunc}) => {
    return (
        <div 
            className="col-box noselect clickable"
            id={currOpt === optName ? "selected" : "" } 
            onClick={() => clickFunc(optName)} 
            onMouseEnter={(e) => changeBackground(e, "#faedcd")}
            onMouseLeave={(e) => changeBackground(e, "#fefae0")}>
                <div className="cat-name">{optName}</div>
                {/* <div>{current}</div> */}
        </div>
    );
}

export default Option;
