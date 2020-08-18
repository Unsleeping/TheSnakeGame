class Settings {
    init(params) {
        let defaultParams = {
            rowsCount: 20,
            colsCount: 20,
            speed: 4,
            winLength: 5,
        };
        
        Object.assign(defaultParams, params);

        if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 50) {
            throw new Error('rowsCount should be between 10 and 50');
        }
        this.rowsCount = defaultParams.rowsCount;

        if (defaultParams.colsCount < 10 || defaultParams.colsCount > 50) {
            throw new Error('colsCount should be between 10 and 50');
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.speed < 1 || defaultParams.speed > 10) {
            throw new Error('speed should be between 1 and 10');
        }
        this.speed = defaultParams.speed;

        if (defaultParams.winLength < 2 || defaultParams.winLength > 50) {
            throw new Error('winLength should be between 1 and 10');
        }
        this.winLength = defaultParams.winLength;
    }
}