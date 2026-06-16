@keyframes mysteryFloat {
  0% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-40px) rotate(10deg);
    opacity: 0.35;
  }
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.1;
  }
}

@keyframes glowText {
  0% {
    text-shadow: 0 0 15px #00ff9d;
  }
  50% {
    text-shadow:
      0 0 40px #00ff9d,
      0 0 80px #00d9ff;
  }
  100% {
    text-shadow: 0 0 15px #00ff9d;
  }
}
