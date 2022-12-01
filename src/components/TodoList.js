import TodoItem from "./TodoItem";

function TodoList ({todoList, deleteItem, completeItem}) {

    return(
        <ul className="todo-list">
            {todoList.map((item, index) => (
                <TodoItem key={index} item={item} deleteItem={deleteItem} completeItem={completeItem}/>
            ))}
        </ul>
    )
}

export default TodoList;