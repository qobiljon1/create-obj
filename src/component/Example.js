import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../Redux/actions'
const Example = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [club, setClub] = useState("")
    const [salary, setSalary] = useState("")
    const [position, setPosition] = useState("")
    const [developer, setDeveloper] = useState("")


    useEffect(() => {
        Submit()


        //eslint-disable-next-line
    }, [name, age, position, club, salary, developer])


    function Submit() {
        const obj = {
            name,
            age,
            position,
            club,
            salary,
            developer
        }
        dispatch(getAll(obj)
        )
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const checkNumber = (text) => {
        if ('0123456789'.indexOf(text.key) === -1) {
            text.preventDefault()
        }
    }
    return (
        <div className='example'>
            <h2>Example</h2>

            <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" placeholder='Name' name="Name" required value={name} onChange={(e) => { setName(e.target.value) }} autoComplete="off" />
                <input type="text " placeholder='Age' name="Age" required value={age} onKeyPress={(e) => checkNumber(e)} onChange={(e) => setAge(e.target.value)} autoComplete="off" />
                <input type="text" placeholder='Club' name="club" required value={club} onChange={(e) => { setClub(e.target.value) }} autoComplete="off" />
                <input type="text" placeholder='Salary' name="salary" required value={salary} onKeyPress={(e) => checkNumber(e)} onChange={(e) => setSalary(e.target.value)} autoComplete="off" />
                <select name="select" onChange={(e) => { setPosition(e.target.value) }}>
                    <option value={""}>Select...</option>
                    <option>Goalkeeper</option>
                    <option>Right Fullback</option>
                    <option>Left Fullback</option>
                    <option>Center Back</option>
                    <option>Center Back (or Sweeper, if used)</option>
                    <option>Defending/Holding Midfielder</option>
                    <option> Right Midfielder/Winger</option>
                    <option>Central/Box-to-Box Midfielder</option>
                    <option>Striker</option>
                    <option>Attacking Midfielder/Playmaker</option>
                    <option>Left Midfielder/Wingers</option>
                </select>
                <div className="radio">
                    <label >
                        Yes &nbsp;
                        <input type="radio" value="Yes" name="Developer" onChange={(e) => setDeveloper(e.target.value)} />
                    </label>
                    <label>
                        No &nbsp;
                        <input type="radio" value="No" name="Developer" onChange={(e) => setDeveloper(e.target.value)} />
                    </label>
                </div>
                <div className="buttons">
                    <button className="submit_btn btn" onClick={Submit}>Submit</button>
                    <span>or</span>
                    <button className="edit_btn btn">Edit</button>
                </div>
            </form>
        </div>
    )
}

export default Example