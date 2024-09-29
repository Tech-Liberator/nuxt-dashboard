/**
 * Thus middleware is used to redirect from `/` to `/dashboard`
 * This shoould be removed in production
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // In a real app you would probably not redirect every route to `/`
  if (to.path === "/") {
    return navigateTo("/dashboard");
  }
});
