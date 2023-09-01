import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import svgImage from '../images/connect-logo-white.svg'
import classNames from 'classnames'
import { useContext } from 'react'
import Email from 'src/pages/Email'
import { MailContext } from 'src/context/MailAppProvider'
import { path } from 'src/constants/path.constant'
import Home from 'src/pages/Home'

function MainLayout() {
  const { user, setLsData, lsData } = useContext(MailContext)
  const urlPath = useLocation()

  return (
    <div className='grid h-screen grid-cols-6 text-white'>
      <div className='col-span-1 flex flex-col bg-navy-darker'>
        <div className='flex h-14 items-center'>
          <img src={svgImage} alt='connect-logo' className='w-[80%]' />
        </div>
        <div className='flex flex-grow'>
          <div className='w-1/5'>
            <NavLink
              to={path.home}
              className={({ isActive }) =>
                classNames('flex h-14 items-center justify-center', {
                  'bg-navy-light': isActive
                })
              }
            >
              <svg aria-hidden='true' role='img' viewBox='0 0 576 512' width={18} height={18}>
                <path
                  fill='white'
                  d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'
                />
              </svg>
            </NavLink>
            <NavLink
              to={path.email}
              className={({ isActive }) =>
                classNames('flex h-14 items-center justify-center', {
                  'bg-navy-light': isActive
                })
              }
            >
              <svg aria-hidden='true' role='img' viewBox='0 0 512 512' width={16} height={16}>
                <path
                  fill='white'
                  d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                />
              </svg>
            </NavLink>
            <NavLink
              to={path.contact}
              className={({ isActive }) =>
                classNames('flex h-14 items-center justify-center', {
                  'bg-navy-light': isActive
                })
              }
            >
              <svg aria-hidden='true' role='img' viewBox='0 0 448 512' width={18} height={18}>
                <path
                  fill='white'
                  d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'
                />
              </svg>
            </NavLink>
          </div>
          <div className='w-4/5 bg-navy-dark'>
            <Routes>
              <Route path='' element={<Navigate to={path.email} />} />
              <Route path={path.home} element={<Home.Sidebar />} />
              <Route path={path.email} element={<Email.Sidebar />}>
                <Route path=':category' element={<Email.Sidebar />}>
                  <Route path=':emailId' element={<Email.Sidebar />} />
                </Route>
              </Route>
              <Route path={path.contact} element={<Home.Sidebar />} />
              {/* Vì Contact cũng đang 'under construction' nên em mượn tạm comopnent của Home ạ */}
            </Routes>
          </div>
        </div>
      </div>
      <div className='col-span-5 flex h-screen flex-col text-slate-900'>
        <div className='header flex h-14 items-center justify-between border border-b-gray-200 px-5'>
          <div>
            Pathname: <span className='font-semibold'>{urlPath.pathname}</span>
          </div>
          <div className='flex h-full items-center justify-end'>
            <div className='pr-3 text-right text-sm'>
              <p className='font-semibold'>{user.name}</p>
              <p className='font-light'>{user.email}</p>
            </div>
            <img src={user.avatarUrl} alt='avatar' className='h-10 w-10 rounded-full' />
            <button
              className='ml-3 rounded-lg bg-logout-red px-4 py-2 shadow-md'
              onClick={() => setLsData({ ...lsData, isLogin: false })}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='white'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='h-[calc(100%-3.5rem)]'>
          <Routes>
            {/* <Route path='' element={<Navigate to={path.email} />} /> */}
            <Route path={path.home} element={<Home.Body />} />
            <Route path={path.email} element={<Email.Body />}>
              <Route path=':category' element={<Email.Body />}>
                <Route path=':emailId' element={<Email.Body />} />
              </Route>
            </Route>
            <Route path={path.contact} element={<Home.Body />} />
            {/* Vì Contact cũng đang 'under construction' nên em mượn tạm comopnent của Home ạ */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
