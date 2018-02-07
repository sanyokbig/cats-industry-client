interface LoginUriPayload {
    uri: string;
}

export const loginUri = (payload: LoginUriPayload ) => {
    window.open(payload.uri, "eveAuth");
};