import { FilterContext } from 'contexts/Filters';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Button, Text } from './styles';

interface FilterButtonProps {
  type: 'titulos' | 'status';
  value: string | string;
  label: string | string;
  status: boolean;
}

export default function FilterButton({
  label,
  type,
  value,
  status,
}: FilterButtonProps) {
  const [isClicked, setIsClicked] = useState(status);
  const { updateCacheFilter, selectedFilters } = useContext(FilterContext);

  useEffect(() => {
    if (type === 'titulos' && typeof value === 'string')
      setIsClicked(selectedFilters.titulos.includes(value));
    else if (type === 'status' && typeof value === 'string')
      setIsClicked(selectedFilters.status.includes(value));
  }, [selectedFilters]);

  return (
    <Button
      isClicked={isClicked}
      onClick={() => updateCacheFilter(type, value)}
    >
      <Text>{label}</Text>
    </Button>
  );
}
