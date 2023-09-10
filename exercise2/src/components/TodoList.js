import TodoItem from "./TodoItem";

const todos = [{
    name:"go shopping",
    iscompleted:true,
},
{
    name:"go home",
    iscompleted:false,
},
{
    name:"do work",
    iscompleted:true,
},
{
    name:"play guitar",
    iscompleted:false,
},
];

function TodoList(){
    return(
        <div>
            <h2>My todo list</h2>

            {todos.map((todo, index) => {
                return  <TodoItem key={index} todo={todo.name} iscompleted={todo.iscompleted} />
            })}

            
        </div>
    )
}

export default TodoList; 