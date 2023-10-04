import Image from 'next/image';
import diyFakeFood2 from '../../../public/diyfakefood2.webp';

export default function Latest() {
	return (
		<>
			<figure className="w-60 shadow-custom">
				<div className="relative w-full h-48">
					<Image
						src={diyFakeFood2}
						alt="tu będzie title"
						fill
						className="object-cover"
					/>
				</div>
				<div className="p-4">
					<span className="font-bold">Voices</span>
					<figcaption className="text-2xl font-serif my-3">
						Tytuł wpisu Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</figcaption>
				</div>
			</figure>
		</>
	);
}
