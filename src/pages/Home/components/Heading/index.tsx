import { HeadingStyle } from './Heading.styled';

interface IHeading {
  title: string;
  path: string;
}

const Heading = ({ title, path }: IHeading) => {
  return (
    <HeadingStyle>
      <a href={path}>{title}</a>
    </HeadingStyle>
  );
};

export default Heading;
