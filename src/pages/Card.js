import CardSort from "../components/cards/CardSort";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import "./Card.css";
import InfiniteScroll from "react-infinite-scroll-component";
import image from "../assets/char-boy.png";

const Card = () => {
  const [sort, setSort] = useState(0);
  const [tooltip, setTooltip] = useState(
    "click to sort list in ascending order"
  );
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("This is my new Card");
  const [search_title, setSearchTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(
    // "https://via.placeholder.com/150/92c952"
    image
  );
  const [album_id, setAlbumId] = useState("1");

  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
          let length = cards.length;
          let datas = res.data.splice(length, 20);
          let fd = [...cards, ...datas];
          setCards(fd);
          console.log(cards);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addHandler = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const seachTitleChangeHandler = (event) => {
    setSearchTitle(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };
  const albumChangeHandler = (event) => {
    setAlbumId(event.target.value);
  };
  const handleSave = () => {
    let newCards = [
      ...cards,
      {
        title: title,
        thumbnailUrl: imageUrl,
        albumId: album_id,
        url: imageUrl,
      },
    ];

    setCards(newCards);
    console.log(newCards);
    console.log(cards);
    setOpen(false);

    setTitle("This is my new Card");
    setAlbumId("1");
    // setImageUrl("https://via.placeholder.com/150/92c952");
    setImageUrl(image);
  };

  const deleteHandler = (index, no) => {
    let newCards = [...cards];
    newCards.splice(index, 1);
    setCards([...newCards]);
  };
  const editHandler = (obj) => {
    let index = obj.id;
    let data = {
      title: obj.title,
      thumbnailUrl: obj.thumbnailUrl,
      albumId: obj.albumId,
      url: obj.url,
    };
    let newCards = [...cards];
    newCards.splice(index, 1, data);
    setCards([...newCards]);
  };

  const sortCards = () => {
    if (sort === 1) {
      console.log("Descending");
      setTooltip("click to sort list in descending order");
      setSort(2);
    } else if (sort === 2) {
      console.log("ascending");
      setTooltip("Back to original list");
      setSort(0);
    } else {
      console.log("Original");
      setTooltip("click to sort list in ascending order");
      setSort(1);
    }
  };

  return (
    <div className="page_cards">
      <div className="card_row">
        <div className="card_head">
          <h2 className="card_list">Card List</h2>

          <Tooltip className="tool" title={tooltip}>
            <div className="sort_icon" onClick={sortCards}>
              <div
                className="up-arrow"
                style={{ visibility: sort === 2 ? "hidden" : "visible" }}
              >
                {/* up arrow */}
                &#9650;
              </div>
              <div
                className="down-arrow"
                style={{ visibility: sort === 1 ? "hidden" : "visible" }}
              >
                {/* down-arrow */}
                &#9660;
              </div>
            </div>
          </Tooltip>
        </div>

        <TextField
          autoFocus
          margin="dense"
          id="search"
          label="search card title "
          variant="standard"
          value={search_title}
          onChange={seachTitleChangeHandler}
        />
      </div>
      <div>
        <InfiniteScroll
          dataLength={cards.length}
          next={fetchData}
          hasMore={true}
        >
          <div className="cardGrid">
            <CardSort
              onDeleteData={deleteHandler}
              onEditData={editHandler}
              cards={cards}
              sort={sort}
              query={search_title}
            />
          </div>
        </InfiniteScroll>
      </div>
      <Fab
        id="fab_button"
        color="primary"
        aria-label="add"
        onClick={addHandler}
      >
        <AddIcon />
      </Fab>

      <div className="div_dialog">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add new card to your collection</DialogTitle>
          <DialogContent>
            <hr />

            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Enter Title: "
              fullWidth
              variant="standard"
              value={title}
              onChange={titleChangeHandler}
            />
            <TextField
              autoFocus
              margin="dense"
              id="album_id"
              label="Album Id: "
              fullWidth
              variant="standard"
              value={album_id}
              onChange={albumChangeHandler}
            />
            <TextField
              autoFocus
              margin="dense"
              id="image_url"
              label="Image Url: "
              fullWidth
              // helperText="Some important text"
              variant="standard"
              value={imageUrl}
              onChange={imageChangeHandler}
            />
          </DialogContent>
          <DialogActions>
            <Button varient="contained" onClick={handleClose}>
              Close
            </Button>
            <Button varient="contained" onClick={handleSave}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Card;
