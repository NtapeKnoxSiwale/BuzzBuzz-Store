import React from "react";

const AppWrap = (Compoent, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__contianer ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Compoent />
        </div>
      </div>
    );
  };

export default AppWrap;
