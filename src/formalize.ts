class Formalize {
    data: any;

    constructor() {
        this.data = null;
    }

    setData(data: any = null): void {
        this.data = data || this.data;
    }

    getData(): any {
        return (this.data);
    }

    isEmpty(data: any = null): boolean {
        this.data = data || this.data;
        return (
            typeof this.data == 'undefined' || this.data.match(/^ *$/) !== null
        );
    }

    isNull(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (this.data === null) ? true : false
        );
    }

    isUndefined(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (this.data === 'undefined') ? true : false
        );
    }

    isLetter(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^[A-Za-z]+$/) ? true : false
        );
    }

    isNumber(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^[-+]?[0-9]+$/) ? true : false
        );
    }

    isLetterOrNumber(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^[0-9a-zA-Z]+$/) ? true : false
        );
    }

    isMail(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? true : false
        );
    }

    isPhone(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^\d{10}$/) ? true : false
        );
    }

    isIP(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/).test(this.data) ? true : false
        );
    }

    isCreditcard(data: any = null): boolean {
        this.data = data || this.data;
        // Eklenecek.
        return (false);
    }

    isURL(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/^(http|https|ftp?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/).test(this.data) ? true : false
        );
    }

    isHTML(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/(<([^>]+)>)/i).test(this.data) ? true : false
        );
    }

    isImage(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/\.(jpeg|jpg|gif|png)$/) ? true : false
        );
    }

    isColor(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test(this.data) ? true : false
        );
    }

    // 00:00 - 23:59
    isTime(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/).test(this.data) ? true : false
        );
    }

    // dd/mm/yyyy veya dd.mm.yyyy
    isDate(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/) ? true : false
        );
    }
}
