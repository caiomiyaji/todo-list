import TodoItem from "./TodoItem";

function TodoList ({todoList, deleteItem, completeItem, openModal}) {

    return(
        <ul className="todo-list">
            {todoList.map((item, index) => (
                <TodoItem key={index} item={item} deleteItem={deleteItem} completeItem={completeItem} openModal={openModal}/>
            ))}
        </ul>
    )
}

export default TodoList;