import "./index.css";

const Button = ({ type, className, children, ...args }) => {
  return (
    <button
      className={`${className} ${type === "icon" ? "btnIcon" : "btn"}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
