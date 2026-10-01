import "./index.css";

const ImageLists = (props) => {
  const { imageListDetails, getImageListId } = props;
  const { imageUrl, category, id, thumbnailUrl } = imageListDetails;

  const onClickGetImageId = () => {
    getImageListId(id);
  };

  return (
    <li>
      <button className="image-list-btn" onClick={onClickGetImageId}>
        <img src={imageUrl} alt="match" className="list-images" />
      </button>
    </li>
  );
};

export default ImageLists;
