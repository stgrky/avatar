import React, { Fragment, useState, useEffect } from "react";
import "./style.scss";

const UserAvatarUploadPicker = ({
  croppingAspectRatio = 1,
  cloudinaryUploadFolder,
  // missingImageBackupInitialsString,
  // imageUrl,
  // onChange,
  // handleAvatarDelete,
}) => {
  // const name = missingImageBackupInitialsString;

  // const getInitials = function(name) {
  //   let nameBeforeInitials = name.split(" ");
  //   let newInitials = "";
  //   for (let i = 0; i < nameBeforeInitials.length; i++) {
  //     if (nameBeforeInitials[i].length > 0 && nameBeforeInitials[i] !== "") {
  //       newInitials += nameBeforeInitials[i][0];
  //     }
  //   }
  //   return newInitials;
  // };

  // let [logoStyle, setLogoStyle] = useState({});
  // useEffect(() => {
  //   if (imageUrl) {
  //     setLogoStyle({
  //       backgroundImage: `url(${imageUrl})`,
  //     });
  //   } else if (missingImageBackupInitialsString) {
  //     console.log(getInitials(name));
  //   }
  // }, [imageUrl, missingImageBackupInitialsString]);

  return (
    <Fragment>
      {/* {imageUrl && (
        <img
          src={imageUrl}
          className={"tg-user-avatar-upload-picker__photo"}
        ></img>
      )} */}
      {/* {imageUrl && (
        <img
          className="tg-user-avatar-upload-picker__avatar-remove-button"
          src={"/images/icons/compose-sidebar-close-icon.svg"}
          onClick={handleAvatarDelete}
        />
      )}
      {!imageUrl && missingImageBackupInitialsString && (
        <div
          className="ps-avatar--initials"
          data-letters={getInitials(name)
            .toUpperCase()
            .substring(0, 4)}
          style={{
            fontSize: "2em",
            width: "130px",
            height: "135px",
            lineHeight: "135px",
            borderRadius: "50%",
            background: "#E5F4FF",
            textAlign: "center",
            display: "unset",
          }}
        ></div>
      )} */}
      <div className={"tg-user-avatar-upload-picker__upload-button"}>
        <button
          className={"btn btn-light"}
          onClick={(event) => {
            window.cloudinary
              .createUploadWidget(
                {
                  cropping: true,
                  croppingValidateDimensions: true,
                  croppingAspectRatio: croppingAspectRatio,
                  cloudName: "paperstreet",
                  folder: cloudinaryUploadFolder,
                  uploadPreset: "ps-default",
                },
                // (error, result) => {
                //   if (error) {
                //     onChange(error, null);
                //     return;
                //   }
                //   if (result.event === "success") {
                //     onChange(error, result.info.secure_url);
                //   }
                // }
              )
              .open();
          }}
        >
          {"Upload Logo"}
        </button>
      </div>
    </Fragment>
  );
};

export default UserAvatarUploadPicker;
