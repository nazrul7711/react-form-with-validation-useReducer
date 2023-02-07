import { useReducer } from "react";

function reducerFn(state,action){
  if(action.type==="input"){
    return {
      bool:true,
      val:action.text
    }
  }
  else if(action.type==="blur"){
    return {
      bool:true,
      val:state.val
    }
  }
  else if(action.type==="reset"){
    return{
      bool:false,
      val:""
    }
  }
  return initialThing
}
let initialThing ={
  bool:false,
  val:""
}

function useForm(logic){
  const [currState,dispatcher]=useReducer(reducerFn,initialThing)
  // const [someThingTouched, setSomeThingTouched] = useState(false);
  // const [someThingEntered, setSomeThingEntered] = useState("");


  let someThingValid = logic(currState.val) 

  let isSomeThingValid = !someThingValid && currState.bool;
  let enteredValue = currState.val

  function blurHandler(e) {
    // setSomeThingTouched(true);
    dispatcher({
      type:"blur"      
    })

  }

  let changeHandler = (e) => {
    // setSomeThingEntered(e.target.value);
    // setSomeThingTouched(true);
    dispatcher({
      type:"input",
      text:e.target.value
    })
  };

  function reset(){
    // setSomeThingEntered("")
    // setSomeThingTouched(false)
    dispatcher({
      type:"reset"
    })
  }


  return{
    someThingValid,
    enteredValue,
    isSomeThingValid,
    blurHandler,
    changeHandler,
    reset
  }
  

}

export default useForm