var React = require('react');

var Nav = () => {
        return (
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <ul className='menu'>
                        <li className='menu-text'>React Markdown Previewer</li>
                    </ul>
                </div>
                <div className='top-bar-right'>
                    <ul className='menu'>
                        <li className='menu-text'>
                            Created by <a href='http://siegeflow.com' target='_blank'>Shaun Yap</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

module.exports = Nav;
