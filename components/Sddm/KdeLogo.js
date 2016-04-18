import React from 'react';
import Isvg from 'react-inlinesvg';
import kdeIcon from '../../assets/images/kde.svg';

export default function KdeLogo() {
  return (
    <div style={{ paddingLeft: 8 }}>
      <Isvg src={kdeIcon} />
    </div>
  );
}
