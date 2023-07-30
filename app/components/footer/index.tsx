import Email from '../../images/email';
import Github from '../../images/github';
import Linkedin from '../../images/linkedin';
import Whatsapp from '../../images/whatsapp';

export default function Footer() {
	return (
		<footer className="text-blue-500 sm:flex sm:fixed bottom-6 right-2 hidden flex-col gap-3">
			<a
				href="https://github.com/KatrielKoga"
				target="_blank"
				className="bg-white w-14 h-14 rounded-full border border-blue-500 shadow-md flex items-center justify-center"
			>
				<Github />
			</a>
			<a
				href="https://www.linkedin.com/in/katriel-koga/"
				target="_blank"
				className="bg-white w-14 h-14 rounded-full border border-blue-500 shadow-md flex items-center justify-center"
			>
				<Linkedin />
			</a>
			<a
				href="mailto:kkoga99@gmail.com"
				target="_blank"
				className="bg-white w-14 h-14 rounded-full border border-blue-500 shadow-md flex items-center justify-center"
			>
				<Email />
			</a>
			<a
				href="https://wa.me/5542999038427"
				target="_blank"
				className="bg-white w-14 h-14 rounded-full border border-blue-500 shadow-md flex items-center justify-center"
			>
				<Whatsapp />
			</a>
		</footer>
	);
}
