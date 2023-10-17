'use client';

import Giscus from "@giscus/react";

interface propsType {
    repo : any,
    repoId : any,
    category : any,
    categoryId : any,
}

export default function Comments({ repo, repoId, category, categoryId} : propsType) {
  return (
    <Giscus
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="ko"
        loading="lazy"
    />
  );
}