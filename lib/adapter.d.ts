export declare class WXLocalAdapter<TSchema = any> {
    private source;
    constructor(source: string);
    read(): TSchema;
    write(data: TSchema): void;
}
export declare class WXSessionAdapter {
    private _source;
    constructor(_source: string);
    read(): {};
    write(): void;
}
