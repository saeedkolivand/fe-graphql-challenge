export interface SearchBoxPropsTypes {
  value: string;
  onChange: (item: string) => void;
  searchPlaceholder?: string;
  wrapperClassName?: string;
}
