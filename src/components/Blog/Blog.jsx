import React from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();

  const options = {
    orientation: "landscape",
    unit: "in",
    format: [15, 17],
  };

  return (
    <div className="my-10">
      <div>
        <div className="text-center mb-10">
          <Pdf
            targetRef={ref}
            filename="code-example.pdf"
            options={options}
            x={1}
            y={1}
            scale={1}
          >
            {({ toPdf }) => (
              <button
                className="btn btn-primary text-white text-center
            "
                onClick={toPdf}
              >
                Generate Pdf
              </button>
            )}
          </Pdf>
        </div>
        <div className="lg:mx-10 mx-4" ref={ref}>
          <div>
            <h1 className="font-bold">
              Q: Tell us the differences between uncontrolled and controlled
              components.
            </h1>
            <p>
              A: Controlled component from data is handle by a React component.
              controlled components refer to component that have state and
              behavior controlled by the parent node. Uncontrolled component
              form data is handle by DOM. uncontrolled component refer to
              component that manage own state internally.
            </p>
          </div>
          <div>
            <h1 className="font-bold">
              Q: How to validate React props using PropTypes?
            </h1>
            <p>
              A: 1. any: The prop can be of any data type. <br /> 2. bool: prop
              should be a Boolean. <br /> 3. number: prop should be number{" "}
              <br /> 4. string: prop should be string. <br /> 5. func: prop
              should be function. <br /> 6. array: prop should be array. 7.
              object: prop should be object.
            </p>
          </div>
          <div>
            <h1 className="font-bold">
              Q: Tell us the difference between nodejs and express js.
            </h1>
            <p>
              A: Node js is platform for building the i/o application which are
              server-side event-driven and made using javascript. Express js is
              a minimal and flexible node js web application framework.
              providing a robust set of features for building single and multi
              page, hybrid web application.
            </p>
          </div>
          <div>
            <h1 className="font-bold">
              Q: Tell us the difference between nodejs and express js.
            </h1>
            <p>
              A: Node js is platform for building the i/o application which are
              server-side event-driven and made using javascript. Express js is
              a minimal and flexible node js web application framework.
              providing a robust set of features for building single and multi
              page, hybrid web application.
            </p>
          </div>
          <div>
            <h1 className="font-bold">
              Q: What is a custom hook, and why will you create a custom hook?
            </h1>
            <p>
              A: React custom hooks is a function that start with the word "use"
              and may call other hooks. custom hook are an essential tool that
              let you add special, unique functionality to your react
              applications.Hooks are reusable functions.When you have component
              logic that needs to be used by multiple components. we can extract
              that logic to a custom hook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
