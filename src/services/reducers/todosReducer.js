import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstant"

const initialState = {
    todos: [],
    loading: false,
    error: null,
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload,
                error: null,
            }

        case GET_TODOS_FAILED:
            return {
                ...state,
                loading: false,
                todos: [],
                error: action.payload,
            }

        default:
            return state;
    }
}

export default todosReducer;