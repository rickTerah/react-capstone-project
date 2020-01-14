import jwtDecode from 'jwt-decode';
import { toast } from "react-toastify";
import { apiUrl } from "../config.json";
const registerUserEndPoint = `${apiUrl}/auth/create-user`;
const loginUserEndPoint = `${apiUrl}/auth/signin`;

export function loginUser(user) {
    const userData = { 
        email: user.email,
        password: user.password
    };
    fetch(loginUserEndPoint, {
        method: 'Post',
        body: JSON.stringify(userData),
        headers: {
          'content-type': "application/json",
          'Accept': "application/json"
        }
    })
    .then(response => response.json())
        .then(data => {
            if(data.status === 'error'){
                return toast.error(data.error);
            }
            localStorage.setItem('token', data.data.token);
            window.location = '/';
            toast.success('Successfully logging In');
        });
}

export function registerUser(user) {
    const userData = { 
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        gender: user.gender,
        jobRole: user.jobRole,
        department: user.department,
        address: user.address,
        isAdmin: user.isAdmin
    };
    fetch(registerUserEndPoint, {
        method: 'Post',
        body: JSON.stringify(userData),
        headers: {
          'content-type': "application/json",
          'token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
        .then(data => {
            if(data.status === 'error'){
                return toast.error(data.error);
            }
            toast.success('Employee account successfully created');
        })
}

export function logout() {
    localStorage.removeItem('token');
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem('token');
        return jwtDecode(jwt);
      } catch (ex) {
          return null;
      }
}