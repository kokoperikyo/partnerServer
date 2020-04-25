self.addEventListener('message', (message) => {
  setInterval(() => {
    console.log(message.data);

  }, 3000);
});