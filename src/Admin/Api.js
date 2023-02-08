import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const BooksUrl = 'http://localhost:4000/getBooks';
const editUrl = 'http://localhost:4000/editData';
const getStuUrl = 'http://localhost:4000/getStudent';
const editStudentUrl = 'http://localhost:4000/editStudent';
const getFacUrl = 'http://localhost:4000/getFaculty';
const editFactUrl = 'http://localhost:4000/editFaculty';
const getIssueBookURL = 'http://localhost:4000/getIssueBook';


export const getIssueBook = async (id) => {
    id = id || '';
    return await axios.get(`${getIssueBookURL}/${id}`);
} 

export const getBook = async (id) => {
    id = id || '';
    return await axios.get(`${BooksUrl}/${id}`);
} 

export const EditBook= async (id, bookData) => {
    return await axios.put(`${editUrl}/${id}`, bookData)
}
export const getStudent = async (id) => {
    id = id || '';
    return await axios.get(`${getStuUrl}/${id}`);
}

export const editStudent= async (id, user) => {
    return await axios.put(`${editStudentUrl}/${id}`, user)
}
export const getFaculty = async (id) => {
    id = id || '';
    return await axios.get(`${getFacUrl}/${id}`);
}

export const editFaculty= async (id, user) => {
    return await axios.put(`${editFactUrl}/${id}`, user)
}