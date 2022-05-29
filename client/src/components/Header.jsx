import React from 'react'
import { FaFeatherAlt } from 'react-icons/fa';
import { UserAuth } from '../context/authContext';

const Header = () => {

	const { user, logOut } = UserAuth();
	const signOutWithGoogle = async () => {
		try {
			await logOut()
		} catch (error) {
			//handle errors
		}
	}

	return (
		<header className='header bg-white/80 backdrop-blur-sm bg-slate'>
			<div className='navbar-area'>
				<div className="container flex flex-wrap justify-between items-center mx-auto">
					<a href="/" className='flex flex-shrink-0 flex-wrap items-center p-8 mr-2 text-2xl font-bold'> <FaFeatherAlt /> <span className='m-2'>pexen</span>  </a>
					<button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 px-6 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:outline duration-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
						<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
						<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							{[
								['Home', '/'],
								['Tests', '/testlink'],
								['Contact', '/contact'],
								['About', '/about'],
							].map(([title, url]) => (
								<li>
									<a href={url} className="rounded-full text-lg px-5 py-3 font-medium hover:outline hover:outline-indigo-200 duration-100  hover:text-slate-900" aria-current="page">{title}</a>
								</li>
							))}
						</ul>
					</div>
					{user?.email ?
							<button onClick={signOutWithGoogle} className='rounded-full text-lg px-8 py-3 font-medium bg-slate-200 hover:outline hover:outline-indigo-200 duration-100  hover:text-slate-900'>Logout</button>
						: <div></div>
					}
				</div>
			</div>
		</header>
	)
}

export default Header;