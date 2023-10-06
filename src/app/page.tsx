import Hero from './_components/Hero';
import Latest from './_components/Latest';

export default function Home() {
	let liczby = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<>
			<main className="flex flex-wrap w-full mt-3.5 mx-auto">
				{/* może te sekcje porzucać do komponentów i tylko komponenty były by w tej templatce? */}
				<section className="w-1/2" aria-label="recipe-of-the-day">
					<Hero />
				</section>
				<section
					className="w-1/2 bg-orange-500 flex items-center justify-center flex-wrap gap-5"
					aria-label="latest-recipes-and-articles"
				>
					<h2 className="w-full text-center text-7xl font-serif my-6">
						Najnowsze wpisy
					</h2>
					{liczby.map((liczba) => {
						return <Latest key={liczba} />;
					})}
				</section>
				<section
					className="w-11/12 mx-auto bg-green-700"
					aria-label="kuchnia-włoska"
				>
					Tu będą trzy komponeny z miniaturką
				</section>
			</main>
		</>
	);
}
