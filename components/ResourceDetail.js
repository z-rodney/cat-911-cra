import React from 'react';
import { useParams } from 'react-router';
import { resources } from '../tempStore'

const ResourceDetail = () => {
  const { resourceId } = useParams();
  const selectedResource = resources.find(resource => resource.id === resourceId);
  const { title, address } = selectedResource;

  return selectedResource ?
    (
      <div>
        <h2>{title}</h2>
        <p>{address}</p>
      </div>
    ) :
    (
      <div>
        <p>Sorry, we can't find that resource.</p>
      </div>
    )

}

export default ResourceDetail;
