import React from 'react';
import styled from 'styled-components/macro';

const getSrcset = (imgPath, extension) =>
  [1, 2, 3].map(m => imgPath.replace('.jpg', m === 1 ? extension : `@${m}x${extension} ${m}x`)).join(', ')

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={getSrcset(src, '.avif')} />
          <Image src={src} alt={alt}/>
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 8px 0;
`;

const Tag = styled.li`
  &:not(:last-of-type) {
      margin-right: 8px;
  }
  
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
