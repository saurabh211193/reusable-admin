export interface loginData {
    rememberMe: boolean;
}

export interface loginRes extends res {
    data: userData;
}

export interface registerRes extends res {

}

export interface userData {
    is_authenticated?: boolean;
    cartInfo: any[];
    createdAt: string;
    email: string;
    fN: string;
    img: string;
    isDeleted: boolean;
    isVerified: boolean;
    lN: string;
    pNo: string;
    token: string;
    updatedAt: string;
    _id: string;
}

export interface res {
    error?: string;
    message: string;
    statusCode: number
}
