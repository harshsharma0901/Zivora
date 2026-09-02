const filtered = useMemo(() => {
    let list = category === 'All' ? products : products.filter((p) => p.category === category)
    list = [...list]
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    // Out-of-stock pieces always go to the end, regardless of sort/filter
    list.sort((a, b) => (a.inStock === false ? 1 : 0) - (b.inStock === false ? 1 : 0))
    return list
  }, [category, sort, products])
