import * as React from "react";
import Card from "../../Components/Card";

function RelatedNews({ news }) {
  const QUANTITY_OF_NEWS_TO_SHOW = 3;

  const newsToShow = React.useMemo(
    () =>
      news
        .slice(0, QUANTITY_OF_NEWS_TO_SHOW)
        .map(({ id, name, image }) => (
          <Card title={name} image={image} key={id} />
        )),
    [news]
  );

  return (
    <section className="d-flex flex-column flex-sm-row flex-wrap justify-content-sm-evenly align-content-center">
      {newsToShow}
    </section>
  );
}

export default RelatedNews;
