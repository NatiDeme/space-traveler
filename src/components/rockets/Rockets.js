import './Rockets.css';

const Rockets = () => (
  <div className="rockets">
    <ul className="rocket-list">
      {rockets && rockets.map((rocket) => (
        <li className="rocket" key={rocket.id}>
          <img src={rocket.flickr_images} alt={rocket.name} className="rocket-img" />
          <div className="rocket-info">
            <span className="rocket-name">{rocket.name}</span>
            <span className="rocket-description">
              {rocket.reserved && (<small className="reserved">Reserved</small>)}
              {rocket.description}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Rockets;
