import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [ // Defining an array of animation types
  {
    name: 'Fade In', // Name of the animation
    duration: '0.5s', // Duration of the animation
    effect: 'opacity: 0; to: opacity: 1;', // CSS effect for the animation
  },
  {
    name: 'Slide Up', // Name of the animation
    duration: '0.7s', // Duration of the animation
    effect: 'transform: translateY(100%); to: transform: translateY(0);', // CSS effect for the animation
  },
  {
    name: 'Zoom In', // Name of the animation
    duration: '0.6s', // Duration of the animation
    effect: 'transform: scale(0); to: transform: scale(1);', // CSS effect for the animation
  },
  {
    name: 'Rotate', // Name of the animation
    duration: '0.8s', // Duration of the animation
    effect: 'transform: rotate(0deg); to: transform: rotate(360deg);', // CSS effect for the animation
  },
];

export default animationTypes; // Exporting the animationTypes array as default export