const regexInputModule = (function () {
    function checkRegexOfUserLoginPhone(textInput, regex) {
        const LENGTH_VALID_PHONE = 11;
        const MESSAGE_LENGTH_VALID_PHONE = "số điện thoại chỉ từ 10-11 số";
        const INVALID_PHONE = "chỉ được nhập số";
       
        if (textInput.match(regex)) return INVALID_PHONE;
        if (textInput.length > LENGTH_VALID_PHONE) return MESSAGE_LENGTH_VALID_PHONE;
        return "";
    }

    function checkRegexOfUserPassword(textInput, regex) {
        const LENGTH_VALID_PASSWORD = 8;
        const MESSAGE_LENGTH_VALID_PASSWORD = "mật khẩu phải hơn 8 ký tự";

        if (textInput.length < LENGTH_VALID_PASSWORD && textInput.length > 0)
            return MESSAGE_LENGTH_VALID_PASSWORD;
        return "";
    }

    return {
        checkRegexOfUserLoginPhone: function (name, regex) {
            return checkRegexOfUserLoginPhone(name, regex);
        },
        checkRegexOfUserPassword: function (password, regex) {
            return checkRegexOfUserPassword(password, regex);
        },
    };
})();

export default regexInputModule;
