import React, { Fragment, useState, useEffect } from "react";
import SettingsTabs from "./SettingsTabs.jsx";
import SettingsButtonNav from "./SettingsButtonNav";
import AccountSettings from "./AccountSettings";
import UserSettings from "./UserSettings";
import axios from "axios";

import "./style.scss";

const SettingsBody = ({
  tab
}) => {
  switch (tab) {
    case "profile_settings":
      return (
        <AccountSettings

        />
      );
    case "user_settings":
      return (
        <UserSettings

        />
      );
  }
};
const Settings = ({
  portfolio_id,
}) => {
  let [activeTab, setActiveTab] = useState(
    window.location.hash.substring(1) || "profile_settings"
  );
  // let [portfolio, setPortfolio] = useState({});

  // useEffect(() => {
  //   let fetchPortfolioData = async () => {
  //     let result;
  //     try {
  //       result = await axios.get("/api/v2/portfolios/" + portfolio_id);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //     setPortfolio(result.data);
  //   };
  //   fetchPortfolioData();
  // }, [portfolio_id]);

  const Buttons = () => {
    return (
      <SettingsButtonNav
        // portfolio={portfolio}
        // setPortfolio={setPortfolio}
      />
    );
  };

  return (
    <Fragment>
      <div className="container">
        <div style={{ marginTop: "60px", display: "flex" }}>
          <h5 className="txt--color-black">Edit User</h5>
        </div>
        <div className={"ps-card--primary p-0"} style={{ marginTop: "30px" }}>
          <SettingsTabs
            // portfolio={portfolio}
            // setPortfolio={setPortfolio}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <Buttons />
          <div
            className={`tg-settings-edit__active-tab ${
              activeTab === "basic_info" ? "pb-0" : ""
            }`}
          >
            <SettingsBody
              tab={activeTab}
              // portfolio={portfolio}
              // setPortfolio={setPortfolio}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
