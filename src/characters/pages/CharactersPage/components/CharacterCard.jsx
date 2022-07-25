import { Link } from "react-router-dom";
import { extractIdFromUrl } from "../../../utils";

export const CharacterCard = ({ name, birth_year, url }) => {

  const id = extractIdFromUrl(url);
  console.log(url);

  return (
    <div className="col animate__animated animate__fadeIn">
      <Link to={`/character/${id}`}>
        <div className="card">
          <img
            src="https://c.tenor.com/smURMKllRl8AAAAd/star-wars.gif"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
