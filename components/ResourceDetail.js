import React from 'react';
import { Link, useParams } from 'react-router-dom';
import resources from '../tempStore'

const ResourceDetail = () => {
  const { resourceId } = useParams();
  const selectedResource = resources.find(resource => resource.id === resourceId * 1);
  const { organization, address, phoneNumber, website } = selectedResource;

  return (
    <div>
      {selectedResource ?
        (
          <div>
            <h2>{organization}</h2>
            <p>Location: {address}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Website: {(<a href={website}>{website}</a>) || 'None'}</p>
          </div>
        ) :
        (
          <div>
            <p>Sorry, we can't find that resource.</p>
          </div>
        )
      }
      <Link to="/">Back to List</Link>
    </div>
  )
}

export default ResourceDetail;
