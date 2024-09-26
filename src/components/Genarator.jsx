import SectionWrapper from "./SectionWrapper"
import { SCHEMES, WORKOUTS } from "../excersices/fullworkout"
import { useState } from "react"

const Header = (props) => {
  const { index, title, description } = props
  return ( //it is a simple way to call the index, title and description whenever we wanted
    <div className="header">
      <div className="text">
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}

const Genarator = (props) => {

  const {split, setSplit, muscles, setMuscles, goal, setGoal, updateWorkout} = props

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () =>{ //to toggle the dropdown.
    setShowModal(!showModal)
  }
  const updateMuscle = (muscleGroup) =>{

    if(muscles.includes(muscleGroup)){ //remove the selected muscle group
      setMuscles(muscles.filter(val => val !== muscleGroup)) 
      return
    }

    if(muscles.length > 2){ //only select 3 muscle group or less
      return
    }

    if(split !== 'individual'){ //if not individual, it directly set the muscle group
      setMuscles([muscleGroup]) 
      setShowModal(false) //the dropdown will close
      return
    }

    setMuscles([...muscles, muscleGroup]) //add the muscle group to current muscles array

    if (muscles.length === 2) { //in individual if we select 3rd muscle it will close
      setShowModal(false)
    }
  }

  return (
    <SectionWrapper id={'generate'} header={"Genarate your workout"} title={["it's", 'Huge', "o's clock"]}>
      <Header index={'01'} title={"Pick your split"} description={"Select your workout you wish to endure."} />
      <div className="select-btn"> 
        {Object.keys(WORKOUTS).map((type, typeIndex) => { //maping the type of workout from the object
          return ( 
            <button style={{border: type === split ? '2px solid #ffffff': '2px solid #347928'}} onClick={() =>{
              setMuscles([])
              setSplit(type)
            }} key={typeIndex}>{type.replace("_", " ")}</button>
          )
        })}
      </div>
      <Header index={'02'} title={"Lock on targets"} description={"Select the muscles judged for annihilation."} />
      <div className="target-sec">
        <button onClick={toggleModal} className="select-muscle">  
          <p>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
          <i className="fa-solid fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="dropdown"> 
            {(split === 'individual' ? WORKOUTS[split] : Object.keys(WORKOUTS[split])).map((muscleGroup, muscleGroupIndex) =>{
              return( //if it individual it display the workouts of indiviual, other wise select splited and its workout
                <button onClick={() =>{ 
                  updateMuscle(muscleGroup)
                }} key={muscleGroupIndex} style={{color: muscles.includes(muscleGroup) ? '#419432' : ''}}>{muscleGroup}</button>
              )
            })}
          </div>
        )}
      </div>
      <Header index={'03'} title={"Become a Triumphant"} description={"Select your ultimate objective."} />
      <div className="select-btn">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return ( //same goes here change the border color and update goal state
            <button style={{border: scheme === goal ? '2px solid #ffffff' : '2px solid #347928'}} onClick={() => {
              setGoal(scheme)
            }} key={schemeIndex}>{scheme.replace("_", " ")}</button>
          )
        })}
      </div>
      <button id="formulate" onClick={updateWorkout}>Formulate</button>
    </SectionWrapper>
  )
}

export default Genarator