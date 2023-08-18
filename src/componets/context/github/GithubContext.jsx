import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;


export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }




    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text,

        })

        const res = await fetch(`${GITHUB_URL}search/users?${params}`,
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`
                }
            })
        const { items } = await res.json()
        dispatch({
            type: 'GET_USERS',
            payload: items

        })
    }
    const getUser = async (login) => {
        setLoading()



        const res = await fetch(`${GITHUB_URL}users/${login}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })
        if (res.status === 404) {
            window.location = '/notfound'
        }
        else {
            const data = await res.json()
            dispatch({
                type: 'GET_PROFILE',
                payload: data

            })
        }

    }
    const getRepos = async (login) => {
        setLoading()
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10

        })



        const res = await fetch(`${GITHUB_URL}users/${login}/repos?${params}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })
        if (res.status === 404) {
            window.location = '/notfound'
        }
        else {
            const data = await res.json()
            dispatch({
                type: 'GET_REPOS',
                payload: data

            })
        }

    }

    //Clear users

    const clearUsers = (text) => {
        dispatch({
            type: 'CLEAR_USERS',
            payload: text
        })
    }

    return (
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            user: state.user,
            repos: state.repos,
            searchUsers, clearUsers,
            getUser, getRepos
        }} >
            {children}
        </GithubContext.Provider>
    )

}

export default GithubContext