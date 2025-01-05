import React from "react";
import "./component.style.css"
import SHOP_DATA from "./082 shop.data";
import Preview from "../collection-preview/preview.component";

class Collection extends React.Component{
    constructor() {
        super() 
        this.state = {
            productData : SHOP_DATA
        }
    }
    render(){
        return(
            <div className="collection">
                {
                    this.state.productData.map(({id,...others})=>{
                        return(
                           <Preview key={id} {...others}  />
                        )
                    })
                }
            </div>
        )
    }
}
export default Collection