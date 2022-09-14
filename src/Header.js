import moment from "moment";

const initialDate = moment().format("DD. MMMM YYYY");

function Header() {
  return (
    <header className="cg-timeline__header">
      <nav>
        <button>Prev</button>
      </nav>
      <div>
        <p className="h5">{initialDate}</p>
      </div>
      <nav>
        <button>Next</button>
      </nav>
    </header>
  );
}

export default Header;
