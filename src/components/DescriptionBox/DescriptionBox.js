import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews {122}</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          velit laboriosam eveniet deserunt quas modi mollitia quisquam numquam
          quaerat, laudantium, exercitationem illo. Sint error numquam totam aut
          deleniti doloremque iure adipisci dignissimos maiores iste veniam
          voluptatem impedit pariatur, illum minima unde architecto possimus eum
          dolores itaque ipsa, a fuga quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          praesentium quidem porro maiores tenetur delectus quas quia. Adipisci
          quis totam harum dolores corrupti? Laborum, reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
