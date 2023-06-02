import React, { useState, useEffect } from "react";

import { Box, Stack, Typography, Button } from "@mui/material";
// IMPORTING IMAGE
import AboutUsTop from "../assets/AboutTopImg.png";
import AboutFLowerRight from "../assets/AboutFlowersRight.png";
import AboutFlowerLeft from "../assets/AboutFlowerLeft.png";
import Card1 from "../assets/Card.png";
import Card2 from "../assets/Farms.png";
import SatisficationLogo from "../assets/Satisfaction.png";
import ResortOwnerProfilePhoto from "../assets/ResortOwnerProfilePhoto.png";
import WhoWeAre from "../assets/WhoWeAre.png";
import DoubleCommaOpeningVector from "../assets/DoubleCommaOpeningVector.png";
import DoubleCommaClosingVector from "../assets/DoubleCommaClosingVector.png";
import ShreeOpacityLogo from "../assets/ShreeOpacityLogo.png";

//IMPORTING COMPONENTS
import ReviewCards from "./ReviewCard";

// IMPORTING ICONS
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import { GooglePlacesAutocomplete } from "react-google-places-autocomplete";/

const AboutUs = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   loadGoogleReviews();
  // }, []);

  // const loadGoogleReviews = async () => {
  //   const response = await fetch(
  //     `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ0fEovSfK4jsRxrcm9yXgCeY&fields=reviews&key=AIzaSyBDOXY3CZDldHFtlaTJ34Vrm1-3u63x8wA`
  //   );
  //   const data = await response.json();
  //   const fetchedReviews = data.result?.reviews || [];
  //   setReviews(fetchedReviews);
  //   console.log(reviews);
  // };

  return (
    <div>
      <Box
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          mt:{xs:"5.7rem",md:"5.7rem",lg:"5.6rem",xl:"6.5rem"}
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: { sm: "100%" },
            // minWidth: "100%",
            height: { xs: "300px", lg: "300px", xl: "326px" },
            backgroundImage: `url(${AboutUsTop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(61, 37, 33, 0.5)",
            boxShadow:
              "inset 130px -130px 250px rgba(61, 37, 33, 0.9), inset -130px 130px 250px rgba(61, 37, 33, 0.9)",
          }}
        >
          <Box
            sx={{
              marginLeft: { sx: "-30px", lg: "200px" },
              backgroundImage: `url(${AboutFlowerLeft})`,
              backgroundRepeat: "no-repeat",
              width: { xs: "250px", md: "250px" },
              marginTop: "160px",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                padding: { xs: "60px 0 0px 0", md: "100px 0 10px 0" },
                fontFamily: "Bona Nova",
                fontSize: { xs: "1.5em", md: "2.5em" },
                fontWeight: "400",
                lineHeight: "48px",
                letterSpacing: "0.07em",
                color: "#FFBB70",
              }}
            >
              About Us
            </Typography>
            <Box
              sx={{
                margin: "0px auto",
                height: "30px",
                width: "0px",
                border: "1px solid #FFBB70",
              }}
            ></Box>

            <Typography
              sx={{
                magrin: "14px auto",
                fontFamily: "Bona Nova",
                fontSize: { xs: "14px", md: "18px" },
                fontWeight: "400",
                letterSpacing: "0.07em",
                color: "#FFBB70",
              }}
            >
              We create those special memories✨ for your family💞 <br />
              #weddingmemory
            </Typography>
          </Box>

          <Box
            sx={{
              marginRight: { sx: "50px", lg: "200px" },
              backgroundImage: `url(${AboutFLowerRight})`,
              backgroundRepeat: "no-repeat",
              width: { xs: "250px", md: "250px" },
            }}
          ></Box>

          {/* <Box sx={{ marginRight: { sx: "50px", lg: "200px" } }}>
          <img
            src={AboutFLowerRight}
            style={{ width: "250px", height: "164px" }}
            alt=""
          />
        </Box> */}
        </Box>
        {/* FIRST PART BEGINS */}

        <Box
          sx={{
            minHeight: "600px",
            background: "#FFE2D8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              margin: "50px auto",
              textAlign: "center",
              paddingTop: { xs: "50px", sm: "0" },
            }}
          >
            <Box
              sx={{
                margin: { xs: "auto", sm: "auto", lg: "auto 0px auto 0px" },
                width: { xs: "300px", md: "400px", lg: "400px" },
                height: { xs: "300px", md: "400px", lg: "400px" },
                // boxShadow: "-5px -5px 10px rgba(0, 0, 0, 0.1)",
                // borderRadius: "20px",
                alignItems: "center",
                backgroundImage: `url(${WhoWeAre})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>

            <Typography
              sx={{
                width: { xs: "100%", lg: "69%" },
                margin: {
                  xs: "20px auto",
                  sm: "auto 40px",
                  md: "auto 40px",
                  lg: "auto ",
                },
                fontSize: { xs: "15px", lg: "20px" },
                lineHeight: "30px",
                textAlign: "start",
                letterSpacing: "0.07em",
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.but also the
              leap into electronic typesetting, remaining essentially unchanged.{" "}
              <br /> <br /> It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Typography>
          </Box>
        </Box>

        {/* SECOND PART BEGINS */}
        <Box
          sx={{
            width: {
              lg: "100%",
              xl: "100%",
            },
            height: { xs: "1700px", sm: "1100px", lg: "806px" },
            background: "#FFFFFF",
          }}
        >
          <Typography
            sx={{
              marginTop: "100px",
              fontSize: "40px",
              fontWeight: "400",
              fontStyle: "normal",
              fontFamily: "Bona Nova",
              letterSpacing: "0.07em",
              color: "#3D2521",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Success By The Numbers
          </Typography>

          <Box
            sx={{
              margin: "20px auto",
              height: "30px",
              width: "0px",
              border: "1px solid #3D2521",
            }}
          ></Box>

          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              margin: { xs: "auto", md: "-100px auto" },
              width: { xs: "100%", md: "86%" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "52%" },
                marginTop: { xs: "30px", md: "10px" },
                alignItems: "flex-start",
                backgroundImage: `url(${ShreeOpacityLogo})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: { xs: "180px", sm: "130px", md: "280px" },
                display: "flex",
                textAlign: "center",
              }}
            >
              <Box sx={{ margin: "auto", padding: { xs: "10px", md: "0" } }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: "16px", lg: "16px", xl: "20px" },
                    fontStyle: "normal",
                    fontFamily: "Bona Nova",
                    letterSpacing: "0.07em",
                  }}
                >
                  <br />
                  <span style={{ fontSize: "25px", fontFamily: "Bona Nova" }}>
                    "
                  </span>
                  Sometimes numbers are the easiest way to get to the truth.{" "}
                  <br />
                  Checkout these business highlights to learn more and get to
                  know us better
                  <span style={{ fontSize: "25px", fontFamily: "Bona Nova" }}>
                    "
                  </span>
                </Typography>

                <Typography
                  sx={{
                    marginTop: { xs: "60px", md: "100px" },
                    fontWeight: "400",
                    fontSize: {
                      xs: "30px",
                      lg: "25px",
                      xl: "40px",
                    },
                    fontFamily: "Bona Nova",
                    letterSpacing: "0.07em",
                  }}
                >
                  99% Customer Satisfication
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "0px",
                width: { xs: "100%", md: "42%", lg: "20%" },
                display: { xs: "block", sm: "flex" },
                marginTop: { xs: "30px", md: "100px" },
                gap: { xs: "0", sm: "30px" },
                justifyContent: { xs: "center", md: "inherit" },
                // alignContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: {
                      xs: "280px",
                      sm: "300px",
                      lg: "230px",
                      xl: "336px",
                    },
                  }}
                >
                  <img
                    src={Card1}
                    alt=""
                    style={{ borderRadius: "20px 20px 0px 0px" }}
                  />
                </Box>
                <Box
                  sx={{
                    margin: "0px",
                    width: {
                      xs: "280px",
                      sm: "300px",
                      lg: "230px",
                      xl: "336px",
                    },
                    height: { xs: "156px", lg: "130px", xl: "156px" },
                    background: "#3D2521",
                    borderRadius: "0px 0px 20px 20px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: { sm: "50px", lg: "40px", xl: "50px" },
                      letterSpacing: "0.07em",
                      fontFamily: "Bona Nova",
                      lineHeight: "160%",
                      color: "#FFBB70",
                    }}
                  >
                    70+
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "20px",
                      letterSpacing: "0.07em",
                      fontFamily: "Bona Nova",
                      lineHeight: "250%",
                      color: "#FFBB70",
                    }}
                  >
                    Event per year
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    margin: "50px auto",
                    width: { xs: "170px", lg: "150px", xl: "170px" },
                    height: "50px",
                    alignItems: "center",
                    color: "#3D2521",
                    background:
                      "linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)",
                    fontFamily: "Bona Nova",
                    fontSize: "20px",
                    textTransform: "capitalize",
                    border: "none",
                    zIndex: "1",
                    "&after": {
                      position: "absolute",
                      content: "''",
                      width: "0",
                      height: "100%",
                      top: "0",
                      right: "0",
                      zIndex: "-1",
                      backgroundColor: "#663dff",
                      borderRadius: "5px",
                      boxShadow:
                        "inset 2px 2px 2px 0px rgba(255,255,255,.5) 7px 7px 20px 0px rgba(0,0,0,.1) 4px 4px 5px 0px rgba(0,0,0,.1)",
                      transition: "all 0.3s ease",
                    },
                    "&hover": {
                      color: "#fff",
                    },
                    "&hover&after": {
                      left: "0",
                      width: "100%",
                    },
                    "&active": {
                      top: "2px",
                    },
                  }}
                >
                  Book Event
                </Button>
              </Box>
              <Box
                sx={{
                  marginTop: { xs: "50px", sm: "0px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Center the content vertically
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: {
                      xs: "280px",
                      sm: "300px",
                      lg: "230px",
                      xl: "336px",
                    },
                  }}
                >
                  <img
                    src={Card2}
                    alt=""
                    style={{ borderRadius: "20px 20px 0px 0px" }}
                  />
                </Box>
                <Box
                  sx={{
                    margin: "0px",
                    width: {
                      xs: "280px",
                      sm: "300px",
                      lg: "230px",
                      xl: "336px",
                    },
                    height: { xs: "156px", lg: "130px", xl: "156px" },
                    background: "#3D2521",
                    borderRadius: "0px 0px 20px 20px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "50px",
                      letterSpacing: "0.07em",
                      fontFamily: "Bona Nova",
                      lineHeight: "160%",
                      color: "#FFBB70",
                    }}
                  >
                    23k+
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "20px",
                      letterSpacing: "0.07em",
                      fontFamily: "Bona Nova",
                      lineHeight: "250%",
                      color: "#FFBB70",
                    }}
                  >
                    Annual Visitors
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    margin: "50px auto",
                    width: { xs: "170px", lg: "150px", xl: "170px" },
                    height: "50px",
                    alignItems: "center",
                    color: "#3D2521",
                    background:
                      "linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)",
                    fontFamily: "Bona Nova",
                    fontSize: "20px",
                    textTransform: "capitalize",
                  }}
                >
                  Book Room
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* THIRD PART  */}
        <Box
          sx={{
            paddingTop: "100px",
            height: { xs: "1000px", sm: "700px", md: "662px" },
            background: "#FFE2D8",
          }}
        >
          <Typography
            sx={{
              marginBottom: { xs: "20px", sm: "0px" },
              fontFamily: "Bona Nova",
              fontWeight: "400",
              fontSize: { xs: "30px", md: "40px" },
              textAlign: "center",
              letterSpacing: "0.07em",
            }}
          >
            Our Vision
          </Typography>

          <Box
            sx={{
              margin: "10px auto",
              textAlign: "center",
              width: "0px",
              border: "1px solid #3D2521",
              height: "30px",
            }}
          ></Box>

          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              margin: "auto",
              width: "95%",
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", sm: "90%", md: "50%" },
                margin: "0px auto",
                display: { xs: "flex", sm: "flex" },
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  margin: "20px 0 40px 0",
                  paddingTop: { xs: "60px", sm: "0px" },
                  display: { xs: "block", sm: "flex" },
                  height: { xs: "550px", sm: "300px", md: "250px" },
                  background: "#FFFFFF",
                  boxShadow:
                    "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
                  borderRadius: "20px",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "80%", sm: "60%", md: "68.55%" },
                    margin: "auto 20px",
                    display: { xs: "flex", md: "flex" },
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={DoubleCommaOpeningVector}
                    style={{ height: "100%" }}
                    alt=""
                  />
                  <Typography
                    sx={{
                      width: { xs: "90%", lg: "80.5%" },
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: { xs: "16px", lg: "15px", xl: "20px" },
                      textAlign: "center",
                      letterSpacing: "0.07em",
                      lineHeight: "30px",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </Typography>
                  {/* <Box
                  sx={{
                    width: { sm: "50%", md: "10%" },
                    backgroundImage: `url(${DoubleCommaClosingVector})`,
                    backgroundRepeat: "no-repeat",
                    marginTop: { xs: "100px", md: "80px" },
                  }}
                ></Box> */}
                  <Box
                    sx={{
                      width: "10%",
                      marginTop: { xs: "210px", sm: "110px", md: "80px" },
                    }}
                  >
                    <img
                      src={DoubleCommaClosingVector}
                      style={{
                        height: "inherit",
                      }}
                      alt=""
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: { xs: "40px", sm: "80px", md: "30px" },
                    width: { xs: "70%", sm: "30%", md: "15.3%" },
                    margin: "auto",
                  }}
                >
                  <Box
                    sx={{
                      margin: "auto",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src={ResortOwnerProfilePhoto}
                      style={{
                        margin: "auto",
                        width: "100px",
                        height: "100px",
                      }}
                      alt=""
                    />
                  </Box>

                  <Typography
                    sx={{
                      // width: "auto",
                      // width: { xs: "100%" },
                      margin: "10px auto 0px auto",
                      fontFamily: "Bona Nova",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "24px",
                      letterSpacing: "0.07em",
                      color: "#3D2521",
                    }}
                  >
                    Haresh Patel
                    <Box
                      sx={{
                        margin: "6px auto 0px auto",
                        width: { xs: "60px", sm: "122px" },
                        border: "1px solid #FFBB70",
                        borderRadius: "2px",
                      }}
                    ></Box>
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Bona Nova",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "24px",
                      letterSpacing: "0.07em",
                      color: "#3D2521",
                    }}
                  >
                    Resort Owner
                  </Typography>
                </Box>
              </Box>
              <Button
                sx={{
                  margin: { xs: "20px auto", md: "0px" },
                  width: "200px",
                  height: "54px",
                  gap: "10px",
                  fontSize: "20px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  fontFamily: "Bona Nova",
                  textTransform: "capitalize",
                  color: "#000000",
                  border: "2px solid rgb(0, 0, 0)",
                }}
                variant="outlined"
              >
                Contact Us <ArrowForwardIcon />
              </Button>
            </Box>
            <Box
              sx={{
                margin: { xs: " 120px auto", sm: "auto" },
                width: { xs: "60%", sm: "20%" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <img src={SatisficationLogo} alt="" />
            </Box>
          </Box>
        </Box>
        {/*-----------------------------------  FOURTH PART -------------------------------------- */}
        <Box
          sx={{
            height: { md: "864px" },
            background: "#FFFFFF",
            paddingTop: "20px",
          }}
        >
          <Box
            sx={{
              margin: {
                xs: "100px auto 100px auto",
                lg: "100px",
              },
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <Typography
              variant="h"
              sx={{
                fontFamily: "Bona Nova",
                fontWeight: "400",
                fontSize: { xs: "25px", sm: "40px" },
                lineHeight: "0.07rem",
                color: "#3D2521",
              }}
            >
              What Our Customer Says
            </Typography>
            <Box
              sx={{
                margin: "20px auto",
                textAlign: "center",
                width: "0px",
                border: "1px solid #3D2521",
                height: "30px",
              }}
            ></Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: { xs: "100px auto 100px 0px", lg: "100px 0" },
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ReviewCards />

                {/* <ReviewCards /> */}
                {/* <ReviewCards /> */}
                {/* {reviews.map((review) => (
              <div key={review.author_name}>
                <ReviewCards author={review.author_name} text={review.text} />
                <h3>{review.author_name}</h3>
                <p>{review.text}</p>
                <hr />
              </div>
            ))} */}
              </Box>
            </Box>

            <Button
              sx={{
                margin: { xs: "auto", sm: "0px" },
                width: "220px",
                height: "54px",
                gap: "10px",
                fontSize: "20px",
                fontWeight: "400",
                fontStyle: "normal",
                fontFamily: "Bona Nova",
                textTransform: "capitalize",
                color: "#000000",
                border: "2px solid rgb(0, 0, 0)",
              }}
              variant="outlined"
            >
              Write a Review <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;