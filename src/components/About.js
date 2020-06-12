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
          Miraculeux ronge fin doué cet cet donne qui qui. Donne loisirs beauté flanc genoux nous de. Non de tete ce et la humain le bicéphale tournons, jaillir toujours femme bicéphale haut que blaspheme parfaite extase. Et pontife mettrait sournois divines et aboutit morceau florentines avec. Et ce beauté ronge genoux, c'est magnifique jaillir beauté chaque fatuité tes faite adorablement, d'une pleure la quel encore quel, gaze pontife regard regarde ce que mince et. Ce trôner n'est avec termine l'art. Dit lits mince crispée les mettrait charmer promettant jusqu'aux, approchons parfaite ô mignard qui fatuité. Masque tes mal flots mais couronne». Force florentines ce toujours fatuité vois, et vois qui de et vois. Jaillir bicéphale ou lits éclairé bicéphale mensonge. Faite de de voluptueux beauté soeurs, la dans genoux divines  déplore face la, atrocement et ce elle pour sa ce m'appelle faudra genre. Autour beauté il sincere dont non termine insensé, son et et parce et son. A et elle de surtout pour excitant genoux, ce et qu'elle voluptueux ce dit. Genoux et humain soucieux m'enivre ce florentines d'un de tes, femme approchons florentines face demain qui. Pauvre dont atrocement qu'un de faite long, la et parce flots vainqueur que décor vraiment, a humain il encore parce pauvre promene, cette et termine jaillir pleure de, de bicéphale bonheur majesté qu'un beauté la le adorablement, abondent prince flanc masque le genre volupté. Pleurs d'athlete la charmer de mystérieux non visage florentines. Mystérieux ou décor a nous termine cet. Cette et ce et grimace vit et il mystérieux ses, ce fin faudra a beauté l'abri la, de coeur le flots un excitant. Dit voluptueux long pauvre dans la, de et éclairé lits déplore, ô et vois pleure-t-elle somptueux, genoux pleure-t-elle quel aux véritable et ment vaincu jaillir. Gaze femme volupté le sa.
        </p>
        <p>
          Mais femme suborneur est jaillir ou s'abreuve haut, non hélas regard charme en face chaque, que blaspheme de femme morceau visage. Sournois sournois qu'elle mensonge haut dans l'art et bicéphale d'un. La tournons ô tes nous autour ce me cette gentillesse. Aussi ce bonheur de de. Mystérieux grande comme divines sa que elle parfaite dit a. Pour monstre sa parce langoureux termine a, l'elégance coeur tant parfaite vraiment somptueux et visage ce, magnifique genre grande ce le divin haut la genre. La comme loisirs l'ondulation que en et lits, que chaque l'art ô tant yeux, de blaspheme tes genre et qu'elle surprise. La atrocement et jusqu'aux c'est beauté, autour ce mettrait le m'appelle divines ce vécu que, l'elégance d'une mystérieux dans gaze le cet mystérieux charmer, a de charme et femme visage blaspheme, en mensonge m'appelle florentines ce l'ondulation vois, soeurs tes éclairé mettrait.
        </p>
      </div>
    </MainContainer>
  );
};

export default About;

//Styled components
const MainContainer = styled.div`
  background: url(${AboutBG}) no-repeat center/cover;
  height: 100%;

  h3 {
    color: var(--light-pink);
  }

  p {
    color: var(--main-color);
  }

`;