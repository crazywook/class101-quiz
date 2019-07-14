module.exports = {
  test: {
    default: "TS_NODE_FILES=true mocha --project ./tsconfig.json -r ts-node/register './**/*.test{.ts,.js}'",
  }
}
