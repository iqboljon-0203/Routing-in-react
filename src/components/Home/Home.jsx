import { useEffect, useState } from "react";
import { Link,NavLink } from "react-router-dom";
const Home =()=>{
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>setUsers(data));
    },[])
    return(
        <>
         <header className='header'>
            <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink className="nav__link" activeClassName="nav__link-active" to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" activeClassName="nav__link-active" to="/profile">Profile</NavLink>
                </li>
            </ul>
            </nav>
        </header>
        {
            users.length>0&& ( <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        <Link to={`/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>)
        }
        </>
    )
}
export default Home;