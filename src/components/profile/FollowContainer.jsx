import React, { useEffect, useState } from "react";
import FollowItem from "./FollowItem";
import { useFeed } from "../../context/FeedContext";
import { useParams } from "react-router-dom";

function FollowContainer() {
    const { fetchFollowers, followers, fetchFollowings, followings } =
        useFeed();

    const { tab } = useParams();

    useEffect(() => {
        fetchFollowers();
        fetchFollowings();
    }, []);

    let contents = [];

    if (tab === "follower") {
        const cloneFollowers = [...followers];
        // console.log(cloneFollowers);
        for (let i = 0; i < cloneFollowers.length; i++) {
            // console.log(cloneFollowers[i]);

            for (let following of cloneFollowers[i].Following) {
                if (following.id === following.followerUserId) {
                    cloneFollowers[i].isFollwing = false;
                } else {
                    cloneFollowers[i].isFollowing = true;
                }
            }
        }
        contents = cloneFollowers;
        // console.log({ contents });
        // contents = followers;
    } else if (tab === "following") {
        const cloneFollowings = [...followings];
        for (let el of cloneFollowings) {
            el.isFollowing = true;
        }

        contents = cloneFollowings;
    }
    // console.log({ follower, following, contents });
    // console.log(contents);

    return (
        <div>
            {contents.map((el) => (
                <FollowItem key={el.id} content={el} />
            ))}
        </div>
    );
}

export default FollowContainer;
