import { useEffect, useState } from "react";

export const useFilters = (data) => {
  const [filters, setFilters] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [hasShowMore, setHasShowMore] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  function handleCheckBoxChange(name) {
    const filt = data?.find((el) => el.name === name);
    if (filtered.find((el) => el === name) === undefined) {
      setFiltered([...filtered, filt.name]);
    } else {
      const filterData = filtered.filter((el) => el !== name);
      setFiltered(filterData);
    }
  }

  useEffect(() => {
    if (!showMore) {
      setFilters(data?.slice(0, 5));
    } else {
      setFilters(data);
    }

    if (data?.length <= 5) {
      setHasShowMore(false);
    } else {
      setHasShowMore(true);
    }
  }, [data, setHasShowMore, showMore]);

  return {
    filters,
    hasShowMore,
    showMore,
    toggleShowMore,
    filtered,
    setFiltered: handleCheckBoxChange,
  };
};
