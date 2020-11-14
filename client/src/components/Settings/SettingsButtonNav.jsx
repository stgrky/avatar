import React from "react";
// import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";

const SettingsButtonNav = () => {
  return (
    <div className={"tg-settings-edit__bottom_nav"}>
      <button
        className={"btn ps-btn--primary ps-btn--primary-md"}
        // onClick={async () => {
        //   console.log(portfolio);
        //   let result;
        //   try {
        //     result = await axios.patch(
        //       "/api/v2/portfolios/" + portfolio.portfolio_id,
        //       { portfolio: portfolio }
        //     );
        //   } catch (err) {
        //     console.error(err.message);
        //   }
        //   setPortfolio(result.data);
        // }}
      >
        Save
      </button>
    </div>
  );
};
export default SettingsButtonNav;