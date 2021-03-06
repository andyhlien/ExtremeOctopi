import React from 'react';

const MatchItem = ( props ) => (
  <div className="list-group-item">
    <div className="row">
      <img className="imgPreview" src={ props.match.pic }/>
    </div>
    <div className="row item-name">
      { props.match.name }
    </div>
  </div>
);

export default MatchItem;