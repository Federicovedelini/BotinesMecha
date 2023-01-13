import Item from "../Item";
import React from "react";

const ItemList = ({data= []}) => {
    return(
        data.map(botines => <Item key={botines.id} info={botines} />)

    );
}

export default ItemList;