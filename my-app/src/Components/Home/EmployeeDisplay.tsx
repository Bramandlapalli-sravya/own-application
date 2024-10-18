import React, { FunctionComponent, useState } from "react";
import { EmployeeDetails } from "./styles.ts";
import { MyModal } from "./Modal/Modal.tsx";
import { useForm } from "react-hook-form";

const EmployeeDisplay: FunctionComponent = () => {

    const { register, handleSubmit, reset } = useForm();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [employees, setEmployees] = useState<{ id: string; name: string; salary: string; email: string }[]>([]);
    const [newEmployee, setNewEmployee] = useState<{ id: string; name: string; salary: string; email: string }>({
        id: '',
        name: '',
        salary: '',
        email: ''
    });
    const [showDetails, setShowDetails] = useState<number | string>();

    const employeeList = () => {
        setIsOpen(true);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewEmployee(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmitClick = () => {
        const newId: any = employees.length ? employees.length + 1 : 1;
        setEmployees(prev => [...prev, { ...newEmployee, id: newId }]);
        setNewEmployee({ id: '', name: '', salary: '', email: '' }); // Reset the form
        // reset();
        setIsOpen(false);
    }

    const completeDetails = () => {
        const matchEmployee = employees.find(emp => emp.id === showDetails);
        return (
            <>
                <div>
                    <div>Name: {matchEmployee?.name}</div>
                    <div>Salary: {matchEmployee?.salary}</div>
                    <div>Email: {matchEmployee?.email}</div>
                </div>
            </>
        )
    }

    return (
        <EmployeeDetails className="w-full">
            <div className="flex justify-between p-5">
                <h1>Employee DataBase Management</h1>
                <button className="border" onClick={employeeList}>Add Employee</button>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Employee List</th>
                        <th>Employee Information</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item) => (
                        <tr>
                            <td onClick={() => setShowDetails(item.id)}>{item.name}</td>
                            <td>{item.id === showDetails && (<div>{completeDetails()}</div>)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <MyModal isOpen={isOpen} isCloseModal={() => setIsOpen(false)}>
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="name"
                        value={newEmployee.name}
                        placeholder="Employee Name"
                    // {...register('name', { required: "true" })}
                    />
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="salary"
                        value={newEmployee.salary}
                        placeholder="Salary"
                    //  {...register('salary', { required: "true" })}
                    />
                    <input
                        type="email"
                        onChange={handleInputChange}
                        name="email"
                        value={newEmployee.email}
                        placeholder="Enter Email"
                    // {...register('email', { required: "true" })}
                    />
                    <button onClick={() => handleSubmitClick()}>Add Employee</button>
                </div>
            </MyModal>
        </EmployeeDetails>
    );
}

export default EmployeeDisplay;

