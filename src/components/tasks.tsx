import React, {useEffect, useState} from 'react';
import {TaskInfo, useGetTasks} from "../api/tasksApi";
import {useNavigate} from "react-router";
import {useLogOut} from "../api/authApi";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

export function Tasks() {
    const [tasks, setTasks] = useState<TaskInfo[]>([])
    let navigate = useNavigate();
    const [getTasks, responseTasks] = useGetTasks();
    const [logOut] = useLogOut();
    const [ready, setReady] = useState<boolean>(false)
    useEffect(() => {
        getTasks()
    }, [])
    useEffect(() => {
        if (responseTasks && responseTasks != undefined) {
            setTasks(responseTasks)
        }
    }, [responseTasks])
    return <div>
        {tasks.map((task) => {
            return <div>{
                task.title
            }
                <Popup trigger={<button> Start</button>} modal>
                    <div>Description:{task.description}</div>
                    <div><input type={"checkbox"} onChange={() => setReady(!ready)} checked={ready}/>I agree to start
                    </div>
                    <div>
                        <button disabled={!ready} onClick={() => navigate("/task/" + task._id)}>Proceed</button>
                    </div>
                </Popup>

            </div>
        })}
        <button onClick={() => {
            logOut();
            navigate("/login")
        }}>Log out
        </button>
    </div>
}
