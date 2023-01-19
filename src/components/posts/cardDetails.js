import "./cardDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";

const CardDetail = (props) => {
  let { post_id } = useParams();
  const [title, seTitle] = useState("");
  const [body, setBody] = useState("");
  let url = "https://jsonplaceholder.typicode.com/posts/" + post_id;

  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      await axios.get(url).then((res) => {
        setBody(res.data.body);
        seTitle(res.data.title);
      });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, [loading]);
  return (
    <div className="loader_card">
      {loading ? (
        <div className="post_card">
          <div className="card_text_tb">
            <h3 style={{ width: "100%" }}>{title}</h3>
            <p>{body}</p>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default CardDetail;
