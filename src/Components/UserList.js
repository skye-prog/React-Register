import "./UserList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return null;
  }
  return (
    <div className='UserItem'>
      <div className='UserItem__Lists'>
        {props.items.map((users) => {
          //render items
          return (
            <ul>
              <li key={users.id}>
                Name:{users.name}, Age:{users.age}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
