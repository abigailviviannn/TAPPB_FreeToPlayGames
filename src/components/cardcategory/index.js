import React from "react";
import "./index.css";

export default function index({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            {data ? (
                <>
                    <figure>
                        {data && data.thumbnail ? (
                            <img src={data.thumbnail} alt={data.title} />
                        ) : (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png" alt="Not Found"></img>
                        )}
                    </figure>
                    <div className="card-info">
                        <h3>{data.title}</h3>
                        <p>{data.genre}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
