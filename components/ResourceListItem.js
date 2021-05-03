import React from 'react';
import { Link } from 'react-router-dom';

const ResourceListItem = (props) => {
  const { resource: {id, address, organization, address} } = props;
  return (
    <div>
      <Link to={`/${id}`}>
        <h3>{organization}</h3>
      </Link>
      <p>{address}</p>
    </div>
  )
}

export default ResourceListItem;
