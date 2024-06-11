import React, { useState, useEffect } from 'react';

export default function LvhTaskOrEdit({ lvhOnSubmit, lvhEditingTask }) {
    const lvhTasksObj = {
        lvhId: 0,
        lvhName: "",
        lvhAge: 0,
        lvhIsActive: false
    }
    const [lvhTask, setLvhTask] = useState(lvhTasksObj);

    // Update form state if editing task changes
    useEffect(() => {
        if (lvhEditingTask !== null) {
            setLvhTask(lvhEditingTask);
        } else {
            setLvhTask(lvhTasksObj);
        }
    }, [lvhEditingTask]); // eslint-disable-line react-hooks/exhaustive-deps

    const lvhHandleChange = (lvhEvent) => {
        let Name = lvhEvent.target.name;
        let value = lvhEvent.target.type === 'checkbox' ? lvhEvent.target.checked : lvhEvent.target.value;

        setLvhTask(prev => {
            return {
                ...prev,
                [Name]: value,
            }
        })
    }

    const lvhHandleSubmit = (lvhEvent) => {
        lvhEvent.preventDefault();
        lvhOnSubmit(lvhTask);
        setLvhTask(lvhTasksObj); // Reset form
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>{lvhEditingTask ? "Sửa Task" : "Thêm mới Task"}</h2>
            </div>
            <div className="card-body">
                <form onSubmit={lvhHandleSubmit}>
                    <div className="form-group mb-3">
                        <label>Task ID</label>
                        <input
                            type="text"
                            name='lvhId'
                            value={lvhTask.lvhId}
                            onChange={lvhHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Task Name</label>
                        <input
                            type="text"
                            name='lvhName'
                            value={lvhTask.lvhName}
                            onChange={lvhHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Age</label>
                        <input
                            type="number"
                            name='lvhAge'
                            value={lvhTask.lvhAge}
                            onChange={lvhHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Status</label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                name='lvhIsActive'
                                checked={lvhTask.lvhIsActive}
                                onChange={lvhHandleChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Active</label>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary">Ghi lại</button>
                </form>
            </div>
        </div>
    )
}