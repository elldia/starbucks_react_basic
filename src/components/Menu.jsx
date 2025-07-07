import menu1 from '../assets/images/menu001.jpg'
import menu2 from '../assets/images/menu002.jpg'
import menu3 from '../assets/images/menu003.jpg'
import menu4 from '../assets/images/menu004.jpg'
import Order from './Order'

import { useState } from 'react'

function Menu(){

const [selectMenu, setSelectMenu] = useState(null);
const products = [
    {
    name:'플러피 판다 핫 초콜릿',
    price:6900,
    src:menu1
    },{
    name:'딸기 콜드폼 라벤더라떼',
    price:7200,
    src:menu2
    },{
    name:'제주 말차 크림라떼',
    price:5400,
    src:menu3
    },{
    name:'스타벅스 망고 라떼',
    price:4500,
    src:menu4
    },
]

return(<>
    <ul className="menu" style={{display:'flex'}}>
        {products.map((data, idx)=>{
            return(
                (
                <li key={idx} onClick={()=>setSelectMenu(data)} style={{cursor:'pointer'}}>
                    <p className="img"><img src={data.src} alt="" /></p>
                    <h2>{data.name}</h2>
                    <p className="price">{data.price}</p>
                </li>
            )
            )
        })}
    </ul>
    <Order list={selectMenu} del={()=>setSelectMenu(null)} />
</>)
}
export default Menu;