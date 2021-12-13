import React from "react";
import { useLocation } from "react-router";
import { useGetCategoryByIdQuery } from "../services/productsApi";
export default function Categories() {
  let location = useLocation().pathname;

  const { data, isLoading, error } = useGetCategoryByIdQuery(location);

  return <div>Categories Page our location is: {location}</div>;
}
