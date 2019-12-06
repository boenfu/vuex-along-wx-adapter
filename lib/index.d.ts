import { WXLocalAdapter, WXSessionAdapter } from "./adapter";
export default function (): {
    local: typeof WXLocalAdapter;
    session: typeof WXSessionAdapter;
    sync: boolean;
};
