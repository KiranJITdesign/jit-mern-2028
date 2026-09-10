import {useState} from "react"
function AddTask(props){
    const [title,settitle]=useState("");
    const[description,SetDescription]=useState("");
    function HandleSubmit(e){
        e.preventDefault()
        const task={
            id:Date.now(),
            title:title,
            description:description,
            status:"pending"
        };
        console.log("object",task);
        props.onAddTask(task);

        console.log("Form Submitted")

    }
    return (
        <div> 
            <h2> Add Task</h2>
            <form onSubmit={HandleSubmit}>

    
            <label> Add Title </label>
            <input type="text" 
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            />

            
        
            <label> Add Description </label>
            <input type="text" 
            value={description}
            onChange={(e)=>SetDescription(e.target.value)}
            
            />
            <button type="submit"> Add Task</button>
                       </form>
           
        </div>
        
    );


}
           
export default AddTask;
