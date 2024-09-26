import { useState } from "react"

const ExerciseCard = (props) => {

    const { exercise, i } = props

    const [setsCompleted, setSetsCompleted] = useState(0)

    const handleSetIncrement = () => {
        setSetsCompleted((setsCompleted + 1) % 5)
    }



    return (
        <div className="ex-card">
            <div className="work-head">
                <h4>0{i + 1}</h4>
                <h2>{exercise.name.replaceAll("_", " ")}</h2>
                <p>{exercise.type}</p>
            </div>
            <div className="work-subhead">
                <h3>Muscle Groups</h3>
                <p>{exercise.muscles.join(' & ')}</p>
            </div>
            <div className="work-details">
                {['reps', 'rest', 'tempo'].map(info => {
                    return (
                        <div key={info} className="detail-card">
                            <h3>{info === 'reps' ? `${exercise.unit}` : info}</h3>
                            <p>{exercise[info]}</p>
                        </div>
                    )
                })}
                <button id="work-btn" onClick={handleSetIncrement}>
                    <h3>Sets</h3>
                    <p>{setsCompleted[i] || 0} / 5</p>
                </button>
            </div>
        </div>
    )
}

export default ExerciseCard