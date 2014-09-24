/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var client;

$(document).ready(function() {
    // load index page when the page loads
    $host="10.0.0.2";
    $("#contentdiv").load("sub/controlreachstacker.html");
    $("#watch").click(function(){
       $("#contentdiv").load("sub/watch.html"); 
    });
    $("#controlcrane").click(function() {
        $("#contentdiv").load("sub/controlgantrycrane.html", function() {
            $("#getFromTrain").click(function() {
                $.get("http://" + $host + ":8000/DEMOService/gantrycrane/get/train", function() {
                    alert("Load was performed.");
                });
            });
            $("#putOnTrain").click(function () {
                $.get("http://" + $host + ":8000/DEMOService/gantrycrane/put/train", function() {
                    alert("Load was performed.");
                });
            });
            $("#getFromShip").click(function() {
                $.get("http://" + $host + ":8000/DEMOService/gantrycrane/get/ship", function() {
                    alert("Load was performed.");
                });
            });
            $("#putOnShip").click(function () {
                $.get("http://" + $host + ":8000/DEMOService/gantrycrane/put/ship", function() {
                    alert("Load was performed.");
                });
            });
            $("#getFromStorage").click(function() {
                $.get("http://" + $host + ":8000/DEMOService/gantrycrane/get/storage", function() {
                    alert("Load was performed.");
                });
            });
            $("#putOnStorage").click(function () {
                $.get("http://" + $host + ":8000/DEMOService/gantrycrane/put/storage", function() {
                    alert("Load was performed.");
                });
            });
            $("#reset").click(function () {
                $.get("http://" + $host + ":8000/DEMOService/gantrycrane/reset", function() {
                    alert("Load was performed.");
                });
            });
        });
    });
    $("#controlreachstacker").click(function() {
        // load home page on click
        $("#contentdiv").load("sub/controlreachstacker.html", function() {
            /*$("#fwdbutton").click(function() {
                alert("I got clicked");
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/move/fwd/" + $("#fwdvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#bwdbutton").click(function() {
                alert("I got clicked");
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/move/bwd/" + $("#bwdvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#upbutton").click(function() {
                alert("I got clicked");
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/arm/lift/" + $("#upvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#downbutton").click(function() {
                alert("I got clicked");
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/arm/lower/" + $("#downvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#extbutton").click(function() {
                alert("I got clicked");
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/arm/extend/" + $("#extvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#retbutton").click(function() {
                alert("I got clicked");
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/arm/retract/" + $("#retvalue").val(), function() {
                    alert("Load was performed.");
                });
            });
            $("#turnbutton").click(function() {
                alert("I got clicked");
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/move/turn/" + $("#turnvalue").val(), function() {
                    alert("Load was performed.");
                });
            });*/
            $("#getFromTruck").click(function() {
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/get/truck", function() {
                    alert("Load was performed.");
                });
            });
            $("#putOnTruck").click(function () {
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/put/truck", function() {
                    alert("Load was performed.");
                });
            });
            $("#getFromStorage").click(function() {
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/get/storage", function() {
                    alert("Load was performed.");
                });
            });
            $("#putOnStorage").click(function () {
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/put/storage", function() {
                    alert("Load was performed.");
                });
            });
            $("#reset").click(function () {
                $.get("http://" + $host + ":8000/DEMOService/reachstacker/reset", function() {
                    alert("Load was performed.");
                });
            });
        });
    });
    $("#controltruck").click(function() {
        // load home page on click
        $("#contentdiv").load("sub/controltruck.html", function() {
            $("#fwdbutton").click(function() {
                alert("LKW got clicked");
                $.get("http://" + $host + ":8000/DEMOService/truck/move/fwd/" + $("#fwdvalue").val(), function() {
                    alert("LKW was performed.");
                });
            });
            $("#bwdbutton").click(function() {
                alert("LKW got clicked");
                $.get("http://" + $host + ":8000/DEMOService/truck/move/bwd/" + $("#bwdvalue").val(), function() {
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
