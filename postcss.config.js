import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';

export default {
  plugins: [
    postcssImport(),
    autoprefixer({
      grid: 'autoplace',
      flexbox: true,
    }),
  ],
};
