export default {
  build: {
    rollupOptions: {
      input: {
        main: 'src/script.js',
      },
      output: {
        entryFileNames: 'script.js', // so we know the final name
      }
    },
    outDir: 'public', // output to public so your static HTML can find it
    emptyOutDir: false // don’t delete your public HTML/audio/etc.
  }
}
