import React, { useEffect, useState } from "react";

export default function Router({ mapping }) {
	const [page, setPage] = useState(window.location.hash);

	const updateHash = () => {
		setPage(window.location.hash);
	}

	useEffect(() => {
		window.addEventListener("hashchange", updateHash, false);
		return () => {
			window.removeEventListener("hashchange", updateHash, false);
		}
	}, [])

	return (
		mapping[page] ? mapping[page] : mapping['*']
	);
}