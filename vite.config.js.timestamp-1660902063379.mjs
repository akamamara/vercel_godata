// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
var config = {
  plugins: [sveltekit()],
  optimizeDeps: { include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"] }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcnVuL21lZGlhL2FrYW1hbWFyYS9EQVRBL1dvcmtzL1Byb2plY3Qvd2ViLWdvZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3J1bi9tZWRpYS9ha2FtYW1hcmEvREFUQS9Xb3Jrcy9Qcm9qZWN0L3dlYi1nb2RhdGEvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3J1bi9tZWRpYS9ha2FtYW1hcmEvREFUQS9Xb3Jrcy9Qcm9qZWN0L3dlYi1nb2RhdGEvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBwbHVnaW5zOiBbc3ZlbHRla2l0KCldLFxuICAgIG9wdGltaXplRGVwczogeyBpbmNsdWRlOiBbJ2xvZGFzaC5nZXQnLCAnbG9kYXNoLmlzZXF1YWwnLCAnbG9kYXNoLmNsb25lZGVlcCddIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXdVLFNBQVMsaUJBQWlCO0FBSWxXLElBQU0sU0FBUztBQUFBLEVBQ1gsU0FBUyxDQUFDLFVBQVUsQ0FBQztBQUFBLEVBQ3JCLGNBQWMsRUFBRSxTQUFTLENBQUMsY0FBYyxrQkFBa0Isa0JBQWtCLEVBQUU7QUFDbEY7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=