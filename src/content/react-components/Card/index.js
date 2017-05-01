import { v4 } from 'node-uuid';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './../Avatar';
import './Card.css';

/**
 * @kind component
 *
 * @name demo.react:Card
 *
 * @description
 * A deck of cards.
 *
 * @requires React
 *
 * @param {string} title Title of the card.
 * @param {string} description Short description of the card.
 * @param {string} hero Main image for the card.
 * @param {string} user The user name of the card creator.
 * @param {string} likes Number of likes.
 * @param {string} comments Number of comments.
 *
 * @usage
 * ```html
 * <Card
 *  title="Griddy"
 *  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
 *  user="happygilmore"
 *  hero="https://s3.amazonaws.com/reactivepixels/cards/hero.58bfe5eb5d464209beffd131.jpg"
 *  likes="6"
 *  comments="4"/>
 * ```
 *
 * @example
 * ../examples/cards.html
 */

const Card = ({ title, description, hero, user, likes, comments  }) => {
  return (
    <div className="card__container animate">
      <div className="card">
        <div className="in card__content"></div>

        <div className="card__preloader"></div>

        <img src={hero} width="320" height="460" role="presentation" className="in card__hero"/>

        <div className="card__overlay">
          <Avatar user={user} size="md"></Avatar>

          <h3>{title}</h3>
          <p>{description}</p>

          <div className="card__overlay-footer">
            <div className="card__action">
              <button className="likes"></button>
              <div className="counter"><div className="arrow"></div>{likes}</div>
            </div>
            <div className="card__action">
              <button className="comments"></button>
              <div className="counter"><div className="arrow"></div>{comments}</div>
            </div>
          </div>
        </div>

      </div>
      <div className="diffuse-shadow"></div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hero: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired
};

export default Card;
