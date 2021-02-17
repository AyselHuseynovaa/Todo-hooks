  
import {useEffect, useReducer} from "react";

function useLocalStorageState(key, defaultValue,reducer) {

    const [state, dispatch] = useState(defaultValue,reducer, () => {
        let value;

        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        } catch (err) {
            value = defaultValue;
        }
        return value;
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, dispatch]
}
export {useLocalStorageState}
