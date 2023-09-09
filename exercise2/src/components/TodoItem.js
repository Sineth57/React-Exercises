function TodoItem({todo, iscompleted}){

   
    return(
        <div>
            
                {iscompleted === true && <div>{todo} - Completed</div>} 
                {iscompleted === false && <div>{todo} - Pending</div>} 
           
            <br/>
        </div>
   
    )
}

export default TodoItem;