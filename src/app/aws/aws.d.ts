export interface dirObj {
    ETag: string;
    Key: string;
    LastModified: any;
    Size: number;
    StorageClass: string;
}

export interface dirRes {
    CommonPrefixes: any;
    Contents: dirObj[];
    IsTruncated: boolean;
    KeyCount: number;
    MaxKeys: number;
    Name: string;
    Prefix: string;
}

export interface metadata {
    AcceptRanges: string;
    ContentLength: number;
    ContentType: string;
    ETag: any;
    LastModified: string;
    Metadata: any
}

export interface metaDataRes {
    data: metadata;
}
