import {useParams} from "react-router-dom";
function TaskDeatiles(){
    const {id}= useParams();
    return (

        <div> 
                <h1> 
                    Task Deatiles
                </h1>
                <p> 
                  Task Id :{id}
                </p>


        </div>

    )
}
export default TaskDeatiles;