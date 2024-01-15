
URLSearchParams.prototype.appendIfExists = function (key, value) {
    if (value !== null && value !== undefined) {
        this.append(key, value)
    }
};