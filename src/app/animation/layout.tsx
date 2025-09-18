export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="max-w-sm mx-auto w-full min-h-screen p-5 flex flex-col justify-between">
			{children}
		</div>
	)
}
