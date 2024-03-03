import ErrorHandler from "../components/ErrorHandler";

const WithErrorHandler = Component => props => {
    return (
        <ErrorHandler>
            <Component {...props}/>
        </ErrorHandler>
    );
}

export default WithErrorHandler;