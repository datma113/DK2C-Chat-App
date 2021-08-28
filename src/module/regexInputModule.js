const regexInputModule = (function () {
    const MESSAGE_WHEN_EMPTY = 'Không được rỗng'
    function isEmty(textInput) {
        return textInput.length === 0 ? true : false
    }

    function checkRegexOfUserPhone(textInput, regex) {
        const LENGTH_VALID_PHONE = [10, 11];
        const MESSAGE_LENGTH_VALID_PHONE = "Số điện thoại chỉ từ 10-11 số";
        const MESSAGE_INVALID_PHONE = "Chỉ được nhập số";
        
        if(isEmty(textInput)) return MESSAGE_WHEN_EMPTY
        if (textInput.match(regex)) return MESSAGE_INVALID_PHONE;
        if (!LENGTH_VALID_PHONE.includes(textInput.length))
            return MESSAGE_LENGTH_VALID_PHONE;
        return "";
    }

    function checkRegexOfUserPassword(textInput, regex) {
        const LENGTH_VALID_PASSWORD = 8;
        const MESSAGE_LENGTH_VALID_PASSWORD = "Mật khẩu phải hơn 8 ký tự";
        
        if(isEmty(textInput)) return MESSAGE_WHEN_EMPTY
        if (textInput.length < LENGTH_VALID_PASSWORD)
            return MESSAGE_LENGTH_VALID_PASSWORD;
        return "";
    }

    function checkRegexOfUserFullname(textInput, regex) {
        const LENGTH_VALID_FULLNAME = 50;
        const MESSAGE_LENGTH_VALID_FULLNAME = "Không quá 50 ký tự";

        if(isEmty(textInput)) return MESSAGE_WHEN_EMPTY
        if (textInput.length > LENGTH_VALID_FULLNAME)
            return MESSAGE_LENGTH_VALID_FULLNAME;
        return "";
    }

    function checkRegexOfUserEmail(textInput, regex) {
        const MESSAGE_INVALID_EMAIL = "Email không  hợp lệ";

        if(isEmty(textInput)) return MESSAGE_WHEN_EMPTY
        if (!textInput.match(regex)) return MESSAGE_INVALID_EMAIL;
        return "";
    }

    return {
        checkRegexOfUserPhone: function (name, regex) {
            return checkRegexOfUserPhone(name, regex);
        },
        checkRegexOfUserPassword: function (password, regex) {
            return checkRegexOfUserPassword(password, regex);
        },
        checkRegexOfUserFullname: function (name, regex) {
            return checkRegexOfUserFullname(name, regex);
        },
        checkRegexOfUserEmail: function (email, regex) {
            return checkRegexOfUserEmail(email, regex);
        },
    };
})();

export default regexInputModule;
