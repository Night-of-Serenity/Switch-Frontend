import React, { useEffect } from "react";
// import { useFeed } from "../context/FeedContext";
import { Link } from "react-router-dom";

function ContentTrends({ trend }) {
    // console.log(trend);
    return (
        <div>
            <div className="py-1">
                <Link to={`/trend/${trend.id}`}>
                    <h1 className="text-base "># {trend.tagName}</h1>
                </Link>
                <h1 className="text-sm font-light">{trend.tagCount} Switch</h1>
            </div>
        </div>
    );
}

export default ContentTrends;
