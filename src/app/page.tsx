export default function Home() {
	return (
		<div className="max-w-sm mx-auto w-full min-h-screen p-5 flex flex-col justify-between">
			<div className="flex flex-col gap-5">
				<input type="number" placeholder="Test Number" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
				<h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900">Webview Sandbox</h1>
				<div>
					<h2>Old mailto</h2>
					<a href="mailto:single-form@xyz.com">single-form@xyz.com</a>
				</div>

				<div>
					<h2>New mailto</h2>
					<a target="_parent" href="mailto:single-form@xyz.com">single-form@xyz.com</a>
				</div>
			</div>
			<input type="number" placeholder="Test Number" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />

		</div>
	);
}
