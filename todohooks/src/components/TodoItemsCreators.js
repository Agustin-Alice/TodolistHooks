import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';

let count = 0;

const TodoItemsCreators = (props) =>  {

    const upload = (event) => {
        event.preventDefault()
        count = count + 1
        const obj = {name: event.target[0].value , id: count}
        props.onCreate(obj)
    }
    
    return(
        <div>
            <form className = 'create' onSubmit = {upload}>
                <input
                type = 'text'
                />
                <button>Submit</button> 
            </form>    
        </div>
    )


}

    
export default TodoItemsCreators ;

