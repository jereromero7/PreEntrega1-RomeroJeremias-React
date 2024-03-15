import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <header>
      <p>California Sport</p>
      <nav>
        <ul>
            <li>
                <a href="/">HOMBRE</a>
            </li>
            <li>
                <a href="/">MUJER</a>
            </li>
            <li>
                <a href="/">NIÑOS</a>
            </li>
            <li>
                <a href="/">MARCAS</a>
            </li>
        </ul>
      </nav>
      <div>
        <CartWidget></CartWidget>
      </div>
    </header>
  );
}