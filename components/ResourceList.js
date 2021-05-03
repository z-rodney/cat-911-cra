import React from 'react';
import { Link } from 'react-router-dom'
import ResourceListItem from './ResourceListItem';
import resources from '../tempStore';

const ResourceList = () => {
  return (
    <div>
      <h1>Resources</h1>
      {
        resources.map(resource => {
          return <ResourceListItem key={resource.id} resource={resource} />
        })
      }
    </div>
  )
}

export default ResourceList;
