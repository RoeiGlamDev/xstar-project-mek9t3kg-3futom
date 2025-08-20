import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientBackgroundContainer = styled.div`
  height: 100vh; // Full height
  width: 100vw; // Full width
  background: linear-gradient(270deg, #ff7f50, #fff); // Orange to white gradient
  background-size: 400% 400%; // For smooth animation
  animation: ${gradientAnimation} 15s ease infinite; // Animation duration and easing
  position: absolute; // Positioning
  top: 0; // Align to top
  left: 0; // Align to left
  z-index: -1; // Behind other components
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />; // Render gradient background
};

export default GradientBackground;