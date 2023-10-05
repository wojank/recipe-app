import Hero from './_components/Hero';
import Latest from './_components/Latest';

export default function Home() {
	let liczby = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<>
			<main className="flex gap-10 w-full mt-3.5 mx-auto">
				{/* może te sekcje porzucać do komponentów i tylko komponenty były by w tej templatce? */}
				<section className="w-1/2" aria-label="recipe-of-the-day">
					<Hero />
				</section>
				<section
					className="w-1/2 flex items-center justify-center flex-wrap gap-5"
					aria-label="latest-recipes-and-articles"
				>
					<h2 className="w-full text-center text-7xl font-serif my-6">
						Najnowsze wpisy
					</h2>
					{liczby.map((liczba) => {
						return <Latest key={liczba} />;
					})}
				</section>
			</main>
			<section
				className="w-11/12 mx-auto bg-green-700"
				aria-label="kuchnia-włoska"
			>
				Tu będą trzy komponeny z miniaturką
			</section>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
				inventore quaerat mollitia suscipit nesciunt error sint maiores
				exercitationem officia! Natus earum molestiae modi consequatur sed
				veritatis velit maiores enim culpa suscipit, fugiat aperiam accusantium
				nobis cumque soluta asperiores rem! Optio ipsum doloribus nulla ea
				explicabo maiores dolores sequi suscipit? Autem corporis labore
				excepturi sit dolore modi ipsam aperiam ab eum consequuntur inventore
				numquam debitis similique aliquam, incidunt dolores non quo magnam
				illum, magni distinctio, odio esse cum? Dolores alias, quasi quam nihil
				molestiae explicabo deserunt vel officia cupiditate quod. Exercitationem
				perferendis maxime eligendi aspernatur perspiciatis nesciunt hic
				pariatur esse voluptates!
			</p>
			<ul>
				<li>5656</li>
				<li>5656</li>
				<li>5656</li>
				<li>7</li>
				<li>6</li>
				<li>5</li>
				<li>4</li>
				<li>3</li>
				<li>2</li>
				<li>1</li>
			</ul>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
				ea delectus quaerat est sint commodi dicta consequuntur quae. Aspernatur
				consequuntur, dolore corrupti earum assumenda velit architecto quo autem
				repudiandae, laborum ipsum amet neque voluptatum dolorum accusamus vitae
				explicabo. Voluptatibus id tempora officia maiores fugit dicta nihil
				quam distinctio in et!
			</p>
			<ul>
				<li>5656</li>
				<li>5656</li>
				<li>5656</li>
				<li>7</li>
				<li>6</li>
				<li>5</li>
				<li>4</li>
				<li>3</li>
				<li>2</li>
				<li>1</li>
			</ul>
		</>
	);
}
