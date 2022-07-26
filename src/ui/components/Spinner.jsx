export default function Spinner() {
    return (
        <div id="spinner-container" className="container d-flex justify-content-center align-items-center w-100" style={{minHeight: "100%"}} >
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}