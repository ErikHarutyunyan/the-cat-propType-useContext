import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


import { Section } from "./Category.styled";

import { Grid } from "../../components/Grid";
import { ArticleImg } from "../../components/Article/";
import { LoadMore } from "../../components/LoadMore/";
import { Loading } from "../../components/Loading";

import { useGlobalContext } from "../../context";

const Category = () => {
  const { isLoading, handleContent, handleCategory, catsId, cats } =
    useGlobalContext();

  const { id } = useParams();

  let trackId = id || catsId;

  useEffect(() => {
    handleCategory(parseInt(trackId));
    //eslint-disable-next-line
  }, [trackId]);

  return (
    <>
      <Section>
        <Grid>
          {cats.map((cat, index) => {
            const { id, url } = cat;
            return <ArticleImg key={index} id={id} url={url} />;
          })}
        </Grid>
        {isLoading && <Loading />}
        <LoadMore handleContent={handleContent} title="load more" />
      </Section>
    </>
  );
};

export default Category;
