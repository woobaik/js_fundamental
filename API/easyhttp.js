function easyHttp() {
    this.http = new XMLHttpRequest()
}

easyHttp.prototype.get = function(url, callback) {
    this.http.open('GET', url, true)
    const that = this
    this.http.onload = function() {
        if (that.http.status === 200) {
            callback(null,http.responseText)
        } else {
            cabllback('Error:' + that.http.status)
        }
    }
    this.http.send()
    }

    
