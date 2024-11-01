import { useLocalStorage } from "@vueuse/core";

export const useUserStore = defineStore('user', () => {
    const cart = useLocalStorage<string[]>('cart', []);
    const wishlist = useLocalStorage<string[]>('wishlist', []);

    const toggleCartItem = (productId: string) => {
        if (cart.value.includes(productId)) {
            cart.value = cart.value.filter((id) => id !== productId)
        } else {
            cart.value.push(productId);
        }
    };

    const toggleWishlistItem = (productId: string) => {
        if (wishlist.value.includes(productId)) {
            wishlist.value = wishlist.value.filter((id) => id !== productId)
        } else {
            wishlist.value.push(productId);
        }
    };

    const wishlistCount = computed(() => { return wishlist.value.length });
    const cartCount = computed(() => { return cart.value.length });

    return { toggleCartItem, toggleWishlistItem, wishlistCount, cartCount, wishlist };
},
)