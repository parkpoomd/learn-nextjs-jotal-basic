import ProductsList from "@/components/products/ProductsList";
import SearchBar from "@/components/search/SearchBar";

export default function Home() {
  return (
    <main className="px-8 py-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* Search Bar */}
        <SearchBar />
        {/* Product List */}
        <ProductsList />
      </div>
    </main>
  );
}
