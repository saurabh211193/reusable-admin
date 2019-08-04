import { userData } from '../user/user';

export interface res {
  message: string;
  statusCode: number;
}

export interface userListingRes extends res {
  data: userData[];
}

export interface allUserData extends userData {

}

export interface paginationData {
  pages?: number[];
  pageCount?: any;
}
