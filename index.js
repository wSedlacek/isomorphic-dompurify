function e(e){return e&&e.default||e}module.exports=global.DOMPurify=global.DOMPurify||("undefined"==typeof process?e(require("dompurify")):function(){const r=e(require("dompurify")),{JSDOM:u}=e(require("jsdom")),{window:o}=new u("<!DOCTYPE html>");return r(o)}());