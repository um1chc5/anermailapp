import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function Category({ name }: { name: string }) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames('flex h-14 items-center pl-12', {
          'bg-navy-light font-bold': isActive,
          'font-light': !isActive
        })
      }
      to={name}
    >
      {capitalizeFirstLetter(name)}
    </NavLink>
  )
}

export default Category
