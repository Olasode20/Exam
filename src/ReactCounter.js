import React from "react"
import { useRef } from "react"

function ReactCounter() {

    const inputRef = useRef();
    const reducerCounter = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            case 'reset':
                return { count: 0 }
            case 'setvalue':
                return { count: action.payload }
            default:
                throw new Error('Error occured in counter')
            // return { state }

        }
    }
    const SetValue = (event) => {
        event.preventDefault();
        dispatch({ type: 'setvalue', payload: Number(event.target.number.value) });
        inputRef.current.value = ""
    }
    const startingState = { count: 0 }
    const [state, dispatch] = React.useReducer(reducerCounter, startingState)



    return (
        <section>
            <div className="container">
                <h1> Counter App </h1>
                <div className="value">
                    <h2>{state.count}</h2>
                    <form onSubmit={SetValue}>
                        <input ref={inputRef} type="number" name="number" placeholder="Enter Value" />
                        <button className="action-btn" type="submit">SetValue</button>
                    </form>
                </div>
                <div className="btn">
                    <button className="action-btn" onClick={() => { dispatch({ type: 'increment' }) }}>Increment</button>
                    <button className="action-btn" onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement</button>
                    <button className="action-btn" onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
                </div>
            </div>
        </section >

    )
}




export default ReactCounter;