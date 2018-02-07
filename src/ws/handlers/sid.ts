interface SIDPayload {
    sid: string;
}

export const sid = (payload: SIDPayload) => {
    localStorage.setItem("cats-industry.sid", payload.sid);
};