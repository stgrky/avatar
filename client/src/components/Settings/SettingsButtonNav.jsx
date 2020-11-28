import React from "react";
// import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";

const SettingsButtonNav = ({ contact, setContact, onSubmit }) => {



  return (
    <div className={"tg-settings-edit__bottom_nav"}>
      <button
        className={"tg-settings-edit__save-button btn btn-light"}
        onSubmit={onSubmit}
        // onClick={async () => {
        //   console.log(contact);
        //   let result;
        //   try {
        //     result = await axios.put(
        //       "/" + contact.name,
        //       { contact: contact }
        //     );
        //   } catch (err) {
        //     console.error(err.message);
        //   }
        //   // setContact(result.contact);
        // }}
      >
        Save
      </button>
    </div>
  );
};
export default SettingsButtonNav;
