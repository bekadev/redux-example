import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useAction} from "../hooks/useAction";

export const UserList: React.FC = () => {
    const {error, users, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() => {
        // @ts-ignore
        fetchUsers()
    }, [])

    if (loading) return <h1>loading...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <div>
            {
                users.map(u => <div key={u.id}>{u.name} - {u.id}</div>)
            }
        </div>
    );
};

