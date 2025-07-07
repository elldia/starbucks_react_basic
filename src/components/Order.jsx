function Order({list, del}){
    if(!list){
        return (
            <div>
                <h2>주문목록</h2>
                <p>선택한 상품이 여기에 표시됩니다.</p>
            </div>
        )
    }
    return(<>
        <h2>주문목록</h2>
        <div className="order" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <p>
                <button onClick={del} type="button" style={{fontSize:'0.8rem', marginRight:'10px', backgroundColor:'#fff'}}>삭제</button> 
                {list.name}, {list.price}
            </p>
            <img src={list.src} alt="" style={{width:'50px'}} />
        </div>
        
    </>)
}

export default Order;