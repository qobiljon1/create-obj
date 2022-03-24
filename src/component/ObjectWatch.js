import React from 'react'
import { useSelector } from "react-redux"

const ObjectWatch = () => {
    const { name, age, position, club, salary, developer } = useSelector(state => state)
    return (
        <div className='watch'>
            <h2>Watch</h2>
            <p>ⓘ Change inputs value to update <br /> watched values</p>

            <div className="object_action">
                <pre>
                    {"{"}
                       <p>
                        "Name": "{name}", <br />
                        "Age": "{age}", <br />
                        "Club": "{club}", <br />
                        "Salary": "{salary}", <br />
                        "Position": {position}, <br />
                        "Developer": "{developer}"
                       </p>
                    {"}"}
                </pre>
            </div>
        </div>
    )
}

export default ObjectWatch