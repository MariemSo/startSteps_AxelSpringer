import React from "react";
import { SocialNetworkUser } from "../data";
import UserCard from "../components/UserCard";

const userCards = SocialNetworkUser.map((user) => {
  return (
    <UserCard
      key={Math.floor(Math.random() * 1000)}
      name={user.name}
      lastName={user.lastName}
      statusMessage={user.statusMessage}
      // imageUrl={user.imageUrl}
    />
  );
});

const Feed = () => {
  return (
    <div className="flex min-h-screen flex-col items-center ">{userCards}</div>
  );
};

export default Feed;
