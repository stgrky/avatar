import React, { Fragment, useState, useEffect } from "react";
import UserAvatarUploadPicker from "../../UserAvatarUploadPicker";
import axios from "axios";
import "./style.scss";

const UserSettings = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

    console.log("name")
  console.log(name);
  return (
    <div>
      <div className={"tg-user-settings__tab-title"}>Basic Info</div>
      <div className={"d-flex flex-row"}>
        <div className={"tg-user-settings__left"}>
          <div className={"tg-user-settings__avatar-box"}>
            <UserAvatarUploadPicker
            // imageUrl={portfolio.portfolio_logo_image_url}
            // onChange={(err, data) => {
            //   if (err) {
            //     console.log("error!!!");
            //   }
            //   portfolio.portfolio_logo_image_url = data;
            //   setPortfolio({ ...portfolio });
            // }}
            // missingImageBackupInitialsString={portfolio.display_name}
            // cloudinaryUploadFolder={`/portfolios/${portfolio.portfolio_id}`}
            // handleAvatarDelete={() => {
            //   portfolio.portfolio_logo_image_url = "";
            //   setPortfolio({ ...portfolio });
            // }}
            />
          </div>
        </div>

        <div className={"tg-user-settings__right"}>
          <div className={"d-flex flex-column"}>
            <div className={"d-flex flex-row"}>
              <div
                className={"form-group w-100 mr-3 tg-user-settings__container"}
              >
                <input
                  className="tg-user-settings__input"
                  placeholder="Enter a name"
                  type="text"
                  name="name"
                  // errorMessage={"Please enter a name"}
                  onChange={onChange}
                  displayName={"Portfolio name"}
                  // inputClassNames={"input-text--primary"}
                  value={name}
                />
              </div>
            </div>
            <div className={"d-flex flex-row"}>
              <div
                className={"d-flex flex-column tg-user-settings__title-input"}
              ></div>
              <div
                className={"form-group w-100 mr-3 tg-user-settings__container"}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
