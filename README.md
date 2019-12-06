## simple wx adapter for [vuex-along]( https://github.com/boenfu/vuex-along )

```javascript
import createVuexAlong from "vuex-along";
import wxadapter from "vuex-along-wx-adapter";

const store = new Vuex.Store({
  plugins: [
    createVuexAlong({
      adapterOptions: wxadapter(),
    }),
  ],
});
```

## License

- [MIT](https://opensource.org/licenses/MIT)
