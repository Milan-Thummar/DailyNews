import React, { useState } from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className="my-3">
            <div
                className="card"
                style={{
                    transform: isHovering ? "scale(1.05)" : "",
                    zIndex: isHovering ? "1" : "0",
                    transition: isHovering ? "200ms" : "200ms",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0",
                        top: "-10px",
                    }}
                >
                    <span className="badge rounded-pill bg-danger">
                        {" "}
                        {source}{" "}
                    </span>
                </div>
                <img
                    src={
                        !imageUrl
                            ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                            : imageUrl
                    }
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            By {!author ? "Unknown" : author} on{" "}
                            {new Date(date).toGMTString()}
                        </small>
                    </p>
                    <a
                        rel="noreferrer"
                        href={newsUrl}
                        target="_blank"
                        className="btn btn-sm btn-dark"
                        style={{
                            background: isHovering
                                ? "rgb(30,129,176)"
                                : "black",
                            border: isHovering ? "rgb(30,129,176)" : "black",
                        }}
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
