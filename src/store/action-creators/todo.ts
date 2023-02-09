import {Dispatch} from "redux";
import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
                    payload: res.data
                })
            }, 3000)

        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: '404 Error'}
            )
        }
    }
}
export const setTodoPage = (page: number): TodoAction => {
    return {
        type: TodoActionTypes.SET_TODO_PAGE, payload: page
    }
}