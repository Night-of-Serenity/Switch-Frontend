import React, { useEffect } from "react";
// import { useFeed } from "../context/FeedContext";

function ContentTrends({ trend }) {
    return (
        <div>
            <div className="py-1">
                <h1 className="text-base"># {trend.tagName}</h1>
                <h1 className="text-sm font-light">{trend.tagCount} Switch</h1>
            </div>
        </div>
    );
}

export default ContentTrends;
