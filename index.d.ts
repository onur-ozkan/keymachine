declare module keymachine {
    type ExtendArgs = { [key: string]: any; }
    export function extend(args: ExtendArgs): void;
}

declare function keymachine(
    configurations?: {
        possibility?: string,
        length?: number,
        case?: string
    }
): string

export default keymachine;