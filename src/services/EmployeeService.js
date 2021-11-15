import config from '../config/config';
import AxiosService from './axios-service'

export default class EmployeeService {
    baseUrl = config.baseUrl;
    addEmployee(data) 
    {
        return AxiosService.postService(`${this.baseUrl}employee`, data);
    }
    getAllEmployees() {
        return AxiosService.getService(`${this.baseUrl}employee`);
    }
    getEmployeeById(id)
    {
        return   AxiosService.getService(`${this.baseUrl}employee/${id}`);

    }
    updateEmployee(id,data)
    {
        console.log(data)
        return AxiosService.putService(`${this.baseUrl}employee/${id}`,data);
    }
}