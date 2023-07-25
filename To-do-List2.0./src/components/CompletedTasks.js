import React from 'react';
import Card from './Card';

const CompletedTasks = ({ taskList }) => {
  // Filter the taskList to get the completed tasks
  const completedTasks = taskList.filter((task) => task.IsCompleted === true);

  return (
    <div className="task-container">
      {completedTasks.map((task, index) => (
        <Card key={index} taskObj={task} index={index} />
      ))}
    </div>
  );
};

export default CompletedTasks;
