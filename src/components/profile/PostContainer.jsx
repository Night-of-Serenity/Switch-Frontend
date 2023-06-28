import React from "react";
import Content from "../common/Content";

function PostContainer({ contents }) {
    console.log(contents);
    return (
        <div>
            {contents.map((el) => (
                <Content feed={el} />
            ))}
        </div>
    );
}

export default PostContainer;
