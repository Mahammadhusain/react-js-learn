// -----------------------------------------------------------------------------
    // ----------- REACT-REDUX -----------
// -----------------------------------------------------------------------------
    // 1- React Redux provide centralized state management system 
    // 2- if any component want to accessing state-data then it can access directly from redux's  centralized state-data storage component
    

    //============ Steps ==============
        // 1- Make Folder in (src)-->(app)-->store.js
        // 2- now in (index.js)
        import { Provider } from 'react-redux';
        import { store } from './app/store'; 
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>,
            document.getElementById('root')
        );
                
        // 3- now Create Slice in (CounterSlice.js) (slice is collection of state for specific component)
        // billow code for counter so (we defined state for couter in (CounterSlice.js) )
        import { createSlice } from '@reduxjs/toolkit'
        // this is state for counter (set initial value = 0)
        const initialState = {
        value: 0,
        }

        export const counterSlice = createSlice({
        name: 'counter',
        initialState,
        reducers: {
            // this for increment by 1
            increment: (state) => {
                state.value += 1
            },
            // this for decrement by 1
            decrement: (state) => {
            state.value -= 1
            },
            incrementByAmount: (state, action) => {
            state.value += action.payload
            },
        },
        })

        // Action creators are generated for each case reducer function
        export const { increment, decrement, incrementByAmount } = counterSlice.actions

        export default counterSlice.reducer


        // 4- now above slice add in store.js (because store is collection of all state)
        import { configureStore } from '@reduxjs/toolkit';
        // imported slice which we make for counter
        import counterReducer from '../features/counter/counterSlice';

        export const store = configureStore({
        reducer: {
            counter: counterReducer,
        },
        });

        // 5- now you can access all state which defined in (store.js)
        // NOTE:- for access state from (store.js) we need hook (useSelector)
        // NOTE:- for update state which accessed from (store.js) we need hook (useDispatch)
        import React from 'react';
        import { useSelector } from 'react-redux';

        const App = () => {

        const count = useSelector((state)=>state.counter.value)
        console.log(count);
        return(
            <>
            <div className='App'>
            <button  >+</button>
            <span>{count}</span>
            <button  >-</button>
            </div>
            </>
        )
        };

        export default App



