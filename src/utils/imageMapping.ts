// Image mapping utility for Vite to properly handle assets in production builds
export const imageMapping: Record<string, string> = {
  // Waffle images
  "image-waffle-thumbnail.jpg": new URL(
    "../assets/images/image-waffle-thumbnail.jpg",
    import.meta.url
  ).href,
  "image-waffle-mobile.jpg": new URL("../assets/images/image-waffle-mobile.jpg", import.meta.url)
    .href,
  "image-waffle-tablet.jpg": new URL("../assets/images/image-waffle-tablet.jpg", import.meta.url)
    .href,
  "image-waffle-desktop.jpg": new URL("../assets/images/image-waffle-desktop.jpg", import.meta.url)
    .href,

  // Crème Brûlée images
  "image-creme-brulee-thumbnail.jpg": new URL(
    "../assets/images/image-creme-brulee-thumbnail.jpg",
    import.meta.url
  ).href,
  "image-creme-brulee-mobile.jpg": new URL(
    "../assets/images/image-creme-brulee-mobile.jpg",
    import.meta.url
  ).href,
  "image-creme-brulee-tablet.jpg": new URL(
    "../assets/images/image-creme-brulee-tablet.jpg",
    import.meta.url
  ).href,
  "image-creme-brulee-desktop.jpg": new URL(
    "../assets/images/image-creme-brulee-desktop.jpg",
    import.meta.url
  ).href,

  // Macaron images
  "image-macaron-thumbnail.jpg": new URL(
    "../assets/images/image-macaron-thumbnail.jpg",
    import.meta.url
  ).href,
  "image-macaron-mobile.jpg": new URL("../assets/images/image-macaron-mobile.jpg", import.meta.url)
    .href,
  "image-macaron-tablet.jpg": new URL("../assets/images/image-macaron-tablet.jpg", import.meta.url)
    .href,
  "image-macaron-desktop.jpg": new URL(
    "../assets/images/image-macaron-desktop.jpg",
    import.meta.url
  ).href,

  // Tiramisu images
  "image-tiramisu-thumbnail.jpg": new URL(
    "../assets/images/image-tiramisu-thumbnail.jpg",
    import.meta.url
  ).href,
  "image-tiramisu-mobile.jpg": new URL(
    "../assets/images/image-tiramisu-mobile.jpg",
    import.meta.url
  ).href,
  "image-tiramisu-tablet.jpg": new URL(
    "../assets/images/image-tiramisu-tablet.jpg",
    import.meta.url
  ).href,
  "image-tiramisu-desktop.jpg": new URL(
    "../assets/images/image-tiramisu-desktop.jpg",
    import.meta.url
  ).href,

  // Baklava images
  "image-baklava-thumbnail.jpg": new URL(
    "../assets/images/image-baklava-thumbnail.jpg",
    import.meta.url
  ).href,
  "image-baklava-mobile.jpg": new URL("../assets/images/image-baklava-mobile.jpg", import.meta.url)
    .href,
  "image-baklava-tablet.jpg": new URL("../assets/images/image-baklava-tablet.jpg", import.meta.url)
    .href,
  "image-baklava-desktop.jpg": new URL(
    "../assets/images/image-baklava-desktop.jpg",
    import.meta.url
  ).href,

  // Meringue images
  "image-meringue-thumbnail.jpg": new URL(
    "../assets/images/image-meringue-thumbnail.jpg",
    import.meta.url
  ).href,
  "image-meringue-mobile.jpg": new URL(
    "../assets/images/image-meringue-mobile.jpg",
    import.meta.url
  ).href,
  "image-meringue-tablet.jpg": new URL(
    "../assets/images/image-meringue-tablet.jpg",
    import.meta.url
  ).href,
  "image-meringue-desktop.jpg": new URL(
    "../assets/images/image-meringue-desktop.jpg",
    import.meta.url
  ).href,

  // Cake images
  "image-cake-thumbnail.jpg": new URL("../assets/images/image-cake-thumbnail.jpg", import.meta.url)
    .href,
  "image-cake-mobile.jpg": new URL("../assets/images/image-cake-mobile.jpg", import.meta.url).href,
  "image-cake-tablet.jpg": new URL("../assets/images/image-cake-tablet.jpg", import.meta.url).href,
  "image-cake-desktop.jpg": new URL("../assets/images/image-cake-desktop.jpg", import.meta.url)
    .href,

  // Brownie images
  "image-brownie-thumbnail.jpg": new URL(
    "../assets/images/image-brownie-thumbnail.jpg",
    import.meta.url
  ).href,
  "image-brownie-mobile.jpg": new URL("../assets/images/image-brownie-mobile.jpg", import.meta.url)
    .href,
  "image-brownie-tablet.jpg": new URL("../assets/images/image-brownie-tablet.jpg", import.meta.url)
    .href,
  "image-brownie-desktop.jpg": new URL(
    "../assets/images/image-brownie-desktop.jpg",
    import.meta.url
  ).href,

  // Panna Cotta images
  "image-panna-cotta-thumbnail.jpg": new URL(
    "../assets/images/image-panna-cotta-thumbnail.jpg",
    import.meta.url
  ).href,
  "image-panna-cotta-mobile.jpg": new URL(
    "../assets/images/image-panna-cotta-mobile.jpg",
    import.meta.url
  ).href,
  "image-panna-cotta-tablet.jpg": new URL(
    "../assets/images/image-panna-cotta-tablet.jpg",
    import.meta.url
  ).href,
  "image-panna-cotta-desktop.jpg": new URL(
    "../assets/images/image-panna-cotta-desktop.jpg",
    import.meta.url
  ).href,
};

// Helper function to get image URL
export function getImageUrl(filename: string): string {
  return imageMapping[filename] || filename;
}
