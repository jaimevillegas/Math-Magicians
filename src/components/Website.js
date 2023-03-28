// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';

export default function Website() {
  return (
    <>
      <header className="header-website">
        <h2>Math Magicians</h2>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="calculator">Calculator</a></li>
            <li><a href="quote">Quote</a></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
