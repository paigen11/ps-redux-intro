import React, { memo } from 'react';

import './CounterControl.css';

const counterControl = memo(({ label, clicked }) => (
  <div className="CounterControl" onClick={clicked}>
    {label}
  </div>
));

export default counterControl;
