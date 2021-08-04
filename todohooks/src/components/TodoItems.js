import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
const TodoItems = (props) => {
    function edit(e) {
        e.preventDefault()
        const newValue = prompt('?') 
        props.handleTodo(newValue, e.target.id)
        
    }

    // function edit(e) {
    //     e.preventDefault()
    //     let newValue = prompt('?') 
    //     newValue = {[e.target.id]:{name: newValue, id : parseInt(e.target.id)}}
    //     console.log(newValue)
    //     props.handleTodo(newValue)
        
    // }


    const items = Object.keys(props.todos).map((key) => {
        return (
            <div>
                <input
                value = {props.todos[key].name}
                />
                <button
                // variant = 'outlined'
                // size = 'small'
                // color = 'primary'
                onClick = {edit}
                id = {key}
                >Edit
                </button>
            </div>
        )
    })
    return items
    // debugger;

}

export default TodoItems;

// {props:{name: 'asdd' count: 1}}