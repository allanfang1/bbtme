import { React } from "react"

const Category = ({catObj, currentCat, clickFunc}) => {
    return (
        <div 
            className= "col-box noselect clickable"
            id={currentCat === catObj.name ? "selected" : "" } 
            onClick={currentCat === catObj.name ? null : () => clickFunc({cat: catObj.name, content: catObj.content})} >
                <img className="cat-img" src={catObj.imglink} alt="pee pee"/>
                <div className="cat-name">{catObj.name}</div>
        </div>
    );
}

export default Category;

