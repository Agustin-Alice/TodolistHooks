import { Button, TextField } from '@material-ui/core';

const TodoItems = (props) => {
    function edit(id) {
            const newValue = prompt('?')
            props.handleTodo(newValue, id)
        // console.log(newValue)
        // e.id es un string
    }

    const items = Object.keys(props.todos).map((key) => {
        return (
            <Todoitem
            todo= {props.todos[key]}
            onEdit = {edit}
            />
        )
    })
    return items
}

export default TodoItems;

// {props:{name: 'asdd' count: 1}}
const Todoitem = (props) => {
   const {todo,onEdit} = props

   function edit() {
       onEdit(todo.id)
   }
   
    return (
            <div key={todo.id}>
                <TextField
                    value = {todo.name}
                />
                <Button
                    variant = 'outlined'
                    color = 'primary'
                    onClick = {edit}
                >Edit
                </Button>
            </div> 
    )       
            
}

// <div key={key}>
//                 <TextField
//                     value = {props.todos[key].name}
//                 />
//                 <Button
//                     variant = 'outlined'
//                     color = 'primary'
//                     onClick = {edit(key)}
//                 >Edit
//                 </Button>
//              </div>