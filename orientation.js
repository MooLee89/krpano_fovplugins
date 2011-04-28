/*
orientation plugin for KRPanoJS and iOS4.2+
by Aldo Hoeben / fieldOfView.com
	
http://fieldofview.github.com/krpano_fovplugins/orientation/plugin.html
This software can be used free of charge and the source code is available under a Creative Commons Attribution license:
	http://creativecommons.org/licenses/by/3.0/	
*/

var krpanoplugin=function(){function g(){c=window.orientation;d=Math.abs(c)==90;f=!d;a.call(e)}var a=null,b=null,e="",c=window.orientation===void 0?0:window.orientation,d=Math.abs(c)==90,f=!d;this.registerplugin=function(h,j,i){a=h;b=i;a.version<"1.0.8.14"||a.build<"2011-03-30"?a.trace(3,"orientation plugin - too old krpano version (min. 1.0.8.14)"):(window.addEventListener("orientationchange",g,!0),b.registerattribute("orientation",c,function(){},function(){return c}),b.registerattribute("landscape",
d,function(){},function(){return d}),b.registerattribute("portrait",f,function(){},function(){return f}),b.registerattribute("onorientationchange",e,function(a){e=a},function(){return e}))};this.unloadplugin=function(){window.removeEventListener("orientationchange",g);a=b=null}};
