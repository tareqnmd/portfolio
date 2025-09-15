import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://org-server.vercel.app/api/v1/',
});
