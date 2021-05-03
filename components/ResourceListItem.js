import React from 'react';
import { Link } from 'react-router';

const ResourceListItem = (props) => {
  const { resource: {id, title, address} } = props;
  return (
    <div>
      <Link to={`/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{address}</p>
    </div>
  )
}

export default ResourceListItem;
