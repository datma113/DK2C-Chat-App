let NewMessaage = (function () {
    let instance = null;

    function initial() {
        return {
            newMessageRealTime: 0,
            increaseNewMesasgeByOne: function() {
                this.newMessageRealTime++;
            },
            getNewMessageRealTime() {
                return this.newMessageRealTime;
            },
            resetNewMessageRealTime() {
                 this.newMessageRealTime = 0
            }
        };
    }

    return {
        getInsance() {
            if (!instance) instance = initial();
            return instance;
        },
    };
})();

export default NewMessaage
