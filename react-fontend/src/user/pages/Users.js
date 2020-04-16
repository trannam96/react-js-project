import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Nam Tran",
      image:
        "https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/70539229_1354281514728822_6252194604435636224_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=swl9eSLmtYkAX-FFXdW&_nc_ht=scontent.fhan1-1.fna&oh=4887a850619a3ca5425ede34e8631d47&oe=5EBDA9FD",
      places: 1,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
