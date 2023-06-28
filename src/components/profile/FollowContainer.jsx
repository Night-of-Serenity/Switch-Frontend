import React, { useEffect, useState } from "react";
import FollowItem from "./FollowItem";
import { useFeed } from "../../context/FeedContext";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function FollowContainer() {
    const { fetchFollowers, followers, fetchFollowings, followings } =
        useFeed();
    const { user } = useAuth();

    const { tab } = useParams();

    useEffect(() => {
        fetchFollowers();
        fetchFollowings();
    }, []);

    let contents = [];

    if (tab === "follower") {
        const cloneFollowers = [...followers];
        console.log(followings);
        for (let i = 0; i < cloneFollowers.length; i++) {
            // console.log(cloneFollowers[i]);
            // if (cloneFollowers.length > 0) {
            //     for (let following of cloneFollowers[i].Follower) {
            //         if (user.id === following.followingUserId) {
            //             cloneFollowers[i].isFollowing = true;
            //             cloneFollowers[i].isFollwing = false;
            //         } else {
            //         }
            //     }
            // }
            for (let followingUser of followings) {
                if (cloneFollowers[i].id === followingUser.id) {
                    cloneFollowers[i].isFollowing = true;
                } else {
                    cloneFollowers[i].isFollwing = false;
                }
            }
        }
        contents = [...cloneFollowers];
        // console.log({ contents });
        // contents = followers;
    } else if (tab === "following") {
        const cloneFollowings = [...followings];
        for (let el of cloneFollowings) {
            el.isFollowing = true;
        }

        contents = [...cloneFollowings];
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
