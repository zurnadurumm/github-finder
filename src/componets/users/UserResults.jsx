import React, { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../context/github/GithubContext'
function UserResults() {
    const { users, loading } = useContext(GithubContext)









    // const fetchUsers = async () => {
    //     const res = await fetch(`${import.meta.env.VITE_GITHUB_URL}users`,
    //         {
    //             headers: {
    //                 Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
    //             }
    //         })
    //     const data = await res.json()
    //     setUsers(data)
    //     setLoading(false)
    // }
    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 py-5'>{
                users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))
            } </div>
        )
    }
    else {
        return (
            <div><Spinner /></div>
        )
    }
}

export default UserResults