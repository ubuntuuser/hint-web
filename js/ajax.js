/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var client;

$(document).ready(function() {
    // load index page when the page loads
    $("#contentdiv").load("sub/controlreachstacker.html");
    $("#watch").click(function(){
       $("#contentdiv").load("sub/watch.html"); 
    });
    $("#controlreachstacker").click(function() {
        // load home page on click
        $("#contentdiv").load("sub/controlreachstacker.html", function() {
            $("#fwdbutton").click(function() {
                alert("I got clicked");
                $.get("http://localhost:8000/DEMOService/reachstacker/move/fwd/" + $("#fwdvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#bwdbutton").click(function() {
                alert("I got clicked");
                $.get("http://localhost:8000/DEMOService/reachstacker/move/bwd/" + $("#bwdvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#upbutton").click(function() {
                alert("I got clicked");
                $.get("http://localhost:8000/DEMOService/reachstacker/arm/lift/" + $("#upvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#downbutton").click(function() {
                alert("I got clicked");
                $.get("http://localhost:8000/DEMOService/reachstacker/arm/lower/" + $("#downvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#extbutton").click(function() {
                alert("I got clicked");
                $.get("http://localhost:8000/DEMOService/reachstacker/arm/extend/" + $("#extvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#retbutton").click(function() {
                alert("I got clicked");
                $.get("http://localhost:8000/DEMOService/reachstacker/arm/retract/" + $("#retvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#turnbutton").click(function() {
                alert("I got clicked");
                $.get("http://localhost:8000/DEMOService/reachstacker/move/turn/" + $("#turnvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
        });
    });
    $("#controllkw").click(function() {
        // load home page on click
        $("#contentdiv").load("sub/controllkw.html", function() {
            $("#fwdbutton").click(function() {
                alert("LKW got clicked");
                $.get("http://localhost:8000/DEMOService/lkw/move/fwd/" + $("#fwdvalue").val(), function() {
                    alert("LKW was performed.");
                });
            });
            $("#bwdbutton").click(function() {
                alert("LKW got clicked");
                $.get("http://localhost:8000/DEMOService/lkw/move/bwd/" + $("#bwdvalue").val(), function() {
                    alert("LKW was performed.");
                });
            });
        });
    });

});

//Code for arrow keys
//document.defaultAction = true;
//
//function init() {
//	var x = document.getElementById('testForm').getElementsByTagName('input');
//	for (var i=0;i<x.length;i++) {
//		x[i].onclick = setEvents;
//		if (x[i].checked)
//			x[i].onclick();
//	}
//	writeroot = document.getElementById('writeroot');
//	document.getElementById('emptyWriteroot').onclick = function () {
//		writeroot.innerHTML = '';
//		return false;
//	}
//}
//
//function setEvents() {
//	if (this.id == 'default') {
//		document.defaultAction = !this.checked;
//		return;
//	}
//	var eventHandler = (this.checked) ? detectEvent : empty;
//	document['on'+this.id] = eventHandler;
//}
//
//function detectEvent(e) {
//	var evt = e || window.event;
//	writeData(evt.type);
//	writeData('keyCode is ' + evt.keyCode);
//	writeData('charCode is ' + evt.charCode);
//	writeData('');
//	return document.defaultAction;
//}
