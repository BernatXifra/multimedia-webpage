function Header() {
  return (
    <header className="header">
        <img src={process.env.PUBLIC_URL + "/multimedia-files/escutGirona.png"} alt="Girona Flag" className="header-logo" />
        <h1>Tourism in Girona</h1>
    </header>
  );
}
export default Header;