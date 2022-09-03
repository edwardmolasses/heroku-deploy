import React, { useContext, useRef } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import JobsContext from '../context/jobs';
import useObserver from '../custom-hooks/observer';
import Image from './Image';

const JobItem = (props) => {
  const { onItemClick } = useContext(JobsContext);
  const imageRef = useRef();
  const [isVisible] = useObserver(imageRef);

  const {
    id,
    name,
    images,
    species,
    occupation,
    type,
    created_at,
    company,
    location,
    title,
    company_logo,
    index
  } = props;

  return (
    <div className="job-item" index={index + 1} onClick={() => onItemClick(id)}>
      <div className="company-logo" ref={imageRef}>
        {isVisible && (
          <Image src={images.main} alt={company} width="100" height="100" />
        )}
      </div>
      <div className="job-info">
        <div className="job-title">{name.first} {name.last}</div>
        <div className="job-location">
          {species} | {occupation}
        </div>
        <div className="company-name">{company}</div>
      </div>
    </div>
  );
};

JobItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company_logo: PropTypes.string,
  index: PropTypes.number.isRequired
};

export default JobItem;
