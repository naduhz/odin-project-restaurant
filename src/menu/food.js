const foodItem = (name, description, img_src, rating) => {
  const img = new Image();
  img.src = img_src;

  return { name, description, img, rating };
};

export default foodItem;
