export interface IResponse<T> {
    data: T;
    status: boolean;
    message?: string;
}
