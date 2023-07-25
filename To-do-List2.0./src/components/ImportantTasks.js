import React from 'react';
import Card from './Card';

const ImportantTasks = ({ taskList }) => {
  // Filter the taskList to get the completed tasks
  const importantTasks = taskList.filter((task) => task.IsImportant === true);

  return (
    <div className="task-container">
      {importantTasks.map((task, index) => (
        <Card key={index} taskObj={task} index={index} />
      ))}
    </div>
  );
};

export default ImportantTasks;

