let blog = {
  name: 'Tapas',
  address: 'freecodecamp',
    message: function () {
    console.log(`${this.name} blogs on ${this.address}`);
  },

};

blog.message();
