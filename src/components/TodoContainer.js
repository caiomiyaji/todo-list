import { useState, useEffect, useRef} from "react";
import TodoList from "./TodoList";
import Modal from 'react-modal';
import { RiCloseFill } from "react-icons/ri";

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Modal
Modal.setAppElement('#root');

function TodoContainer () {

    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const initialTodos = [
        {value: 'Study front-end development', done: false},
        {value: 'Study english', done: false},
        {value: 'Walk the dog', done: false}
    ];
    const input = useRef();

    const [modalStatus, setModalStatus] = useState(false);
    const [editInput, setEditInput] = useState('');
    const [editTask, setEditTask] = useState({});

    useEffect(() => {
        setTodoList(initialTodos)
    }, []);

    const addNewItem = (inputvalue) => {
        if (inputValue.length > 0) {
            setTodoList([{value: inputValue, done: false}, ...todoList]);
            setInputValue('');
        }else{
            notify('error');
        }
    } 

    const deleteItem = (item, e) => {
        e.stopPropagation();
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
        if(item.done === true) notify('complete');
    }

    const openModal = (item, e) => {
        e.stopPropagation();
        setEditTask(item);
        setEditInput(item.value);
        setModalStatus(true);
    }

    const closeModal = () => {
        setModalStatus(false);
    }

    const updateTaskValue = () => {
        if(editInput.length > 0){
            const index = todoList.indexOf(editTask);
            todoList[index].value = editInput;
            setTodoList(todoList);
            closeModal();
            notify('success_edit')

            setTimeout(() => {
                input.current.focus();
            }, 10);
        }else{
            notify('error')
        }
    }

    const notify = (type) => {

        switch (type){
        case 'error':
            toast.error('Give your task a name!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            break;
        case 'complete':
            toast.success("Congrats! You've completed a task!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            break;
        case 'success_edit':
            toast.success('Your task was updated!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            break;
        }

    }

    return(
        <div className="todo-container">
            <label htmlFor="item">Add a new task</label>
            <input type="text" id="item" className="input" ref={input} value={inputValue} placeholder="Add a new task" onChange={(e) => setInputValue(e.target.value)} onKeyUp={(e) => e.key === 'Enter' && addNewItem(inputValue)}/>
            <button onClick={(e) => addNewItem(inputValue)}>Add</button>
            <TodoList setTodoList={setTodoList} todoList={todoList} deleteItem={deleteItem} completeItem={completeItem} openModal={openModal}/>

            <Modal 
            isOpen={modalStatus}
            onRequestClose={closeModal}
            className='modal'
            overlayClassName='overlay'
            >
            <div className="modal-title">
                <h2>Edit Task</h2>
                <RiCloseFill className="close-modal" onClick={() => closeModal()}/>
            </div>
            <div className="modal-content">
                <label htmlFor="task">Task title</label>
                <input type="text" id="task" className='input' value={editInput} onChange={(e) => setEditInput(e.target.value)} onKeyUp={(e) => e.key === 'Enter' && updateTaskValue()}/>
                <button onClick={() => updateTaskValue()}>Save</button>
            </div>
            </Modal>
            <ToastContainer />
        </div>
    )
}

export default TodoContainer;