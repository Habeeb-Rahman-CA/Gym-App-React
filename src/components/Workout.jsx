import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"

const Workout = (props) => {

  const { workout } = props

  return (
    <SectionWrapper header={"Welcome to"} title={["The", 'DANGER', "zone"]}>
      <div className="workout-section">
        {workout.map((exercise, i) => {
          return (
            <ExerciseCard i={i} exercise={exercise} key={i} />
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Workout