var WXLocalAdapter = /** @class */ (function () {
    function WXLocalAdapter(source) {
        this.source = source;
    }
    WXLocalAdapter.prototype.read = function () {
        return wx.getStorageSync(this.source) || {};
    };
    WXLocalAdapter.prototype.write = function (data) {
        wx.setStorage({
            key: this.source,
            data: data,
        });
    };
    return WXLocalAdapter;
}());
export { WXLocalAdapter };
var WXSessionAdapter = /** @class */ (function () {
    function WXSessionAdapter(_source) {
        this._source = _source;
    }
    WXSessionAdapter.prototype.read = function () {
        return {};
    };
    WXSessionAdapter.prototype.write = function () { };
    return WXSessionAdapter;
}());
export { WXSessionAdapter };
