import { useState } from "react";

function Skills(){
    let [skill,setSkill]=useState([]);
    let handleSkill=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkill([...skill, event.target.value]);
        }
        else{
            setSkill([skill.filter((item)=>{
                item!=event.target.value;
            })])
        }
    }
    return(
        <div>
            <input type="checkbox" onChange={handleSkill} id="java" value="java"/>
            <label htmlFor="java">Java</label>
            <br/>
            <br/>

            <input type="checkbox"  onChange={handleSkill} id="js" value="JavaScript"/>
            <label htmlFor="js">JavaScript</label>
            <br/>
            <br/>


            <input type="checkbox"  onChange={handleSkill} id="node" value="NodejS"/>
            <label htmlFor="node">Nodejs</label>
            <h2>{skill}</h2>
        </div>
    )
}
export default Skills;