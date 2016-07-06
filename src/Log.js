class Log {
    constructor() {
        this.records = [];
    }

    record(obj) {
        console.log(obj);
        this.records.push(obj);
    }

    get() {
        return this.records;
    }
}

export default Log;
