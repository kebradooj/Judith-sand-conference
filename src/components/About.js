import React from "react";
import styled from "styled-components";
import AboutBG from "../bg/about.jpg"

const About = () => {
  return (
    <MainContainer>
      <div className="container py-5">
        <h3 className="display-3">About</h3>
        <p>
          M'appelle encadré des la le et, exquise grimace de promettant
          s'abreuve la parfaite. Langoureux force décor vois divin. Que cet yeux
          aussi charme charmer ô ce, etre volupté adorablement souris
          adorablement et. Suborneur parce ou coeur et. Corps regarde et flots
          ment face atrocement. Des force par qui yeux son vraiment d'athlete
          mal, coeur encore atrocement et a trait vois ce aux et, et blaspheme
          qui l'art de son le.. Que électriques dispersant que les moi
          ventouses. Pleins et des des que. Falots des ma coque haleurs. De le
          la.
          De fumant fond et bords voiliers des flots sidéraux comme mer. A des voulais bonaces impassibles ces, pussent avec sais et enivrantes pieds des lumineux aux aubes, bouchon comme peuple et éclate. Amour un sous nacreux montant sans, je anglais balottant m'ont par si, par sourd cloués rouleurs pas les l'homme fois. De ciel je seves et les, et rutilements.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus assumenda commodi officiis corrupti esse sequi perspiciatis doloremque eius reprehenderit, maxime quis possimus iusto delectus! Necessitatibus deleniti dicta consectetur corporis recusandae repudiandae aliquam optio voluptatum deserunt quam! Beatae debitis quia, atque amet similique quibusdam harum illo ipsa veritatis quod hic eum pariatur laborum impedit molestias eveniet est? Quidem eveniet esse harum enim incidunt beatae nulla numquam corporis porro nisi dicta, aspernatur vel unde vitae iste culpa ab eius sunt placeat voluptatibus voluptatum. Laudantium, maiores fugit ullam provident nam magnam repudiandae enim quasi voluptates hic rerum tempora, ad delectus molestiae recusandae esse libero alias temporibus maxime aliquid non. Odit quaerat quis dolor quidem. Doloribus cumque ullam ad! Ipsum eveniet nihil culpa a repellendus minima. Eaque sequi consequatur fugit, autem dignissimos eum voluptas dolore aspernatur, obcaecati aliquam reiciendis a at tenetur repellendus esse explicabo saepe et, nemo nobis. Recusandae nisi mollitia voluptatum explicabo a perferendis cumque quidem blanditiis neque est officia, quisquam eaque sequi officiis vel quas sapiente ipsa! Fugit quo reiciendis magni, molestiae, porro nostrum sit voluptatum quam, cum enim omnis voluptates! Aliquid consectetur, autem ratione ex suscipit in. Eveniet, nulla nihil esse porro magnam rem et, molestiae dolor odit dolorem aliquam. Numquam ducimus vero blanditiis nesciunt obcaecati quae, asperiores voluptatem consequatur neque animi dolores sint dolorum alias velit vel similique aperiam? Sed, porro nisi aperiam fugit laudantium enim reprehenderit tenetur officia maxime odit veritatis recusandae architecto ducimus deleniti, beatae earum!
        </p>
      </div>
    </MainContainer>
  );
};

export default About;

//Styled components
const MainContainer = styled.div`
  background: url(${AboutBG}) no-repeat center/cover;
  height: 100vh;

  h3 {
    color: var(--light-pink);
  }

  p {
    color: var(--main-color);
  }

`;