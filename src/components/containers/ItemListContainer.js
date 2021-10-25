import ItemCount from "../ItemCount"


export function ItemListContainer({mensaje}) {
    return(
        <span>
          <label>
            {mensaje}
          </label>
          <ItemCount stock="5" initial="1" />

        </span>
    )
}
export default ItemListContainer