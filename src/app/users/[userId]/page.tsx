import { console } from "inspector";
import React from "react";

const UserId = async ({ params }: any) => {
  const { userId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await response.json();

  return (
    <div className="card-container p-6 w-[100%]">
      <div className="card border p-6">
        <h2>User id: {data.id}</h2>
        <h2>Name: {data.name}</h2>
        <p>Email: {data.email}</p>
        <p>
          Address:
          <span> {data.address.street} </span>
          <span> {data.address.suite} </span>
          <span> {data.address.city} </span>
          <span> {data.address.zipcode} </span>
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          nihil culpa dicta nobis, aspernatur dolores optio quod maiores sit
          asperiores aliquid tenetur debitis laborum cumque mollitia? Ducimus
          exercitationem at placeat tempora voluptas dignissimos quam,
          consectetur quasi in maiores corporis. Iure.
        </p>
      </div>
    </div>
  );
};

export default UserId;
