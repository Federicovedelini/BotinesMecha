import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const film = {id:1, image: "https://www.nuevasfutbol.com/6996-thickbox_default/nike-mercurial-superfly-360-elite-anti-clog-sg-pro-negro-or.jpg",
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