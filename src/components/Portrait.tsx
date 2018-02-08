import * as React from "react";

interface PortraitProps {
    characterID: number;
    size?: "32" | "64" | "128" | "256" | "512";
}

export const Portrait = (props: PortraitProps) => (
    <span style={{display: "flex", alignItems: "center", height: "100%"}}>
        <img
            src={"http://image.eveonline.com/Character/" + props.characterID + "_" + (props.size || "32") + ".jpg"}
            alt="portrait"
        />
    </span>
);