import { WXLocalAdapter, WXSessionAdapter } from "./adapter";
export default function () {
    return {
        local: WXLocalAdapter,
        session: WXSessionAdapter,
        sync: true,
    };
}
