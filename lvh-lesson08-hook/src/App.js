import React, { useState } from 'react';

import LvhListStudent from './component/LvhListStudent'
import LvhAddOrEdit from './component/LvhAddOrEdit'

function App() {
  // Mock data
  const lvh_listTasks = [
      { lvhId: 106, lvhName: "Lê Vinh Huy", lvhAge: 25, lvhIsActive: true },
      { lvhId: 1, lvhName: "Đỗ Trọng Huy", lvhAge: 22, lvhIsActive: true },
      { lvhId: 2, lvhName: "Nguyễn Văn Thạo", lvhAge: 23, lvhIsActive: false },
      { lvhId: 3, lvhName: "Minh Hiền Anh", lvhAge: 24, lvhIsActive: true },
      { lvhId: 4, lvhName: "Thành Gầy", lvhAge: 26, lvhIsActive: false },
  ]

  const [lvhlistStudents, setLvhListStudents] = useState(lvh_listTasks);
  const [lvhEditingTask, setLvhEditingTask] = useState(null);

  const lvhHandleSubmit = (lvhTask) => {
      if (lvhEditingTask !== null) {
          setLvhListStudents(prev => prev.map((task, index) => index === lvhEditingTask.index ? lvhTask : task));
          setLvhEditingTask(null);
      } else {
          setLvhListStudents(prev => [...prev, lvhTask]);
      }
  }

  const lvhHandleEditTask = (index) => {
      setLvhEditingTask({ ...lvhlistStudents[index], index });
  }

  const lvhHandleRemoveTask = (index) => {
      setLvhListStudents(prev => prev.filter((_, i) => i !== index));
  }

  return (
      <div className="container border">
          <h1>Lê Vinh Huy</h1>
          <hr />
          <div>
              {/*danh sach list tasks*/}
              <LvhListStudent renderLvhListStudents={lvhlistStudents} onEditTask={lvhHandleEditTask} onRemoveTask={lvhHandleRemoveTask} />
          </div>
          <div>
              <LvhAddOrEdit lvhOnSubmit={lvhHandleSubmit} lvhEditingTask={lvhEditingTask} />
          </div>
      </div>
  );
}

export default App;