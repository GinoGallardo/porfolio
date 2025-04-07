const particleConfig = {
  "particles": {
    "number": {
      "value": 500,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00ff00"
    },
    "shape": {
      "type": "char",
      "character": {
        "value": ["0", "1"],
        "font": "Courier New",
        "style": "bold",
        "weight": "700",
        "fill": true
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 30,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "size_min": 20,
        "size_max": 50,
        "sync": false
      }
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    }
  },
  "retina_detect": true
}

export default particleConfig