export interface IpResponse {
    ip: string;
}

export interface AtlasResponse {
    cidrBlock: string;
    count: number;
    ipAddresses: string;
    links: { href: string; rel: string }[];
};