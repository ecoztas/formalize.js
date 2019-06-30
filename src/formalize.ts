class Formalize {
    data: any;

    constructor() {
        this.data = null;
    }

    set_data(data: any = null): void {
        this.data = data || this.data;
    }

    get_data(): any {
        return (this.data);
    }

    is_empty(data: any = null): boolean {
        this.data = data || this.data;
        return (
            typeof this.data == 'undefined' || this.data.match(/^ *$/) !== null
        );
    }

    is_null(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (this.data === null) ? true : false
        );
    }

    is_undefined(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (this.data === 'undefined') ? true : false
        );
    }

    is_letter(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^[A-Za-z]+$/) ? true : false
        );
    }

    is_number(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^[-+]?[0-9]+$/) ? true : false
        );
    }

    is_letter_number(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^[0-9a-zA-Z]+$/) ? true : false
        );
    }

    is_mail(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? true : false
        );
    }

    is_phone(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^\d{10}$/) ? true : false
        );
    }

    is_ip(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/).test(this.data) ? true : false
        );
    }

    is_creditcard(data: any = null): boolean {
        this.data = data || this.data;
        // Eklenecek.
        return (false);
    }

    is_url(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/^(http|https|ftp?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/).test(this.data) ? true : false
        );
    }

    is_html(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/(<([^>]+)>)/i).test(this.data) ? true : false
        );
    }

    is_image(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/\.(jpeg|jpg|gif|png)$/) ? true : false
        );
    }

    is_color(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test(this.data) ? true : false
        );
    }

    // 00:00 - 23:59
    is_time(data: any = null): boolean {
        this.data = data || this.data;
        return (
            (/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/).test(this.data) ? true : false
        );
    }

    // dd/mm/yyyy veya dd.mm.yyyy
    is_date(data: any = null): boolean {
        this.data = data || this.data;
        return (
            this.data.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/) ? true : false
        );
    }
}
