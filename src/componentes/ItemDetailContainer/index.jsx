import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const film = {id:1, image: "https://www.mercurialbaratas.com/5166-thickbox_default/nike-tiempo-legend-vii-elite-fg-botas-de-futbol-cian-negro-naranja.jpg",
title:"Tiempo"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (film);
            }, 3000);
        });
        getData.then (res => setData(res));
    }, [])


    return(
        <ItemDetail data={data} />

    );

    
}

export default ItemDetailContainer;