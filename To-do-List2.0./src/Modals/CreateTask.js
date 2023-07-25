import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'isImportant') {
        setIsImportant(checked);
      } else if (name === 'isCompleted') {
        setIsCompleted(checked);
      }
    } else {
      if (name === 'taskName') {
        setTaskName(value);
      } else if (name === 'description') {
        setDescription(value);
      } else if (name === 'date') {
        setDate(value);
      }
    }
  };

  const handleSave = () => {
    let taskObj = {
      Name: taskName,
      Description: description,
      Date: date,
      IsImportant: isImportant,
      IsCompleted: isCompleted,
    };

    save(taskObj);
    setTaskName('');
    setDescription('');
    setDate('');
    setIsImportant(false);
    setIsCompleted(false);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            autocomplete="off"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="6"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={handleChange}
            name="date"
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isImportant}
            onChange={handleChange}
            name="isImportant"
          />
          <label className="form-check-label">Mark as Important</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isCompleted}
            onChange={handleChange}
            name="isCompleted"
          />
          <label className="form-check-label">Mark as Completed</label>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
