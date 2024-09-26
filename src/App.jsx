import Hero from "./components/Hero"
import Genarator from "./components/Genarator"
import Workout from "./components/Workout"
import { useState } from "react"
import { generateWorkout } from "./excersices/functions"

function App() {

  const [workout, setWorkout] = useState(null)
  const [split, setSplit] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  const updateWorkout = () => {

    if (muscles.length < 1) {
      return
    }

    let newWorkout = generateWorkout({ split, muscles, goal })
    console.log(newWorkout)
    setWorkout(newWorkout)
  }

  return (
    <main>
      <Hero />
      <Genarator split={split} setSplit={setSplit} muscles={muscles} setMuscles={setMuscles} goal={goal} setGoal={setGoal} updateWorkout={updateWorkout} />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
