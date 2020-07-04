new Glide(".images",{
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 40,
    breakpoints: {
      1200:{
        perView: 2
      },
      800:{
        perView: 1
      }
    }
  }).mount();