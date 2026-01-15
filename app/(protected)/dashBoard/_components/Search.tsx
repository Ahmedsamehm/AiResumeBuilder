"use client";

import { Input } from "@/app/components/shared/ui/input";

import { useDashboardStore } from "../_store/useDashboardStore";

const Search = () => {
  const searchQuery = useDashboardStore((state) => state.searchQuery);
  const setSearchQuery = useDashboardStore((state) => state.setSearchQuery);

  return (
    <div>
      <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
