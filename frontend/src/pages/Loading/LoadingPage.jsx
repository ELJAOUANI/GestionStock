import Svg from "./loading";

export const LoadingPage = () => {
    return (
        <div
            style={{ height: "100vh" }}
            className="w-100 d-flex justify-content-center align-items-center"
        >
            <img src={Svg} style={{ width: "150px", height: "150px" }} />
        </div>
    );
};
