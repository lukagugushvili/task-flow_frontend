import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

const Profile = () => {
  const [userId, setUserId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData();

        if (data) {
          setUserId(data._id);
          setUserName(data.userName);
          setEmail(data.email);
        }

        setShow(true);
      } catch (error: any) {
        console.error("Error fetching data: ", error.message);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {show && (
        <>
          <h2>userID: {userId}</h2>
          <h2>Name: {userName}</h2>
          <h2>Email: {email}</h2>
        </>
      )}
    </div>
  );
};

export default Profile;
