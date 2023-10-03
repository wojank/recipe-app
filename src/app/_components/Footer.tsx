import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faXTwitter,
	faFacebookF,
	faInstagram,
	faPinterestP,
	faDiscord,
	faTwitch,
} from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Footer() {
	return (
		<>
			<footer className="w-full bg-gray-400 py-5">
				<div className="w-4/5 mx-auto flex items-center justify-start">
					<h2>Logo</h2>
					<div className="mx-6">
						<FontAwesomeIcon icon={faXTwitter} size="2x" className="px-2" />
						<FontAwesomeIcon icon={faFacebookF} size="2x" className="px-2" />
						<FontAwesomeIcon icon={faTwitch} size="2x" className="px-2" />
						<FontAwesomeIcon icon={faInstagram} size="2x" className="px-2" />
						<FontAwesomeIcon icon={faPinterestP} size="2x" className="px-2" />
						<FontAwesomeIcon icon={faDiscord} size="2x" className="px-2" />
					</div>
				</div>
			</footer>
		</>
	);
}
