import { SetupAxios } from './setupAxios';
// Taken value from .env
// exp: END_POINT = process.env.END_POINT

const END_POINT = 'localhost:xxxx';
const apiService = new SetupAxios(END_POINT);
apiService.setHeader();

export { apiService };
