import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className='card shadow-md compact bg-gray-900'>
            <div className="flex-row items-center space-x-4 card-body">
                <div >
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h14">
                            <img src={avatar_url} alt="Avatar" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title text-white">{login}</h2>
                    <Link className='text-base-content text-opacity-70' to={`/user/${login}`}>Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem