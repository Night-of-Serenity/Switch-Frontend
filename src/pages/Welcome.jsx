import React from "react";

function Welcome() {
    return (
        <div className="bg-[url('/public/bghome.jpg')] background-custom h-screen">
            <div className="grid-cols-6 grid">
                <div>1</div>
                <div>2</div>
                <div className="col-span-2">3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </div>
    );
}

export default Welcome;
