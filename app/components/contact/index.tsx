export default function Contact() {
	const inputClass =
		'bg-gray-200 p-4 bg-opacity-50 rounded-md placeholder:text-gray-600 mb-4 w-full';
	const labelClass = 'text-sm font-bold text-gray-700';
	return (
		<>
			<h3 className="text-gray-700">Feel free to contact me</h3>
			<div className="m-8 mt-2 bg-white w-full rounded-lg p-5 shadow-md flex justify-center">
				<form action="" className="flex flex-col w-2/3 max-w-md items-center">
					<div className="w-full">
						<label htmlFor="name" className={labelClass}>
							Name
						</label>
						<input
							className={inputClass}
							type="text"
							placeholder="Enter your name"
							name="name"
						/>
					</div>
					<div className="w-full">
						<label htmlFor="email" className={labelClass}>
							Email
						</label>
						<input
							className={inputClass}
							type="email"
							placeholder="Enter your email"
							name="enail"
						/>
					</div>
					<div className="w-full">
						<label htmlFor="message" className={labelClass}>
							Message
						</label>
						<textarea
							className={inputClass + ' resize-none'}
							name="message"
							placeholder="Enter your message"
						/>
					</div>
					<button
						type="submit"
						className="rounded-lg bg-[#2389CB] m-5 mt-0 pt-4 pb-4 text-white font-bold text-lg w-1/2"
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
