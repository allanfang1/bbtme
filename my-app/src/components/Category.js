import { React } from "react"

function changeBackground(e, color) {
        e.target.style.background = color;
}

const Category = ({catObj, currentCat, clickFunc}) => {
    return (
        <div 
            className= "col-box noselect clickable"
            id={currentCat === catObj.name ? "selected" : "" } 
            onClick={currentCat === catObj.name ? null : () => clickFunc({name: catObj.name, content: catObj.content})} 
            onMouseEnter={(e) => changeBackground(e, "#faedcd")}
            onMouseLeave={(e) => changeBackground(e, "#fefae0")}>
                <img className="cat-img" src={catObj.imglink} alt="pee pee"/>
                <div className="cat-name">{catObj.name}</div>
        </div>
    );
}

export default Category;

