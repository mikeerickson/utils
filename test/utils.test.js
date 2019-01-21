const utils = require("../utils");

describe("Utils", () => {
  it("show default timestamp", done => {
    let ts = utils.timestamp();
    console.log(ts);
    done();
  });
});
