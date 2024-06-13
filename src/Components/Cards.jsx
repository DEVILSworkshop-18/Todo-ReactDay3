import React from "react";

const Cards = ({ handleDelete, handleEdit,setTodo,todos}) => {
  const changeStatus = (id, newStatus) => {
    setTodo(
      todos.map((item) =>
        item.id === id ? { ...item, completed: newStatus } : item
      )
    );
  };
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          {todos.length === 0 ? (
            <div className="col-12 text-center fs-2">
              <p>Todos Makes you Active</p>
            </div>
          ) : (
            todos.map((element, index) => {
              return (
                <div key={element.id} className="col-lg-4 p-3">
                  <div className="card shadow overflow-auto">
                    <div className="card-body">
                      <h5 className="card-title"><span style={{fontWeight:"bold"}}>Name:</span> {element.title}</h5>
                      <h5 className="card-title">
                      <span style={{fontWeight:"bold"}}>Description:</span> {element.desc}
                      </h5>
                      <p className="card-title d-flex flex-wrap ">
                        <h5><span style={{fontWeight:"bold"}}>Status:</span>
                        <select
                          className="ms-sm-2 rounded-2"
                          value={element.completed}
                          onChange={(e) =>
                            changeStatus(element.id, e.target.value)
                          }
                        >
                          <option value="notCompleted">Not Completed</option>
                          <option value="completed">Completed</option>
                        </select>
                        </h5>
                      </p>
                      <div className="d-flex flex-wrap justify-content-end">
                        <a
                          href="#"
                          className="btn btn-secondary ms-2 mt-2 "
                          onClick={() => handleEdit(element)}
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="btn btn-danger ms-2 mt-2 "
                          onClick={() => handleDelete(element.id)}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
