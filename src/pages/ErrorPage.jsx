import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  //#region [router]
  const error = useRouteError();
  //#endregion

  //#region [render]
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
  //#endregion
};

export default ErrorPage;
