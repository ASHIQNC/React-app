import React, { useState, useEffect } from "react";
import image from "../../assets/sunflower.png";
import "./Posts.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchCard } from "../../action/actionType";
import { connect } from "react-redux";

const Posts = ({ fetchCard, cardData, loadingData }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("fetch", fetchCard);
  console.log("card", cardData.loading);
  console.log("loading", loadingData);
  console.log(cardData);
  // const fetchData = async () => {
  //   try {
  //     // setLoading(true);
  //     // await axios
  //     //   .get("https://jsonplaceholder.typicode.com/posts/")
  //     //   .then((res) => {
  //     //     setPosts(res.data);
  //     //     console.log(res);
  //     //     setLoading(false);
  //     //   });

  //   } catch (e) {
  //     console.log(e);
  //   }
  //};

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <div>
      {loadingData ? (
        <CircularProgress />
      ) : (
        <div>
          {cardData.map((data) => {
            return (
              <div className="post_card">
                <div className="image">
                  <img className="img_post" src={image} alt="image" />
                </div>
                <div className="card_text_tb">
                  <Link className="title_link" to={"/posts/" + data.id}>
                    {data.title}
                  </Link>

                  <h3 className="card_discription">{data.body}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cardData: state.card,
    loadingData: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCard: () => dispatch(fetchCard()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
