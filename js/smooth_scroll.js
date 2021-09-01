$(function () {
  // Get clickable link
  $("nav li a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault()

      // Store link's hash value into variable
      const hash = this.hash
      // console.log(hash)

      // Animate html & body to the hash value position
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top // - 100 if you wish
        },
        800
      )
    }
  })
})
