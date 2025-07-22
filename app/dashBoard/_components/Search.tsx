"use client";

import { Input } from "@/app/components/shared/ui/input";
import { useCallback, useEffect, useState } from "react";

import { useDashBoardContext } from "@/app/context/DashBoardProvider";

const Search = () => {
  const { resumes, setFilteredResumes } = useDashBoardContext();
  const [searchResume, setSearchResume] = useState("");

  useEffect(() => {
    if (resumes) {
      setFilteredResumes(resumes);
    }
  }, [resumes]);
  const handleSearchResume = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchItem = e.target.value;
      setSearchResume(searchItem);

      const filterResume = resumes?.filter((resume) => {
        return resume?.title.toLowerCase().includes(searchItem.toLowerCase());
      });
      setFilteredResumes(filterResume);
    },
    [resumes]
  );
  return (
    <div>
      <Input value={searchResume} onChange={handleSearchResume} type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
