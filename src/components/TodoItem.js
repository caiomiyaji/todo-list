import { RiDeleteBin2Fill, RiPencilFill, RiCheckFill, RiCloseFill } from 'react-icons/ri';

function TodoItem ({item, deleteItem, completeItem, openModal}) {
    return(
        <li className={item.done? 'todo-item complete-item' : 'todo-item incomplete-item'} onClick={(e) => completeItem(item)}>
            <button>
               {item.done ? <RiCheckFill className='status-item'/> : <RiCloseFill className='status-item'/>}
            </button>
            <p>{item.value}</p>
            <div>
                <button onClick={(e) => openModal(item, e)}><RiPencilFill className="edit-item"/></button>
                <button onClick={(e) => deleteItem(item, e)}><RiDeleteBin2Fill className="delete-item"/></button>
            </div>
        </li>
    )
}

export default TodoItem;