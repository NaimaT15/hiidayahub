import api from '../api';

export const getTeachers = async (language) => {
    const params = language ? { language } : {};
    const response = await api.get('/teachers', { params });
    return response.data;
};

export const getTeacher = async (id) => {
    const response = await api.get(`/teachers/${id}`);
    return response.data;
};

export const createTeacher = async (teacherData) => {
    const response = await api.post('/teachers', teacherData);
    return response.data;
};

export const createBooking = async (bookingData) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
};

export const getStudentBookings = async (studentId) => {
    const response = await api.get(`/bookings/student/${studentId}`);
    return response.data;
};

export const getTeacherBookings = async (teacherId) => {
    const response = await api.get(`/bookings/teacher/${teacherId}`);
    return response.data;
};
