'use strict';

var React = require('react');
var Facebook = require('./index');

React.render(
  <Facebook
    title="Welcome to the Mullet Stack."
    subtitle="Facebook in the front. Walmart in the back."
  />,
  document.getElementById('facebook')
);
