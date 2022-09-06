import React, { useState} from "react"
import './index.css'
import Lists from "./List"
import Clock from "./Time"
const saved=()=>(localStorage.getItem('data'))?JSON.parse(localStorage.getItem('data')):[]
const App = () => {
    const [task, setTask] = useState(saved)
  
    const [data, setData] = useState('')
    const [date, setdate] = useState('')
    const [time, settime] = useState('')
    let i = 0
const save=()=>{
    localStorage.setItem('data', JSON.stringify(task));
    alert("Data Saved!")
}

const search=e=>{
    setTask((tasks) => tasks.filter((task) => task.title.includes(e.target.value)));
}

const cat=e=>setData(e.target.value)
const _date=e=>setdate(e.target.value)
const _time=e=>settime(e.target.value)
const deleteItem = (index) => () =>setTask((tasks) => tasks.filter((_, i) => i !== index));

const add=()=>{
    if (data!==''&& date!=='' && time!=='')
    {
    setTask((old)=>[...old,{ title: data, date: date, time: time, id: i }])
    alert("Data Added")
    setData('')
    i++ 
    }
    else
        alert("Enter the all the fields first!")
}

    return (
        <>
            <div className="search">
                <h1>Tasks</h1>
                <input id="searchbar" placeholder="Search for your Task"/>
                <button id="ok" onClick={search}><span class="material-symbols-outlined">
                    search
                </span></button>
                <Clock/>
            </div>
            <div class="data">
                <label for="cat">Task</label>
                <input id="cat" name="cat" onChange={cat} value={data}/>
                <br/>
                <label for="time">Time</label>
                <input id="time" type="time" name="time" onChange={_time} value={time}/>
                    <br />
                    <label for="date">Date</label>
                    <input id="date" type="date" name="date" onChange={_date} value={date}/>
                        <button id="add" onClick={add}>Add Category</button>
                        <button id="save" onClick={save}>Save</button>
                    </div>
                    <ul id="categories">
                        {
                        task.map((values,index)=>{
                            return(
                                <>
                                <div className="container" id={index}>
                                <Lists task={values.title} date={values.date} time={values.time} id={values.id}/>
                                        <button onClick={deleteItem(index)}><span class="material-symbols-outlined">
                                            delete
                                        </span></button>
                                </div>
                                </>
                            )
                        })}
                    </ul>
                </>
                )
}

                export default App