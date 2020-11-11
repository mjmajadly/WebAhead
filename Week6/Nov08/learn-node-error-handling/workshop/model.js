function getPosts() {
  return new Promise((resolve, reject) => {
    const error = new Error("Retrieving posts failed");
    reject(error);
  });
}

module.exports = { getPosts };
