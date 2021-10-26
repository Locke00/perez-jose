import Item from "./Item"

export function ItemList({items}) {
    
    return(
        <>
        {items.map(
            (animal)=>{
            return <Item key={animal.id} item={animal} />
            }
        )}
        </>
    )
}
export default ItemList