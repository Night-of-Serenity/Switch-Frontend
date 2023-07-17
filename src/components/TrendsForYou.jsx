import React, { useEffect } from "react";
import ContentTrends from "../Common/ContentTrends";
import { useFeed } from "../context/FeedContext";

function TrendsForYou() {
    const { fetchTrends, trends } = useFeed();
    useEffect(() => {
        fetchTrends();
    }, []);

    return (
        <div>
            <div className="border-2  m-2 rounded-xl p-4 ">
                <h1 className="text-xl font-semibold ">Trends for you</h1>
                {trends.map((el) => (
                    <ContentTrends trend={el} />
                ))}
            </div>
        </div>
    );
}

export default TrendsForYou;
