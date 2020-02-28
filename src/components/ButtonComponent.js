"use strict";
import "./ButtonComponent.css";
export const ProjectComponent = () => {
  let state = {
    project_name: "My Awesome Project",
    task_name: "Programming",
    timer: 0,
    interval_id: null,
    timer_interval_id: null,
    timer_started: false
  };

  Object.freeze(state);

  let incrementCounter = () => {
    state.counter += 2;
  };

  const setState = current_state => {
    state = Object.freeze({ ...state, ...current_state });
    console.log("State:::", state);
  };

  const create_input = ({ label, action, placeholder }) => {
    let time_input = document.createElement("input");
    time_input.type = "text";
    time_input.name = label;
    time_input.className = `time-input`;
    time_input.placeholder = placeholder;
    time_input.addEventListener("focus", () => {
      let interval = setInterval(() => action(time_input.value), 100);
      setState({ interval_id: interval });
    });
    time_input.addEventListener("blur", () => {
      if (state.interval_id) {
        clearInterval(state.interval_id);
      }
    });

    time_input.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        console.log("Enter KEY Pressed");
        event.preventDefault();
        time_input.blur();
      }
    });

    return time_input;
  };

  const create_button = ({ id, text, action, className }) => {
    let time_button = document.createElement("button");
    time_button.id = id;
    time_button.type = "button";
    time_button.innerHTML = text;
    time_button.className = className;

    time_button.onclick = action;

    return time_button;
  };

  const setProjectName = value => {
    if (state.project_name !== value) {
      setState({ project_name: value });
    }
    console.log(state.project_name);
  };

  const setTaskName = value => {
    if (state.task_name !== value) {
      setState({ task_name: value });
    }
  };

  const toggle_tracking = () => {
    if (state.timer_started) {
      clearInterval(state.timer_interval_id);
      setState({ timer_interval_id: null, timer_started: false, timer: 0 });
      document.getElementById("start-button").innerHTML = "Start";
    } else {
      let timer_interval_id = setInterval(() => {
        // setState({ timer: state.timer + 1 });
        setState({ timer: state.timer + 1 });
        console.log("Time Elapsed", state.timer);
      }, 1000);

      setState({
        timer_interval_id,
        timer_started: true
      });

      document.getElementById("start-button").innerHTML = "Stop";
    }
  };

  const renderProject = () => {
    let root_container = document.createElement("div");
    root_container.className = `root-container`;
    let project_container = document.createElement("div");
    project_container.className = `project-container`;

    project_container.appendChild(
      create_input({
        label: "p_name",
        action: setProjectName,
        placeholder: "Project Name"
      })
    );

    project_container.appendChild(
      create_input({
        label: "p_task",
        action: setTaskName,
        placeholder: "Current Task"
      })
    );

    root_container.appendChild(project_container);

    let button_container = document.createElement("div");
    button_container.className = "button-container";

    root_container.appendChild(button_container);

    button_container.appendChild(
      create_button({
        id: "start-button",
        text: "Start",
        action: toggle_tracking,
        className: "button-blue"
      })
    );

    return root_container;
  };
  return renderProject();
};
