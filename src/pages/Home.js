import React from "react";
import { useGetCategoriesQuery } from "../services/productsApi";
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  const { data, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <p> Loading...</p>;
  }
  if (error) {
    return <p> {error}</p>;
  }
  if (data) {
    return (
      <div>
        {data.map((category) => {
          return (
            <CategoryCard
              name={category.name}
              description={category.description}
              id={category._id}
            />
          );
        })}
      </div>
    );
  }
}
