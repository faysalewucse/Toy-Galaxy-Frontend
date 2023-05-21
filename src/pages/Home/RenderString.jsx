import React from "react";

function RenderString({ htmlString }) {
  const divElement = document.createElement("div");
  divElement.innerHTML = htmlString;

  const childNodes = Array.from(divElement.childNodes);

  return (
    <div>
      {childNodes.map((node, index) => (
        <React.Fragment key={index}>
          {node.nodeType === Node.ELEMENT_NODE && (
            <div dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default RenderString;
