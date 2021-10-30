 import  ItemCount  from "../ItemCount/ItemCount";

export const ItemListContainer=({texto})=>
{
    const onAdd= ()=>
    {
      
    }
    return (
            <div className="container align-center">
               <div className="row">
                    <div className="col-12">
                        <h6> {texto} </h6>
                    </div>
               </div>
              
               <div className="row">
                    <div className="col-12">
                       <ItemCount onAdd stock= {10} initial= {1}/>
                    </div>
               </div>
            </div>
    )
}