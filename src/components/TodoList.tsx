import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

export const TodoList: React.FC = () => {
    const {page, error, loading, limit, todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useAction();

    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])


    if (loading) return <h1>loading...</h1>
    if (error) return <h1>{error}</h1>
    return (
        <div>
            {
                todos.map(t => <div key={t.id}>{t.id} - {t.title}</div>)
            }
            <div style={{display: 'flex'}}>
                {pages.map((p, index) => <div
                    onClick={() => setTodoPage(p)}
                    key={index}
                    style={{border: p === page ? '2px solid green': '1px solid gray', padding: 10}}
                >
                    {p}
                </div>)}
            </div>
        </div>
    );
};

