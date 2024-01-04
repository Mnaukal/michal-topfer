import { ReactNode } from "react";

export function NoTextTransform({ children }: { children: ReactNode }) {
    return <span style={{textTransform: "none"}}>{children}</span>
}
