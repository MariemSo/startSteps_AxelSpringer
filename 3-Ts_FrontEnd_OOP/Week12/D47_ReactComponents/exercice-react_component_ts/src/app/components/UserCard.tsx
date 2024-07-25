import React from "react";
import Image from "next/image";
const UserCard = ({
  name,
  lastName,
  statusMessage,
}: //   imageUrl,
ISocialNetworkUser) => {
  <legend>UserCard</legend>;
  {
    return (
      <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {/* <Image
            className="w-full"
            src="img\card-top.jpg"
            alt="Sunset in the mountains"
            width={200}
            height={200}
          /> */}
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">
              <b>
                {name} {lastName}
              </b>
            </h4>
            <p className="text-gray-700 text-base">{statusMessage}</p>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>
      </>
    );
  }
};
export default UserCard;
