module.exports = {
  schemas: {
    myPrimaryBackend: {
      schema: "schema.json", // if not defined the an introspection query will be run
      endpoint: "http://localhost:3000/graphql", // if not defined the schema will be downloaded from Apollo Engine
      engineKey: "my-engine-key" // use this key when connecting to Apollo Engine
    }
  },
}
