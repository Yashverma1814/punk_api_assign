import React, { useEffect, useState } from 'react'
import { CardComponent } from '../component/CardComponent'
import axios from 'axios';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const HomePage = () => {

    const [data,setData] = useState([]);
    const [search,setSearch] = useState('');
    const [input,setInput] = useState('');
    const fetchData = () =>{
        axios.get(`https://api.punkapi.com/v2/beers`)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        });
    }

    const searched = () => {
        setSearch(input)
    }

    useEffect(()=>{
        fetchData();
    },[])


  return (
    <div>
        <center>
        <h1>HomePage</h1>
        

        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search here...."
                inputProps={{ 'aria-label': 'search google maps' }}
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searched}>
                <SearchIcon />
            </IconButton>
        </Paper>
        
        
        <div className='cardContainer'>
        {
            data.filter((elem)=>{
                let p_name = elem.name.toLowerCase()
                let s_name = search.toLowerCase()
                if(p_name.includes(s_name)){
                    return elem
                }
            }).map((el)=>{
                return(<div key={el.id}>
                    <CardComponent product={el}/>
                </div>)
            })
        }
        </div>
        </center>
    </div>
  )
}
