import TodoItem from "./TodoItem";

function TodoList(){
    return(
        <div>
            <h2>My todo list</h2>
            <TodoItem todo="Go shopping" iscompleted={true} />
            <TodoItem todo="Play guitar" iscompleted={false}/>
            <TodoItem todo="Go home" iscompleted={true}/>
            <TodoItem todo="Play cricker" iscompleted={false}/>
        </div>
    )
}

export default TodoList; 