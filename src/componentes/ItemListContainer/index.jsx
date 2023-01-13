
import ItemList from '../ItemList';
import React,{useState, useEffect} from 'react';
import Title from '../Title';
import { useParams } from 'react-router-dom';

const botines = [
 
  
   {id:1, image:"https://tse4.mm.bing.net/th?id=OIP.wUIKAvTvowYtOxS4XoJHcwHaHa&pid=Api&P=0", category: 'botines_nike',  
    title:"Hypervenom"},
  
    {id:2, image:"https://www.nuevasfutbol.com/6996-thickbox_default/nike-mercurial-superfly-360-elite-anti-clog-sg-pro-negro-or.jpg", category: 'botines_nike',  
    title: "Mercurial"},

    {id:3, image: "https://tse2.mm.bing.net/th?id=OIP.4gVyLTaJDTWFiY8S_GDYzgHaHa&pid=Api&P=0", category: 'botines_adidas',
    title:"Nemezis"},
   
    {id:4, image:"https://tse3.mm.bing.net/th?id=OIP.QOVpwrlY0VvpWW_jMalZ8wHaHa&pid=Api&P=0", category: 'botines_adidas', 
     title:"copa"},
   
     {id:5, image:"https://img.planetafobal.com/2021/06/messi-botines-adidas-copa-america-2021-el-retorno-sa-1024x722.jpg", category: 'botines_adidas',
    title:"Messi"}
   
];



export const ItemListContainer = ({ texto }) => {
  
  const [data, setData] = useState ([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(botines);

      }, 1000);
    });
    if(categoriaId){
      getData.then(res => setData(res.filter(botines => botines.category === categoriaId)));

    }else{
      getData.then(res => setData(res));

    }

  }, [categoriaId])

  
  

    return ( 
      <>
      <Title greeting= {texto} />
      
      <ItemList data={data} />
      </>
    );

}

export default ItemListContainer;
