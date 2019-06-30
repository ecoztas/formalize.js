var Formalize = /** @class */ (function () {
    function Formalize() {
        this.data = null;
    }
    Formalize.prototype.set_data = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
    };
    Formalize.prototype.get_data = function () {
        return (this.data);
    };
    Formalize.prototype.is_empty = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return (typeof this.data == 'undefined' || this.data.match(/^ *$/) !== null);
    };
    Formalize.prototype.is_null = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return ((this.data === null) ? true : false);
    };
    Formalize.prototype.is_undefined = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return ((this.data === 'undefined') ? true : false);
    };
    Formalize.prototype.is_letter = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return (this.data.match(/^[A-Za-z]+$/) ? true : false);
    };
    Formalize.prototype.is_number = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return (this.data.match(/^[-+]?[0-9]+$/) ? true : false);
    };
    Formalize.prototype.is_letter_number = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return (this.data.match(/^[0-9a-zA-Z]+$/) ? true : false);
    };
    Formalize.prototype.is_mail = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return (this.data.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? true : false);
    };
    Formalize.prototype.is_phone = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return (this.data.match(/^\d{10}$/) ? true : false);
    };
    Formalize.prototype.is_ip = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return ((/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/).test(this.data) ? true : false);
    };
    Formalize.prototype.is_creditcard = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        // Eklenecek.
        return (false);
    };
    Formalize.prototype.is_url = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return ((/^(http|https|ftp?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/).test(this.data) ? true : false);
    };
    Formalize.prototype.is_html = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return ((/(<([^>]+)>)/i).test(this.data) ? true : false);
    };
    Formalize.prototype.is_image = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return (this.data.match(/\.(jpeg|jpg|gif|png)$/) ? true : false);
    };
    Formalize.prototype.is_color = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return ((/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test(this.data) ? true : false);
    };
    // 00:00 - 23:59
    Formalize.prototype.is_time = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return ((/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/).test(this.data) ? true : false);
    };
    // dd/mm/yyyy veya dd.mm.yyyy
    Formalize.prototype.is_date = function (data) {
        if (data === void 0) { data = null; }
        this.data = data || this.data;
        return (this.data.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/) ? true : false);
    };
    return Formalize;
}());
