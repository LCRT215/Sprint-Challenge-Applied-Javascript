class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    // console.log(this.tabElement);
    // this.tabData = document.querySelector(
    //   `.tab[data-tab="${this.tabElement.dataset.tab}"]`
    // );
    // assign this.tabElement to the tabElement DOM reference
    this.tabData = this.tabElement.dataset.tab;
    console.log(this.tabData);
    console.dir(this.tabElement);
    // this.tabElement = document.querySelector(
    //   `.tab[data-tab="${this.tabData}"]`
    // );

    if (this.tabData === "all") {
      this.cards = document.querySelectorAll(`.card`);
    } else {
      this.cards = document.querySelectorAll(
        `.card[data-tab='${this.tabData}']`
      );
    }
    // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = ;
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:
    //Delete this comment block when you work on the if statement
    // Check to see if this.tabData is equal to 'all'
    // If `all` is true, select all cards regardless of their data attribute values
    // else if `all` is false, only select the cards with matching this.tabData values

    //console.log(document.querySelector(`.card`));
    //console.log(this.tabData);

    // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class.

    // Add a click event that invokes this.selectTab

    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    //this.tabCard = ;

    this.tabElement.addEventListener("click", () => this.selectTab());
  }

  selectTab() {
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => {
      tab.classList.remove("active-tab");
    });
    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => {
      //card.classList.remove("display-flex");
      //card.classList.add("hidden");
      card.style.display = "none";
    });
    //console.log(cards);
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab");
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => {
      // console.log(card);
      // console.dir(card);
      card.selectCard();
    });
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
    // console.dir(this.cardElement);
  }
  selectCard() {
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
    //this.cardElement.classList.remove("hidden");
    //this.cardElement.classList.add("display-flex");
    //style.display = "flex";
    //cards.forEach(card => card.classList.add("flex"));
    // this.cardElement.classList.add("flex");
  }
}

/* START HERE: */

let tabs = document.querySelectorAll(".tab");
//console.log(tabs);
tabs.forEach(link => new TabLink(link));
