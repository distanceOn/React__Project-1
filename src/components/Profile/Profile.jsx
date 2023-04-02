import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        src="https://javasea.ru/uploads/posts/2023-02/parad-planet-solnechnoj-sistemy.jpg"
        alt="space"
      />
    </div>
  );
};

export default Profile;
