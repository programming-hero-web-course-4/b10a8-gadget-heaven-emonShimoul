import { toast } from "react-toastify";

const getCartList = () => {
  // read-list
  const cartListStr = localStorage.getItem("cart");
  if (cartListStr) {
    const cartList = JSON.parse(cartListStr);
    return cartList;
  } else {
    return [];
  }
};

const addToCartList = (id) => {
  const cartList = getCartList();
  // console.log(storedList);

  if (cartList.includes(id)) {
    // console.log(id, "Already exist in the read list");
    toast("Already exist in the cart list!!");
  } else {
    cartList.push(id);
    const cartListStr = JSON.stringify(cartList);
    localStorage.setItem("cart", cartListStr);
    // ideally trigger toast from the component
    toast("Added to Cart!!");
  }
};

const getStoredWishList = () => {
  // wishlist
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();

  if (storedWishList.includes(id)) {
    // console.log(id, "Already exist in the wish list");
    toast("Already exist in the Wishlist!!");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    // ideally trigger toast from the component
    toast("Added to Wishlist!!");
  }
};

export { addToCartList, addToStoredWishList, getCartList, getStoredWishList };
