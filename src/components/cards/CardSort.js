import Cards from "./Cards";

const CardSort = (props) => {
  let cds = [...props.cards];
  const deleteHandler = (index, no) => {
    props.onDeleteData(index, no);
  };
  const editHandler = (obj) => {
    props.onEditData(obj);
  };
  const sortMethods = {
    0: { method: (a, b) => undefined },
    //we are comparing with two elements a and b
    //custom comperator: represents a compare function determining which element comes before the other

    1: { method: (a, b) => (a.title < b.title ? -1 : 1) },
    //ascending
    2: { method: (a, b) => (a.title > b.title ? -1 : 1) },
  };
  let sort = props.sort;
  let query = props.query;
  //seraching option
  return (
    cds
      .filter((cd) => {
        if (query === "") {
          return cd;
        } else if (cd.title.toLowerCase().includes(query.toLowerCase())) {
          return cd;
        }
      })
      //sorting:we are passing our custom comperator for sorting method here
      .sort(sortMethods[sort].method)
      //rendering
      .map((card, index) => (
        <Cards
          key={index}
          id={index}
          onDeleteData={deleteHandler}
          onEditData={editHandler}
          title={card.title}
          album_id={card.albumId}
          image_url={card.thumbnailUrl}
          url={card.url}
        />
      ))
  );
};

export default CardSort;

// const CardSort = (props) => {
//   let cds = [...props.cards];
//   const deleteHandler = (index, no) => {
//     props.onDeleteData(index, no);
//   };
//   const editHandler = (obj) => {
//     props.onEditData(obj);
//   };
//   const sortMethods = {
//     0: { method: (a, b) => undefined },
//     //we are comparing with two elements a and b
//     //custom comperator function
//     //how to sort an array of objct on the basis of perticular propert
//     1: { method: (a, b) => (a.title < b.title ? -1 : 1) },
//     //acnding
//     2: { method: (a, b) => (a.title > b.title ? -1 : 1) },
//   };
//   let sort = props.sort;
//   let query = props.query;
// //seraching option
//   return cds
//     .filter((cd) => {
//       if (query === "") {
//         return cd;
//       } else if (cd.title.toLowerCase().includes(query.toLowerCase())) {
//         return cd;
//       }
//     })
//     //sorting:we are passing our custom sorting method
//     .sort(sortMethods[sort].method)
//     //rendering
//     .map((card, index) => (
//       <Cards
//         key={index}
//         id={index}
//         onDeleteData={deleteHandler}
//         onEditData={editHandler}
//         title={card.title}
//         album_id={card.albumId}
//         image_url={card.thumbnailUrl}
//         url={card.url}
//       />
//     ));
// };
