import {ResponseType} from "api/todolists-api";
import {instance} from "common/api";
import {LoginParamsType} from "features/auth/api/authApi.types";

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<ResponseType<{ userId?: number }>>("auth/login", data);
    },
    logout() {
        return instance.delete<ResponseType<{ userId?: number }>>("auth/login");
    },
    me() {
        return instance.get<ResponseType<{ id: number; email: string; login: string }>>("auth/me");
    },
};