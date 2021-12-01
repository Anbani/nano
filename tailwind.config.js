module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  variants: {
    // The 'active' variant will be generated in addition to the defaults
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      shadow: ['active'],
      borderRadius: ['hover']
    }
  },
  theme: {
  },
  plugins: [
  ],
  experimental: {
    applyComplexClasses: true,
  },
};
