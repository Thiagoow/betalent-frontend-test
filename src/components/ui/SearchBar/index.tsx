import searchIcon from '@/assets/icons/search.svg';
import {
  SearchBarContainer,
  Title,
  SearchInputContainer,
  SearchInput,
  SearchIcon
} from './SearchBar.styles';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <SearchBarContainer>
      <Title>Funcionários</Title>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => onSearch(e.target.value)}
        />
        <SearchIcon src={searchIcon} alt="Search" />
      </SearchInputContainer>
    </SearchBarContainer>
  );
}

export default SearchBar;
