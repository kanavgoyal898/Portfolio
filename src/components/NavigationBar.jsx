import React, { useState } from 'react';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavigationBar(props) {
    const [open, setOpen] = useState(false);

    return (
        <nav className='nav-section'>
            {open && <button onClick={() => setOpen(prevOpen => !prevOpen)} className='burger-menu-icon'>
                <FontAwesomeIcon icon={faComputer} />
            </button>}
            <ul className={'burger-menu text-lightTertiary dark:text-darkTertiary'}>
                {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </nav>
    );
}

export default NavigationBar;
