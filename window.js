<!DOCTYPE html>

<html >

<head>
<meta http-equiv="x-ua-compatible" content="ie=9" >
<meta http-equiv="x-ua-compatible" content="ie=8" >
<meta http-equiv="x-ua-compatible" content="ie=7" >
<title>Hangman</title>
<HTA:APPLICATION
  APPLICATIONNAME="My HTML application"
  ID="hangman_app"
  VERSION="1.0"
  INNERBORDER="no"  CAPTION="no"
  SYSMENU="no"
  MAXIMIZEBUTTON="no"
  MINIMIZEBUTTON="no"
  ICON="icon2433.ico"
  SCROLL="no"
  SCROLLFLAT="yes"
  SINGLEINSTANCE="yes"
  WINDOWSTATE="maximize"
  CONTEXTMENU="no"
  NAVIGABLE="yes"/>


<link rel="stylesheet" href="app.css" />
 
        
		<!-- This is a special version of jQuery with RequireJS built-in -->
		    <script data-main="scripts/main" src="scripts/require-jquery.js"></script>
<!--[if lte IE 7]><script src="lte-ie7.js"></script><![endif]-->


	

    </head>
	
    <body class="body">

	<div class="hangman_image" >	
	
	</div>
	<div class="title" >	
  <span aria-hidden="true" class="icon-arrow-left"></span>	
 <a class="hangmanclass"><img src="images.jpg"></img> <h1 class="hangman">new Hangman</h1></a>
  
 <div class="mainpuzzle">

    <img src="fonts/loading.gif"/>


</div>	
	<div class="attempts"></div>
<div class="abc" >

<table align="center" >
<tr>	
	<td class="metrobuttons" id="q">Q</td>
	<td class="metrobuttons" id="w">W</td>
	<td class="metrobuttons" id="e">E</td>
	<td class="metrobuttons" id="r">R</td>
	<td class="metrobuttons" id="t">T</td>
	<td class="metrobuttons" id="y">Y</td>
	<td class="metrobuttons" id="u">U</td>
	<td class="metrobuttons" id="i">I</td>
	<td class="metrobuttons" id="o">O</td>
	<td class="metrobuttons" id="p">P</td>
</tr>

<tr>
	<td class="metrobuttons" id="a">A</td>
	<td class="metrobuttons" id="s">S</td>
	<td class="metrobuttons" id="d">D</td>
	<td class="metrobuttons" id="f">F</td>
	<td class="metrobuttons" id="g">G</td>
	<td class="metrobuttons" id="h">H</td>
	<td class="metrobuttons" id="j">J</td>
	<td class="metrobuttons" id="k">K</td>
	<td class="metrobuttons" id="l">L</td>
</tr>

<tr>
	<td class="metrobuttons" id="z">Z</td>
	<td class="metrobuttons" id="x">X</td>
	<td class="metrobuttons" id="c">C</td>
	<td class="metrobuttons" id="v">V</td>
	<td class="metrobuttons" id="b">B</td>
	<td class="metrobuttons" id="n">N</td>
	<td class="metrobuttons" id="m">M</td>
</tr>

</table>


	
 </body>
</html>
