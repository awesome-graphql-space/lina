import React from "react";

const LinaContext = React.createContext({
  core: null,
  mainTypes: null,
	inputTypes: null,
  enumTypes: null,
  navBarItems: [],
});

export const LinaProvider = LinaContext.Provider;
export const LinaConsumer = LinaContext.Consumer;