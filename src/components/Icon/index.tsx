import { DivIcon, ImageIcon, TextIcon } from './styles'

export interface IconProps {
  src: any;
  txt: string;
  alt?: string;
}

function Icon({ src, txt, alt }: IconProps) {
  return (
    <>
      <DivIcon>
        <ImageIcon src={src} alt={alt} />

        <TextIcon>
          {txt}
        </TextIcon>
      </DivIcon >
    </>
  );
}

export default Icon;
