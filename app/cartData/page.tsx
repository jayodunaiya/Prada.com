// data/cartData.ts
export const cartData = {
  items: [
    { name: "Prada Summer Bag", color: "White Leather", price: 3200000, quantity: 1 }
  ],
  // Helper function stored here so both pages can use it
  formatNaira: (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
  }
};