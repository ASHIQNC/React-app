import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AlbumIcon from "@mui/icons-material/Album";
import Fullscreen from "@mui/icons-material/Fullscreen";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./Cards.css";
const Cards = (props) => {
  let titles = props.title;
  let album = props.album_id;
  let img = props.image_url;
  //let ul = props.url;
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [title, setTitle] = useState(titles);
  const [image_url, setImageUrl] = useState(img);
  const [album_id, setAlbumId] = useState(album);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };
  const albumChangeHandler = (event) => {
    setAlbumId(event.target.value);
  };

  const deleteHandler = () => {
    setOpenDelete(true);
  };
  const editHandler = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleSaveEdit = () => {
    props.onEditData({
      id: props.id,
      title: title,
      albumId: album_id,
      thumbnailUrl: image_url,
      url: props.url,
    });
    setOpenEdit(false);
  };
  const handleSaveDelete = () => {
    props.onDeleteData(props.id, 1);
    setOpenDelete(false);
  };

  return (
    <div className="cards">
      <div className="card_icons">
        <IconButton color="primary" component="span" onClick={editHandler}>
          <EditIcon />
        </IconButton>
        <IconButton color="primary" component="span" onClick={deleteHandler}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="card_content">
        <img className="card_image" src={props.image_url} alt="image" />

        <p className="card_text">{props.title}</p>
      </div>
      <div className="card_buttons">
        <Button
          variant="outlined"
          size="small"
          fontSize="small"
          startIcon={<AlbumIcon fontSize="inherit" />}
          onClick={() => {
            window.open(props.image_url, "_blank", "noopener,noreferrer");
          }}
        >
          {"Album " + props.album_id}
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<Fullscreen fontSize="small" />}
          onClick={() => {
            window.open(props.url, "_blank", "noopener,noreferrer");
          }}
        >
          Full size
        </Button>
      </div>

      <div className="dialogEdit">
        <Dialog open={openEdit} onClose={handleCloseEdit}>
          <DialogTitle>Update card you wish to</DialogTitle>
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
              value={image_url}
              onChange={imageChangeHandler}
            />
          </DialogContent>
          <DialogActions>
            <Button varient="contained" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button varient="contained" onClick={handleSaveEdit}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="dialogDelete">
        <Dialog open={openDelete} onClose={handleCloseDelete}>
          <DialogTitle style={{ color: "black" }}>
            Are you sure you want to delete this card ?
          </DialogTitle>
          <DialogContent>
            <hr />
          </DialogContent>

          <DialogActions>
            <Button varient="contained" onClick={handleCloseDelete}>
              Close
            </Button>
            <Button varient="contained" onClick={handleSaveDelete}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default Cards;
