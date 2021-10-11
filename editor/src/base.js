

export class HttpRequest extends XMLHttpRequest {
    constructor() {
        super();
    }
    send() {
        return new Promise((resolve, reject) => {
            this.addEventListener('load', () => {
                if (this.status >= 200 && this.status < 300) {
                    resolve(this.responseText);
                } else {
                    console.warn(this.responseText);
                    reject();
                }
            });
            XMLHttpRequest.prototype.send.call(this);
        });
    }
}