import React from "react";
import Content from "../common/Content";
import { v4 as uuidv4 } from "uuid";

function PostContainer({ contents }) {
    return (
        <div>
            {contents.map((el) => (
                <Content key={uuidv4()} feed={el} />
            ))}
        </div>
    );
}

export default PostContainer;
