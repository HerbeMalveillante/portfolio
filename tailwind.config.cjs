const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily:{
        'ubuntu' : ['Ubuntu', 'sans-serif'],
      }
    },
  },

  plugins: [],
};

module.exports = config;
