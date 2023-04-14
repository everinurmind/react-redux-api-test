import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/users/usersSlice"
import { useEffect } from "react";
import '../styles/Users.css';

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store);
  const dispatch = useDispatch();
  
  useEffect(() =>{
    dispatch(fetchUsers());
  }, [dispatch])

  const handleRefreshClick = () => {
    dispatch(fetchUsers());
  }

  return (
    <div className="users-container">
      <h1 className="users-header">Redux Test</h1>
      <button className="users-refresh-btn" onClick={handleRefreshClick}>Refresh</button>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong!</h2>}
      <ul className="users-list">
        {users.map((user) => {
          return (
            <li key={user.login.uuid} className="users-item">
              <div className="users-name">{user.name.title}. {user.name.first} {user.name.last}</div>
              <div className="users-email">{user.email}</div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Users;
