import Image from 'next/image';
import diyFakeFood2 from '../../../public/diyfakefood2.webp';

export default function Hero() {
	return (
		<>
			<h1>Hero</h1>
			<Image
				alt="recipe od the day"
				src={diyFakeFood2}
				placeholder="blur"
				width={500}
			/>
		</>
	);
}
