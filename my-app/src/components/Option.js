import { React } from "react"

const Option = ({optName, current, clickFunc}) => {
    return (
        <div 
            className="col-box noselect"
            id={current.opt === optName ? "selected" : "" } 
            onClick={() => clickFunc({cat: current.cat, content: current.content, opt: optName})} >
                <div className="cat-name">{optName}</div>
                {/* <div>{current}</div> */}
        </div>
    );
}

export default Option;
