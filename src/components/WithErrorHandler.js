import ErrorHandler from "../pages/ErrorHandler";

const WithErrorHandler = Component => props => {
    return (
        <ErrorHandler>
            <Component {...props}/>
        </ErrorHandler>
    );
}

export default WithErrorHandler;