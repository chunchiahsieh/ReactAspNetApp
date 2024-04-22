export interface PageBDCContainerProps {
  prop?: string;
}

export function PageBDCContainer({prop = 'default value'}: PageBDCContainerProps) {
  return <div>PageBDCContainer {prop}</div>;
}
