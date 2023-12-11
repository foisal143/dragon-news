import moment from 'moment';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const News = ({ info }) => {
  const {
    author,
    urlToImage,
    url,
    title,
    source,
    publishedAt,
    description,
    content,
  } = info;
  return (
    <div className="my-5">
      <div className="d-flex justify-content-between p-2 bg-secondary-subtle my-2">
        <small>Author: {author ? author : 'Not Found'}</small>{' '}
        <small>Published: {publishedAt.slice(0, 11)}</small>
      </div>
      <h5>{title}</h5>
      <img className="w-100 " src={urlToImage} alt="" />
      <p>{content}</p>
      <div>
        <Link to={`/${source.id || source.name}`}>
          <FaEye
            style={{ cursor: 'pointer' }}
            className="text-secondary-subtle"
          />
        </Link>
      </div>
    </div>
  );
};

export default News;
