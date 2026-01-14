import api from '../api';

export const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};

export const register = async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
};

export const registerTeacher = async (teacherData) => {
    const response = await api.post('/auth/register-teacher', teacherData);
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
};

export const getCurrentUser = () => {
    // Parsing JWT payload locally if needed or just checking token existence
    return localStorage.getItem('token');
};
