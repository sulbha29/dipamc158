AFRAME.registerComponent("cursor-events", {
  schema: {
    selectedItemId: { default: "", type: "string" }
  },
  init: function() {
    this.handleMouseEnter()
  },
  handlePlacesState: function() {
    const id = this.el.getAttribute("id")
    console.log(id)
    const placesId = ["taj_mahal", "budapest", "new_york_city", "eiffel_tower"]
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container")
      placeContainer.setAttribute("cursor-events", { selectedItemId: id })
      this.el.setAttribute("material", { color: "green", opacity: 1 })
    }
    
  },
  handleMouseEnter:function() {
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesState()
    })
  }
})