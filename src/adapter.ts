export class WXLocalAdapter<TSchema = any> {
  constructor(private source: string) {}

  read(): TSchema {
    return wx.getStorageSync(this.source) || {};
  }

  write(data: TSchema) {
    wx.setStorage({
      key: this.source,
      data: data,
    });
  }
}

export class WXSessionAdapter {
  constructor(private _source: string) {}

  read() {
    return {};
  }

  write() {}
}
