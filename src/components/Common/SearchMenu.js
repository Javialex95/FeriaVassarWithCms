import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { lupa } from './Icons';

export const SearchMenu = ({ redirect, className, setRedirect, toggleMenu }) => {

    const [valueSearch, setValueSearch] = useState('');

    const onChange = (e) => {
        const search = e.target.value;
        setValueSearch(search)
    }

    const search = (e) => {
        e.preventDefault();
        setRedirect(true)

        setTimeout(() => {
            toggleMenu()
        }, 500);
    }

    if (redirect) {
        return <Redirect to={`/emprendimientos/${valueSearch}`} />

    }

    return (
        <div className={`search ${className}`}>

            <form onSubmit={search} className="flex">
                <div>
                    <input
                        type="text"
                        name="search"
                        id=""
                        onChange={onChange}
                        placeholder="Por nombre, productos"
                    />
                </div>

                <button className="menu-lupa">
                    {lupa}
                </button>
            </form>

        </div>
    )
}
