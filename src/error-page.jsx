import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex  justify-center text-center m-40">
            <div>
                <h1 className="text-8xl">404</h1>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'>
                    <button className="btn btn-sm btn-accent mt-8">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
}