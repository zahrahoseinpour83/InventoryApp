const ProductList = ({ products, categories, setProducts }) => {
  // ✅ اصلاح تابع findCategory برای جلوگیری از undefined.title
  const findCategory = (categoryId) => {
    const category = categories.find((c) => c.id === parseInt(categoryId));
    return category ? category.title : "دسته نامشخص";
  };

  const deleteProductHandler = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== parseInt(productId)
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="">
      <h2 className="text-xl text-slate-400 font-bold mb-4 border-b-slate-500 border-b">
        ProductList
      </h2>
      <div className="overflow-x-auto">
        {/* ✅ افزودن بررسی products قبل از map برای جلوگیری از خطای undefined */}
        {products?.map((product) =>
          product ? (
            <div
              key={product.id}
              className="flex items-center justify-between mb-2 w-full min-w-[400px]"
            >
              <span className="text-slate-400">{product.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-slate-400">
                  {new Date(product.createdAt).toLocaleDateString("fa-IR")}
                </span>
                <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                  {findCategory(product.categoryId)}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                  {product.quantity}
                </span>
                <button
                  onClick={() => deleteProductHandler(product.id)}
                  className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product"
                >
                  delete
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProductList;
