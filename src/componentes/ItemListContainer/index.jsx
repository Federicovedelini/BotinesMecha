import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React,{useState, useEffect} from 'react';
import Title from '../Title';

const films = [
 
  
   {id:2, image:"https://tse4.mm.bing.net/th?id=OIP.wUIKAvTvowYtOxS4XoJHcwHaHa&pid=Api&P=0",  
    title:"Hypervenom"},
  
    {id:3, image:"https://www.nuevasfutbol.com/6996-thickbox_default/nike-mercurial-superfly-360-elite-anti-clog-sg-pro-negro-or.jpg",  
    title: "Mercurial"},

    {id:4, image: "https://tse2.mm.bing.net/th?id=OIP.4gVyLTaJDTWFiY8S_GDYzgHaHa&pid=Api&P=0",
    title:"Nemezis"},
   
    {id:5, image:"https://tse3.mm.bing.net/th?id=OIP.QOVpwrlY0VvpWW_jMalZ8wHaHa&pid=Api&P=0",  
     title:"copa"},
   
     {id:6, image:"https://img.planetafobal.com/2021/06/messi-botines-adidas-copa-america-2021-el-retorno-sa-1024x722.jpg",
    title:"Messi"}
   
];



export const ItemListContainer = ({ texto }) => {
  
  const [data, setData] = useState ([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films);

      }, 3000);
    });

    getData.then(res => setData(res));


  }, [])

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);

  }

    return ( 
      <>
      <Title greeting= {texto} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
      </>
    );

}

export default ItemListContainer;
