import { useRouter } from "next/router";
import React from "react";

function Index() {
    const router = useRouter();
    const Navigation = () => {
        router.push("/general");
    };
    return (
        <>
            <div>cleent is here for 78965678</div>
            <button onClick={Navigation}>Navigation</button>
        </>
    );
}

export default Index;
