import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const productId = product._id || product.id;

      const exists = prev.some(
        (item) => (item._id || item.id) === productId
      );

      if (exists) {
        return prev.filter(
          (item) => (item._id || item.id) !== productId
        );
      }

      return [...prev, product];
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(
      (item) => (item._id || item.id) === productId
    );
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) =>
      prev.filter(
        (item) => (item._id || item.id) !== productId
      )
    );
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};