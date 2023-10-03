import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPersonWalkingArrowRight,
	faMagnifyingGlass,
	faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Navigation() {
	return (
		<>
			<header>
				<section className="sticky top-0 w-full bg-slate-800 py-2">
					<div className="w-4/5 mx-auto flex items-center justify-end text-stone-100">
						<FontAwesomeIcon
							icon={faPersonWalkingArrowRight}
							size="xl"
							className="pr-2"
						/>
						<p className="hover:text-stone-400 hover:cursor-pointer">Sign In</p>
						<div className="border-l-2 border-stone-300 w-1 h-6 mx-3 "></div>
						<p className="hover:text-stone-400 hover:cursor-pointer">
							Register
						</p>
					</div>
				</section>
				<section className="border-b-2 border-orange-200 w-full">
					<div className="w-8/12 mx-auto flex items-center justify-between py-10">
						<h2>Logo tu będzie</h2>
						<form className="flex items-center">
							<input
								type="text"
								placeholder="potrawa, produkt itp."
								className="inline-block p-2 rounded w-64 focus:outline-none border-2 border-stone-400"
							/>
							<button>
								<FontAwesomeIcon
									icon={faMagnifyingGlass}
									size="2x"
									className="p-2"
								/>
							</button>
						</form>
					</div>
				</section>
				<section className="border-b-2 border-orange-200 w-full">
					<nav className="w-4/5 mx-auto flex items-center justify-center">
						<ul className="py-3">
							<li className="inline-block mx-5">
								Przepisy
								<FontAwesomeIcon icon={faAngleUp} className="text-orange-300" />
							</li>
							<li className="inline-block mx-5">O kuchni</li>
							<li className="inline-block mx-5">Inspiracje</li>
							<li className="inline-block mx-5">Zdrowie</li>
							<li className="inline-block mx-5">Techniki kulinarne</li>
						</ul>
					</nav>
				</section>
			</header>
		</>
	);
}
