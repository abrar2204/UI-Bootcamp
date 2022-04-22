import React, { useMemo } from "react";
import { useMovie } from "../context/MovieContext";
const Pagination = () => {
	const {
		state: { filteredMovies: movies, moviesDisplayedInPage, currentPageIndex },
		actions: { changePageTo },
	} = useMovie();

	const totalPages = useMemo(
		() => Math.round(movies.length / moviesDisplayedInPage),
		[movies.length, moviesDisplayedInPage]
	);

	console.log("Total Pages from pagination", totalPages);
	return totalPages === 0 ? null : (
		<div className="pages">
			<button
				disabled={currentPageIndex === 0}
				onClick={() => changePageTo(currentPageIndex - 1)}
			>
				{"<"}
			</button>
			{totalPages > 5
				? [
						<button
							key="pageb1"
							className={0 === currentPageIndex ? "current" : ""}
							onClick={() => changePageTo(0)}
						>
							{1}
						</button>,
						<button
							key="pageb2"
							className={1 === currentPageIndex ? "current" : ""}
							onClick={() => changePageTo(1)}
						>
							{2}
						</button>,
						<p key="paged1" style={{ color: "white", marginLeft: "10px" }}>
							...
						</p>,
						currentPageIndex > 1 && currentPageIndex < totalPages - 2 && (
							<button key="pageb3" className={"current"}>
								{currentPageIndex + 1}
							</button>
						),
						<p key="paged2" style={{ color: "white", marginRight: "10px" }}>
							...
						</p>,
						<button
							key="pagb4e"
							className={totalPages - 2 === currentPageIndex ? "current" : ""}
							onClick={() => changePageTo(totalPages - 2)}
						>
							{totalPages - 1}
						</button>,
						<button
							key="pageb5"
							className={totalPages - 1 === currentPageIndex ? "current" : ""}
							onClick={() => changePageTo(totalPages - 1)}
						>
							{totalPages}
						</button>,
				  ]
				: Array.apply(null, Array(totalPages)).map((_, idx) => (
						<button
							key={"page" + idx}
							className={idx === currentPageIndex ? "current" : ""}
							onClick={() => changePageTo(idx)}
						>
							{idx + 1}
						</button>
				  ))}

			<button
				disabled={currentPageIndex === totalPages - 1}
				onClick={() => changePageTo(currentPageIndex + 1)}
			>
				{">"}
			</button>
		</div>
	);
};

export default Pagination;
