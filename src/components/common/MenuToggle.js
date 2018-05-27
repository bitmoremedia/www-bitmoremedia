import React from 'react'

const styles = {
  button: {
    height: '30px',
    width: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  bar: {
    backgroundColor: '#888',
    width: '22px',
    height: '2px',
    display: 'block',
    borderRadius: '1px',
    transition: 'all 0.3s',
    transformOrigin: 'center center',
    opacity: 1,
  },
}

const MenuToggle = ({ onToggle, open }) => {
  const topBar = {
    ...styles.bar,
    transform: open
      ? 'rotate(45deg) translateY(1.5px) translateX(1.5px)'
      : 'rotate(0deg) translateY(-4px) translateX(0)',
  }

  const middleBar = {
    ...styles.bar,
    opacity: open ? 0 : 1,
  }

  const bottomBar = {
    ...styles.bar,
    transform: open
      ? 'rotate(-45deg) translateY(-1.5px) translateX(1.5px)'
      : 'rotate(0deg) translateY(4px) translateX(0)',
  }

  return (
    <button className="_outline-none" style={styles.button} onClick={onToggle}>
      <span style={topBar} />
      <span style={middleBar} />
      <span style={bottomBar} />
    </button>
  )
}

export default MenuToggle
