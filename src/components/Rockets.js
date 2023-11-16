import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, toggleReserve } from '../redux/rocketSlice';
import Indicator from './Indicator';
import '../styles/rocket.scss';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, hasFetched } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleToggleReserve = (rocketId) => {
    dispatch(toggleReserve(rocketId));
  };

  const readMore = (link) => {
    window.open(link, '_blank');
  };

  if (!hasFetched) {
    return (
      <div className="indicator-container">
        <Indicator />
      </div>
    );
  }

  return (
    <main>
      {rockets.map((rocket) => {
        const {
          flickr_images: img, name, description, reserve, id, wikipedia,
        } = rocket;

        const reserved = reserve ? <span>Reserved</span> : null;

        return (
          <article key={id}>
            <img src={img[0]} alt="Rocket" />
            <section>
              <h2 data-testid={id}>{name}</h2>
              <p>
                {reserved}
                {description}
                <button type="button" className="read-more" onClick={() => readMore(wikipedia)}>
                  read more...
                </button>
              </p>
              <button
                onClick={() => handleToggleReserve(id)}
                className={reserve ? 'no-reserved' : 'reserved'}
                type="button"
              >
                {reserve ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </section>
          </article>
        );
      })}
    </main>
  );
};

export default Rockets;
