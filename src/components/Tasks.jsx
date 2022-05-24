import React from 'react';
import Task from "./Task";

// pegou a tasks do componente App
const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    // e mapeou o componente tasks
    // pra cada task ele vai renderizar uma <Task />
    <>
      {tasks.map((task) => (
        <Task task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion} />
      ))}
    </>
  )
};

// export serve para poder importar o componente para outro arquivo
// default serve para podermos importar o componente sem precisar informar o nome dele entre {}, além de permitir mudar o nome do mesmo durante a importação.
export default Tasks;