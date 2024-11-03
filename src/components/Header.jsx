import React from 'react'

function Header() {
  return (
    <div className='action-center-section'>
      <h2 class='name text-quaternaryLight dark:text-quaternaryDark'>
        <a href='/goyal/'>home page</a> of
      </h2>
      <h1 class='name'>
        <a href='/goyal/'>
          Kanav Goyal
        </a>
      </h1>
      <h2 class='name designation'>
        <p>Undergraduate Software Developer</p>
        <p>Computer Science and Engineering</p>
      </h2>
      <h2>
        <a href="https://www.nitj.ac.in" target="_blank">
          NIT Jalandhar
        </a>
      </h2>
    </div>
  )
}

export default Header