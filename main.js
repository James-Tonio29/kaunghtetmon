

let scene,camera,renderer,cube;
function init(){
     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
        );
     renderer = new THREE.WebGLRenderer({antialias:true});
    
    renderer.setSize(window.innerWidth,window.innerHeight);
    // hlight = new THREE.AmbientLight(0x404040,100);
    // scene.background = new THREE.Color(0xdddddd);

    document.body.appendChild(renderer.domElement);
    //  var loader = new ObjectLoader();
    //  loader.load(
    //      'mp7forfbx.obj',
    //      function(object){
    //          scene.add(object);
    //      }
    //  );
    const geometry = new THREE.BoxGeometry(2,2,2);
    const material = new THREE.MeshBasicMaterial({color:0x0000ff});
    cube = new THREE.Mesh(geometry , material);
    scene.add(cube);
    camera.position.z = 5;
}

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
function onWindowResize(){
    camera.aspect = window.innerWidth  / window.innerHeight;
    camera.updateProjectionMatrix(); 
    renderer.setSize(window.innerWidth,window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
init();
animate();