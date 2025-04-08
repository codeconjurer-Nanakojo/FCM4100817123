// change wall color to brown 
  AFRAME.registerComponent('brownify', {
    init: function () {
      this.el.addEventListener('model-loaded', () => {
        const mesh = this.el.getObject3D('mesh');
        if (!mesh) return;
        mesh.traverse(node => {
          if (node.isMesh) {
            node.material.color.set('SaddleBrown');
          }
        });
      });
    }
  });
document.querySelector('#wallModel').setAttribute('brownify', '');

// make the adult pool blue
  AFRAME.registerComponent('tint-blue', {
    init: function () {
      const el = this.el;
      el.addEventListener('model-loaded', () => {
        const mesh = el.getObject3D('mesh');
        if (!mesh) return;

        mesh.traverse((node) => {
          if (node.isMesh) {
            node.material.color.set('#4FC3F7');  // Light blue
            node.material.needsUpdate = true;
          }
        });
      });
    }
  });

  // Attach the component to the model
  document.querySelector('#poolModel').setAttribute('tint-blue', '');

