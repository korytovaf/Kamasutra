import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'a19acec0-1037-4064-8297-7df537629abc'},
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    postFriend(userId) {
        return instance
            .post(`follow/${userId}`, {})
            .then(response => response.data)
    },

    deleteFriend(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    }


}

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data)
    },

    updateStatus(status) {
        return instance
            .put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    getAuth() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },

}