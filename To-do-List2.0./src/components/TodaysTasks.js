import React from 'react';
import Card from './Card';

const TodaysTasks = ({ taskList }) => {
    // Get today's date
    const today = new Date().toISOString().slice(0, 10);
  
    // Filter the taskList to get tasks with today's date
    const filteredTasks = taskList.filter((task) => task.Date === today);
  
    return (
      <div className="task-container">
        {filteredTasks.map((task, index) => (
          <Card
            key={index}
            taskObj={task}
            index={index}
            // Pass any necessary props or functions
          />
        ))}
      </div>
    );
  };
  
  export default TodaysTasks;
  