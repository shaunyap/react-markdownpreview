var React = require('react');
import Nav from 'Nav';

var MdApp = (props) => {
    return (
      <div>
        <Nav/>
        <div className='row'>
                {props.children}
        </div>
      </div>
    );
}

module.exports = MdApp;
