import { RiDeleteBin2Fill, RiPencilFill, RiCheckFill, RiCloseFill } from 'react-icons/ri';

function TodoItem ({item, deleteItem, completeItem}) {
    return(
        <li className={item.done? 'todo-item complete-item' : 'todo-item incomplete-item'}>
            <button onClick={() => completeItem(item)}>
               {item.done ? <RiCloseFill className='status-item'/> : <RiCheckFill className='status-item'/>}
            </button>
            <p>{item.value}</p>
            <div>
                <button><RiPencilFill className="edit-item"/></button>
                <button onClick={() => deleteItem(item)}><RiDeleteBin2Fill className="delete-item"/></button>
            </div>
        </li>
    )
}

export default TodoItem;