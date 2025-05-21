document.addEventListener("DOMContentLoaded", function () {
    // Select the elements
    const userOption = document.getElementById("userOption");
    const shopkeeperOption = document.getElementById("shopkeeperOption");
    const welcomeText = document.getElementById("welcomeText");
    const userForm = document.getElementById("userForm");
    const shopkeeperForm = document.getElementById("shopkeeperForm");
    let selectedRole = "user"; // default to user
  
    // Function to select the User option
    function selectUser() {
      userOption.classList.add("selected");
      shopkeeperOption.classList.remove("selected");
      welcomeText.textContent = "Hello new user!";
      userForm.classList.add("active");
      shopkeeperForm.classList.remove("active");
      selectedRole = "user";
    }
  
    // Function to select the Shopkeeper option
    function selectShopkeeper() {
      shopkeeperOption.classList.add("selected");
      userOption.classList.remove("selected");
      welcomeText.textContent = "Hello new shopkeeper!";
      shopkeeperForm.classList.add("active");
      userForm.classList.remove("active");
      selectedRole = "shopkeeper";
    }
  
    // Add event listeners to the options
    userOption.addEventListener("click", selectUser);
    shopkeeperOption.addEventListener("click", selectShopkeeper);
  });
  