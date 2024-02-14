const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    //Nota: Esto es necesario para que se puedan compartir los estilos de tailwind entre el remote y el shell 
    //Tailwind's purge process also checks the source files of first-remote and second-remote for any used classes. 
    //This way, when the host application's CSS bundle is generated, it will include the necessary classes from the
    // remote applications, even if they are not direct dependencies.
    join(__dirname, '../auth/src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../sales/src/**/!(*.stories|*.spec).{ts,html}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
