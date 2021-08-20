import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

let count = 0;

const TodoItemsCreators = (props) =>  {
    const [newItemCreated, setNewItemCreated] = useState()
    const upload = (event) => {
        event.preventDefault()
        count = count + 1
        const obj = {name: newItemCreated , id: count}
        props.onCreate(obj)
        setNewItemCreated('')
    }

    const onTodoChange = (e) => {
        setNewItemCreated(e.target.value)
    }

    return(
        <div>
            <form className = 'create' onSubmit = {upload}>
                <TextField
                type = 'text'
                onChange = {onTodoChange}
                value = {newItemCreated}
                />
                <Button
                type = 'submit'
                >Submit</Button> 
            </form>    
        </div>
    )
}
    
export default TodoItemsCreators ;

