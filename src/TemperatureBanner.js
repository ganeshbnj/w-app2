import React from 'react';

const TemperatureBanner = ({ temperature }) => {
  return (
    <div className="temperature-banner">
      {temperature && `${temperature.toFixed(1)} °F`}
    </div>
  );
};

export default TemperatureBanner;
