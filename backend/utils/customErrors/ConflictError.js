module.exports = class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.code = 409;
  }
};
