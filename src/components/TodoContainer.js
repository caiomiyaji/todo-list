import { useState, useEffect } from "react";
import TodoList from "./TodoList";

function TodoContainer () {

    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const initialTodos = [
        {value: 'Study front-end development', done: false},
        {value: 'Study english', done: false},
        {value: 'Walk the dog', done: false}
    ];

    useEffect(() => {
        setTodoList(initialTodos)
    }, [])


    const addNewItem = (inputvalue) => {
        setTodoList([{value: inputValue, done: false}, ...todoList]);
    } 

    const deleteItem = (item) => {
        const index = todoList.indexOf(item);
        const itemList = todoList;
        if(index >= 0 ){
            itemList.splice(index, 1);
        }
        setTodoList([...itemList]);
    }

    const completeItem = (item) => {
        item.done = !item.done;
        setTodoList([...todoList])
    }

    return(
        <div className="todo-container">
            <label htmlFor="item">Adicione um novo item</label>
            <input type="text" id="item" value={inputValue} placeholder="Adicione um novo item" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => addNewItem(inputValue)}>Adicionar</button>
            <TodoList todoList={todoList} deleteItem={deleteItem} completeItem={completeItem}/>
        </div>
    )
}

export default TodoContainer;