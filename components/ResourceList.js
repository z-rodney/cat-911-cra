import React from 'react';
import ResourceListItem from './ResourceListItem';
import resources from '../tempStore';

const ResourceList = () => {
  return (
    <div>
      <h1>Resources</h1>
      {
        resources.map(resource => {
          return <ResourceListItem resource={resource} />
        })
      }
    </div>
  )
}

export default ResourceList;
