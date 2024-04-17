import style from "./PhotoGallery.module.css";

function PhotoGallery() {
  return (
    <div className={style.PhotoGallery}>
      <div className={style.content}></div>
      <div className={style.Menu}></div>
    </div>
  );
}

export default PhotoGallery;
