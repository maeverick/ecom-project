import React from "react";
import "../Modal/modal.style.css";

const StoryModal = ({ details, close, team }) => {
  if (!details) {
    return null;
  }
  return (
    <section className="modal-overlay">
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={close}
          aria-label="Close modal"
        >
          &times;
        </button>
        {team.map(({ name, position }) => {
            return(
                <h1>
                    {name}
                </h1>
            )
        })}
      </div>
    </section>
  );
};
export default StoryModal;
