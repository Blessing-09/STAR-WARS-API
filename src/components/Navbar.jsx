import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { dispatch, store } = useGlobalReducer();
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <button className="navbar-brand btn btn-secondary mb-0 h1">
                        STAR WARS
                    </button>
                </Link>
                <div className="ml-auto">
                    <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites <span className="bg-warning px-2 py-1">{store.favorites.length}</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {store.favorites.length === 0 ? (
                                <li className="dropdown-item text-muted">
                                   (empty)
                                </li>
                            ) : (
                                store.favorites.map((favorite, index) => (
                                    <li
                                        key={index}
                                        className="d-flex justify-content-between align-items-center px-3"
                                    >
                                        <span className="favs">{favorite}</span>
                                        <button
                                            className="btn btn-sm btn-dark ms-2 mt-1"
                                            onClick={() =>
                                                dispatch({
                                                    type: "removeFavorite",
                                                    payload: favorite,
                                                })
                                            }
                                        >
                                           ❌
                                        </button>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
