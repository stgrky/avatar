import React, { Fragment }from "react";
import "./style.scss";

const Home = () => {
  return (
    <Fragment>
      <div className={"tg-settings-edit__tab-title"}>Profile</div>
      <div className={"d-flex"}>
        <div className={"ps-info-tab__left"}>
          <div className={"ps-info-tab__avatar-box"}>
            {/* {portfolioData.portfolio_logo_image_url && ( */}
              <img
                // src={portfolioData.portfolio_logo_image_url}
                className={"ps-info-tab__avatar"}
                alt=""
                // onChange={(event) => {
                //   portfolioData.portfolio_logo_image_url = "";

                //   setPortfolioData({ ...portfolioData });
                // }}
              ></img>
            {/* )} */}
            {/* {!portfolioData.portfolio_logo_image_url &&
              portfolioData.display_name && (
                <div
                  className="ps-avatar--initials"
                  data-letters={getInitials(portfolioName).toUpperCase().substring(0, 4)}
                  style={{
                    fontSize: "2em",
                    width: "130px",
                    height: "135px",
                    lineHeight: "135px",
                    borderRadius: "50%",
                    background: "#E5F4FF",
                    textAlign: "center",
                    display: "unset"
                  }}
                ></div>
              )} */}
            <div className={"ps-info-tab__avatar-upload-button"}>
              <button
          className={"btn ps-btn--white"}
          onClick={(event) => {
            window.cloudinary
              .createUploadWidget(
                {
                  cropping: true,
                  croppingValidateDimensions: true,
                  croppingAspectRatio: 1.78,
                  cloudName: "paperstreet",
                  // folder: `/portfolios/${portfolioData.portfolio_id}`,
                  uploadPreset: "ps-default",
                },
                (error, result) => {
                  if (error) {
                    console.log(error);
                  }
                  // if (!error && result && result.event === "success") {
                  //   portfolioData.portfolio_logo_image_url =
                  //     result.info.secure_url;
                  //   setPortfolioData(portfolioData);
                  // }
                }
              )
              .open();
          }}
        >
          {"Portfolio Logo"}
        </button>
            </div>
          </div>
        </div>

        <div className={"ps-info-tab__right"}>
          <div className={"d-flex flex-column"}>
            <div className={"d-flex flex-row"}>
              <div
                className={
                  "form-group w-100 mr-3 ps-landing-page-options__container"
                }
              >
                <input
                  placeholder="Enter a name"
                  type="text"
                  // handleInputChange={(e) => {
                  //   setPortfolioData({
                  //     ...portfolioData,
                  //     display_name: e.target.value,
                  //   });
                  // }}
                  displayName={"Portfolio name"}
                  inputClassNames={
                    "input-text--primary ps-landing-page-options__input"
                  }
                  // value={portfolioData.display_name}
                />
              </div>
            </div>
            <div className={"d-flex flex-row"}>
              <div
                className={
                  "d-flex flex-column ps-basic-info-options__title-input"
                }
              ></div>
              <div
                className={
                  "form-group w-100 mr-3 ps-landing-page-options__container"
                }
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
