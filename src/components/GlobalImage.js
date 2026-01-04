function GlobalImage() {
  return (
    <div className="globalImage">
      <img src={process.env.PUBLIC_URL + "/multimedia-files/gironaGlobalEdit.png"} alt="Some views of Girona" className="globalImage-img" />
    </div>
  );
}
export default GlobalImage;