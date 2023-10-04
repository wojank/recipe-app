import Image from 'next/image';
import diyFakeFood2 from '../../../public/diyfakefood2.webp';

export default function Hero() {
	return (
		<>
			<div className="sticky top-0 relative flex items-center h-screen justify-center bg-pink-500">
				<Image
					alt="recipe od the day"
					src={diyFakeFood2}
					placeholder="blur"
					fill
					className="object-cover z-0"
					priority
					// sizes
				/>

				<div className="relative flex items-center justify-center z-20 bg-white/90 h-3/4 w-3/4 ">
					<div className="text-center text-gray-600 bg-transparent w-11/12 h-5/6 border-2 border-orange-200">
						<h1 className="text-5xl font-serif m-2">
							Przepis na plastikowy ramen
						</h1>
						<p className="text-lg m-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
							eius.
						</p>
						<span className="font-bold">Ogarnij przepis</span>
					</div>
				</div>
			</div>
		</>
	);
}
