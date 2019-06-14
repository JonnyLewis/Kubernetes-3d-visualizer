function loadingresses() { //http://localhost:8001/apis/extensions/v1beta1/namespaces/dev/ingresses/
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/ingresses/", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    var response = JSON.parse(xhttp.responseText);
    //console.log(response);
    var response1 = jsonPath(response , "$.items[*].metadata.name");
    var response2 = jsonPath(response , "$.items[*].spec.rules[0].host");
    var response3 = jsonPath(response , " ");
    var response4 = jsonPath(response , " ");
    var response5 = jsonPath(response , " ");
    var response6 = jsonPath(response , " ");
    var response7 = jsonPath(response , " ");
    var response8 = jsonPath(response , " ");
    console.log(response7);

    var arrayLength = response1.length;
    var j = 0;
    for (var i = 0; i < arrayLength; i++) {
        ingressinfo[j] = response1[i];
        ingressinfo[j+1] = "-Url: " + response2[i];
        ingressinfo[j+2] = "rgba(56, 124, 52,0.2)"; //background of ingressinfos

        if (i < 6) {
          ingressinfo[j+3] = 5 + (i*3);
          ingressinfo[j+4] = 7 ; //rij links rechts
        } else if (i < 12) {
          ingressinfo[j+3] = 5 + ((i-6)*3);
          ingressinfo[j+4] = 8 ; //rij links rechts
        } else {
          ingressinfo[j+3] = 5 + ((i-12)*3);
          ingressinfo[j+4] = 9 ; //rij links rechts
        }


        ingressinfo[j+5] = "-Ready: " + response4[i];
        ingressinfo[j+6] = "-Image: " + response5[i];
        //ingressinfo[j+7] = "-Started at: " + response6[i];
        ingressinfo[j+7] = " ";
        ingressinfo[j+8] = response7[i];
        j = j + 9;
    }
    console.log(ingressinfo);
  }
};


    for ( var i = 0; i < ingressinfo.length; i += 9 ) {

        var element = document.createElement( 'div' );
        element.className = 'element';
        element.style.backgroundColor = ingressinfo[ i + 2 ];




        element.addEventListener( 'click', function (event) {

             //detail9.innerHTML = 'Pod starttime     : ' + jsonPath(response , "$.status.startTime");
             //detail12.innerHTML = jsonPath(response , "$.metadata.selfLink");
             detail10.innerHTML = 'Open spec';
             detail11.innerHTML = 'Delete pod';
             detail13.innerHTML = '';
             detail14.innerHTML = '';
        }, false );

        element.addEventListener( 'contextmenu', function (event) {

        }, false );

        var number = document.createElement( 'div' );
        number.textContent = ingressinfo[ i + 5 ];
        if ( number.textContent == "-Ready: false") { number.className = 'numberbad';};
        if ( number.textContent == "-Ready: ") { number.className = 'numbergood';};
        if ( number.textContent == "-Ready: true") { number.className = 'numberbest';}
        element.appendChild( number );


        var symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        symbol.textContent = ingressinfo[ i ];
        element.appendChild( symbol );

        var details = document.createElement( 'div' );
        details.className = 'restarts';
        var ingressname = document.createElement('ingressname'); // is a node

        details.appendChild(ingressname)

        var myingressrow = document.createElement('myingressrow'); // is a node
        myingressrow.align = ingressinfo[ i + 3 ];
        details.appendChild(myingressrow)

        var myingresscolumn = document.createElement('myingresscolumn'); // is a node
        myingresscolumn.align = ingressinfo[ i + 4 ];
        details.appendChild(myingresscolumn)

        var imageid = document.createElement('imageid'); // is a node
        imageid.align = ingressinfo[ i + 6 ];
        details.appendChild(imageid)

        var startedat = document.createElement('startedat'); // is a node
        startedat.align = ingressinfo[ i + 7 ];
        details.appendChild(startedat)

        var xpos = document.createElement('xpos'); // is a node
        xpos.align = ( ingressinfo[ i + 3 ] * 140 ) - 1230;
        details.appendChild(xpos)

        var ingressreplicaname = document.createElement('ingressreplicaname'); // is a node
        ingressreplicaname.align = ingressinfo[ i + 8 ];
        details.appendChild(ingressreplicaname)

        details.className = 'details';
        details.innerHTML = ingressinfo[ i + 1 ];
        details.align = ingressinfo[ i + 6 ];
        details.title = ingressinfo[ i + 7 ];
        details.id = ingressinfo[ i + 8 ];
        details.tabIndex = ( ingressinfo[ i + 3 ] * 140 ) - 1230;
        element.appendChild( details );

        var deletebtn = document.createElement( 'div' );
        deletebtn.textContent = "Select";
        deletebtn.className = 'delete';
        element.appendChild( deletebtn );

        var ingressstatus = document.createElement( 'div' );
        ingressstatus.textContent = ingressinfo[ i + 7 ];
        ingressstatus.className = 'ingressbad';
        if ( ingressstatus.textContent == "-ingressstatus: Running") { ingressstatus.className = 'ingressgood';};
        element.appendChild( ingressstatus );

        var object = new THREE.CSS3DObject( element );
        object.position.x = ( ingressinfo[ i + 3 ] * 140 ) - 1330;
        object.position.y = - ( ingressinfo[ i + 4 ] * 180 ) + 630;

        scene.add( object );

        objects.push( object );



    }

}